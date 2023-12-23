import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

import {
    StyledDescription,
    StyledSecret,
    StyledSection,
    StyledTitle,
    StyledLearnMore,
    StyledWrapper,
} from './introSection.styled';

import Secret from '../../images/icons/common/secret.svg';
import { IIntroSection } from './introSection.types';
import { useUnit } from 'effector-react';
import { actionBlock } from '../../effector/actionBlock/state';
import { updateActionBlock } from '../../effector/actionBlock/event';

const IntroSection = ({
    date,
    setCurrentId,
}: IIntroSection) => {
    const actionBlockStore = useUnit(actionBlock);
    const updateActionBlockEvent = useUnit(updateActionBlock);
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const day = date.getDate();

    useEffect(() => {
        if (descriptionRef.current && wrapperRef.current && day < 30) {
            const description = descriptionRef.current;
            const wrapper = wrapperRef.current;

            const descriptionHeight = description.clientHeight;

            if (["idle", "hidden"].includes(actionBlockStore.visibility)) {
                // поскольку у translateY(-100%) и overflow: hidden нужна компенсация для height и margin 
                wrapper.style.height = `${descriptionHeight * 2}px`;
                wrapper.style.marginTop = `-${descriptionHeight}px`;
            } else {
                wrapper.style.height = "0px";
                wrapper.style.marginTop = `0px`;
            }
        }
    }, [actionBlockStore.visibility]);

    const getText = () => {
        if (day < 30) {
            return (
                <p>
                    Листай лендинг вниз и выбирай сегодняшнее число, под ним скрывается подарок-дня. Каждый день новый.
                    <Link to="info" smooth={true} duration={1000} isDynamic>
                        <StyledLearnMore>
                            Подробнее
                        </StyledLearnMore>
                    </Link>
                </p>
            );
        }

        return (
            <p>
                С Новым Годом!
                Пусть как новогодний снегопад, сыпется на вас счастье! 
                Пусть в вашем доме всегда царят душевный покой, уют, радость и оптимизм! 
                И конечно, пусть все проблемы и заботы останутся в уходящем году!
                <StyledLearnMore onClick={() => {
                    updateActionBlockEvent({
                        isRendered: true,
                        type: "victor",
                        visibility: "visible",
                    });
    
                    setCurrentId(null);
                }}>
                    Узнать победителей
                </StyledLearnMore>
            </p>
        )
    }

    return (
        <StyledSection>
            <StyledTitle actionResultBlockVisibility={actionBlockStore.visibility}>
                <StyledSecret actionResultBlockVisibility={actionBlockStore.visibility}>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledWrapper ref={wrapperRef} day={day} actionResultBlockVisibility={actionBlockStore.visibility}>
                <StyledDescription ref={descriptionRef} day={day} actionResultBlockVisibility={actionBlockStore.visibility}>
                    {getText()}
                </StyledDescription>
            </StyledWrapper>
        </StyledSection>
    )
};

export default IntroSection;