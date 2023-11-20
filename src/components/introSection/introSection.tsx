import React, {useRef, useEffect} from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
    StyledDescription,
    StyledSecret,
    StyledSection,
    StyledTitle,
    StyledLearnMore,
    StyledWrapper,
} from './introSection.styled';

import Secret from '../../images/icons/common/secret.svg';
import { IIntroState } from '../app/app.types';

const IntroSection = ({
    presentVisibility,
    descriptionVisiblity
}: IIntroState) => {
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (descriptionRef.current && wrapperRef.current) {
            const description = descriptionRef.current;
            const wrapper = wrapperRef.current;

            const descriptionHeight = description.offsetHeight;

            if (presentVisibility === "hidden" || presentVisibility === "idle") {
                // because translateY has -100% value height and margin compensation is needed for hidden overflow;
                wrapper.style.height = `${descriptionHeight * 2}px`;
                wrapper.style.marginTop = `-${descriptionHeight}px`;
            } else {
                wrapper.style.height = "0px";
            }
        }

    }, [presentVisibility]);

    return (
        <StyledSection>
            <StyledTitle presentVisibility={presentVisibility}>
                <StyledSecret presentVisibility={presentVisibility}>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledWrapper ref={wrapperRef} descriptionVisiblity={descriptionVisiblity}>
                <StyledDescription ref={descriptionRef} descriptionVisiblity={descriptionVisiblity}>
                    <p>
                        Каждый день с 1 по 29 декабря тебя ждёт новый подарок. Открывай карточки и получай сюрприз, который мы приготовили в этот день.
                        <StyledLearnMore onClick={() => {scrollTo("#info")}}>
                            Подробнее
                        </StyledLearnMore>
                    </p>
                </StyledDescription>
            </StyledWrapper>
        </StyledSection>
    )
};

export default IntroSection;