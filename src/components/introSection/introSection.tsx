import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
    StyledDescription,
    StyledSecret,
    StyledSection,
    StyledTitle,
    StyledLearnMore,
} from './introSection.styled';

import Secret from '../../images/icons/common/secret.svg';
import { IIntroState } from '../app/app.types';

const IntroSection = ({
    presentVisibility,
    descriptionVisiblity
}: IIntroState) => {
    return (
        <StyledSection>
            <StyledTitle presentVisibility={presentVisibility}>
                <StyledSecret presentVisibility={presentVisibility}>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledDescription descriptionVisiblity={descriptionVisiblity}>
                <p>
                    Каждый день с 1 по 29 декабря тебя ждёт новый подарок. Открывай карточки и получай сюрприз, который мы приготовили в этот день.
                    <StyledLearnMore onClick={() => {scrollTo("#info")}}>
                        Подробнее
                    </StyledLearnMore>
                </p>
            </StyledDescription>
        </StyledSection>
    )
};

export default IntroSection;