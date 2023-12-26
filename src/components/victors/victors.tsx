import React, { useState, useEffect, useRef } from 'react';
import { useUnit } from 'effector-react';

import { VICTORS } from './victors.constants';
import { StyledVictor, StyledWrapper, StyledPhone, StyledSection, StyledTitle } from './victors.styled';
import { actionBlock } from '../../effector/actionBlock/state';
import { updateHeight } from '../../effector/actionBlock/event';

const Victors = ({
    isAnimated,
} : {
    isAnimated?: boolean;
}) => {
    const actionBlockStore = useUnit(actionBlock);
    const updateHeightEvent = useUnit(updateHeight);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const heightSetter = () => {
            if (ref.current) {
                const height = ref.current.clientHeight;

                if (actionBlockStore.height !== height) {
                    updateHeightEvent({height});
                }
            }
        }

        if (ref.current) {
            heightSetter();
            setIsVisible(true);

            window.addEventListener("resize", heightSetter);

            return () => {
                window.removeEventListener("resize", heightSetter);
            }
        }
    }, []);

    return (
        <StyledSection ref={ref} isAnimated={isAnimated} isVisible={isVisible}>
            <StyledTitle>Победители конкурса</StyledTitle>
            <StyledWrapper>
                {VICTORS.map(victor => {
                    const formattedPhone = victor.phone.replace(/\s\d{3}\s/g, " *** ");

                    return (
                        <StyledVictor>
                            <StyledPhone icon={victor.icon}>{formattedPhone}</StyledPhone>
                        </StyledVictor>
                    )
                })}
            </StyledWrapper>
        </StyledSection>
    )
};

export default Victors;