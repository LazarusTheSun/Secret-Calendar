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
            <Media queries={{
                large: `(min-width: ${breakpoints.s}px)`,
                small: `(max-width: ${breakpoints.s - 1}px)`
            }}>
                {matches => (
                    <>
                        {matches.large && (
                            <StyledDescription>
                                <p>
                                    Каждый день <StyledFragment>с 1 по 29 декабря</StyledFragment> тебя ждёт новый подарок. Открывай карточки и получай сюрприз, который мы приготовили в этот день.
                                </p>
                                <p>
                                    Используй промокоды при заказе и получи ещё больше — шанс выиграть один из 10 сертификатов на <StyledFragment>5 000 рублей</StyledFragment> для заказа в Secret Kitchen.
                                    <StyledLearnMore onClick={() => {scrollTo("#info")}}>
                                        Подробнее
                                    </StyledLearnMore>
                                </p>
                            </StyledDescription>
                        )}
                        {matches.small && (
                            <StyledDescription>
                                <p>Каждый день <StyledFragment>с 1 по 29 декабря</StyledFragment> тебя ждёт новый подарок. Открывай карточки и получай сюрприз.</p>
                                <p>
                                    А еще ты можешь выиграть сертификат <br />на <StyledFragment>5 000 рублей</StyledFragment> для заказа в Secret Kitchen.
                                    <StyledLearnMore onClick={() => {scrollTo("#info")}}>
                                        Подробнее
                                    </StyledLearnMore>
                                </p>
                            </StyledDescription>
                        )}
                    </>
                )}
            </Media>
        </StyledSection>
    )
};

export default IntroSection;