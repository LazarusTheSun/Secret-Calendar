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

const IntroSection = ({
    actionResultBlockVisibility,
    date,
    setAppState,
    setCurrentId,
}: IIntroSection) => {
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const day = date.getDate();

    useEffect(() => {
        if (descriptionRef.current && wrapperRef.current && day < 30) {
            const description = descriptionRef.current;
            const wrapper = wrapperRef.current;

            const descriptionHeight = description.offsetHeight;

            if (["idle", "hidden"].includes(actionResultBlockVisibility)) {
                // поскольку у translateY(-100%) и overflow: hidden нужна компенсация для height и margin 
                wrapper.style.height = `${descriptionHeight * 2}px`;
                wrapper.style.marginTop = `-${descriptionHeight}px`;
            } else {
                wrapper.style.height = "0px";
                wrapper.style.marginTop = `0px`;
            }
        }

    }, [actionResultBlockVisibility]);

    const getText = () => {
        if (day < 30) {
            return (
                <p>
                    Каждый день с 1 по 29 декабря тебя ждёт новый подарок.
                    Открывай карточки и получай сюрприз, который мы приготовили в этот день.
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
                    setAppState({
                        isActionResultBlockRendered: true,
                        actionResultBlockType: "victor",
                        actionResultBlockVisibility: "visible",
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
            <StyledTitle actionResultBlockVisibility={actionResultBlockVisibility}>
                <StyledSecret actionResultBlockVisibility={actionResultBlockVisibility}>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledWrapper ref={wrapperRef} day={day} actionResultBlockVisibility={actionResultBlockVisibility}>
                <StyledDescription ref={descriptionRef} day={day} actionResultBlockVisibility={actionResultBlockVisibility}>
                    {getText()}
                </StyledDescription>
            </StyledWrapper>
        </StyledSection>
    )
};

export default IntroSection;