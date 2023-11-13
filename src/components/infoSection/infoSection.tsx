import React from 'react';

import {
    StyledAfterwordTitle,
    StyledColumn,
    StyledColumnTitle,
    StyledContentWrapper,
    StyledDescription,
    StyledIconWrapper,
    StyledInfo,
    StyledParagraph,
    StyledSection,
    StyledWrapper,
    StyledInfoWrapper
} from './infroSection.styled';

import Evergreen from '../../images/icons/common/evergreen.svg';
import Emoji from '../../images/icons/common/emoji.svg';

const InfoSection = () => {
    return (
        <StyledSection id="info">
            <StyledWrapper>
                <StyledContentWrapper>
                    <StyledColumnTitle>Условия акции</StyledColumnTitle>
                    <StyledDescription>
                        <StyledParagraph>Чтобы узнать, какой подарок тебя ждёт, нажми на календаре сегодняшнее число. Во всплывающем окне появится фото подарка или размер скидки,  а также промокод и условия. Скопируй промокод или нажми на кнопку ЗАКАЗАТЬ.</StyledParagraph>
                    </StyledDescription>
                    <StyledInfo>
                            <StyledInfoWrapper>
                                <StyledIconWrapper width={24} height={24}>
                                    <Emoji />
                                </StyledIconWrapper>
                                <div>
                                    <StyledParagraph weight={700}>Адвент-промокоды действуют только один день</StyledParagraph>
                                    <StyledParagraph>ты не можешь воспользоваться ни вчерашним, ни завтрашним предложением.</StyledParagraph>
                                </div>
                            </StyledInfoWrapper>
                    </StyledInfo>
                </StyledContentWrapper>
                <StyledColumn>
                    <StyledIconWrapper height={80} width={80}>
                        <Evergreen />
                    </StyledIconWrapper>
                    <StyledContentWrapper>
                        <StyledColumnTitle>большой предновогодний розыгрыш Secret Kitchen</StyledColumnTitle>
                        <StyledDescription>
                            <StyledParagraph>
                                Сделав заказ с использованием промокода  из Адвент-календаря, ты автоматически примешь участие в большом предновогоднем розыгрыше Secret Kitchen. На кону 10 сертификатов по 5 000 рублей!
                            </StyledParagraph>
                            <StyledParagraph>
                                Победителей определим 30 декабря с помощью рэндомайзера. В базу попадут ВСЕ заказы, поэтому чем чаще будешь использовать адвент-промокоды, тем выше шансы на победу.
                            </StyledParagraph>
                            <StyledParagraph>
                                Промокоды из адвент-календаря действуют только при заказе на сайте или в приложении Secret Kitchen.
                            </StyledParagraph>
                        </StyledDescription>
                    </StyledContentWrapper>
                </StyledColumn>
                <div>
                    <StyledAfterwordTitle>Готовься к праздникам вкусно!</StyledAfterwordTitle>
                    <StyledParagraph>
                        Твоя команда Secret Kitchen
                    </StyledParagraph>
                </div>
            </StyledWrapper>
        </StyledSection>
    )
};

export default InfoSection;