import React from 'react';
import Media from 'react-media';

import scrollTo from 'gatsby-plugin-smoothscroll';

import {
    StyledDescription,
    StyledFragment,
    StyledSecret,
    StyledSection,
    StyledTitle,
    StyledLearnMore,
} from './introSection.styles';
import Secret from '../../images/icons/common/secret.svg';

import breakpoints from '../../constants/breakpoints.json';

const IntroSection = () => {
    return (
        <StyledSection>
            <StyledTitle>
                <StyledSecret>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledDescription>
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