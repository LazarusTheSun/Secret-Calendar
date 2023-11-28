import React, { useState, useEffect, useRef } from 'react';

import { VICTORS } from './victors.constants';
import { StyledVictor, StyledWrapper, StyledPhone, StyledSection, StyledTitle } from './victors.styled';
import { IVictors } from './victors.types';

const Victors = ({
    setActionResultBLockHeight,
    actionResultBLockHeight,
}: IVictors) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const heightSetter = () => {
            if (ref.current) {
                const height = ref.current.offsetHeight;

                if (actionResultBLockHeight !== height) {
                    setActionResultBLockHeight(height);
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
    }, [window.innerWidth]);

    return (
        <StyledSection ref={ref} isVisible={isVisible}>
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