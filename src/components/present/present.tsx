import React, {useState} from 'react';

import {
    StyledContent,
    StyledCopied,
    StyledFragment,
    StyledImage,
    StyledImageWrapper,
    StyledInfo,
    StyledLabel,
    StyledLink,
    StyledPromocode,
    StyledSection,
    StyledTitle
} from './present.styled';

import present1 from '../../images/presents/present-1.png';
import { IPresent } from './present.types';

import { copyToClipboard } from '../../utils/copyToClipboard';

const Present = ({
    title,
    promocode,
    imageSrc,
}: IPresent) => {
    const [isCopied, setIsCopied] = useState(false);

    const promcodeTemp = 'wr24935';

    const handleCopy = async () => {
        if (isCopied) {
            return;
        }

        await copyToClipboard(promcodeTemp);

        setIsCopied(true);

        const copyTimer = setTimeout(() => {
            setIsCopied(false);
        }, 3000);

        return () => {
            clearTimeout(copyTimer);
        }
    };

    return (
        <StyledSection>
            <StyledContent>
                <StyledLabel>
                    твой подарок сегодня
                </StyledLabel>
                <StyledTitle>
                    Ricers 1.1 <br /> со скидкой 15%
                </StyledTitle>
                <StyledInfo>
                    Для получения подарка используй этот промокод. <br /> Он работает только <StyledFragment>Сегодня</StyledFragment>.
                </StyledInfo>
                {
                    isCopied
                        ? <StyledCopied>Скопировано</StyledCopied>
                        : <StyledPromocode onClick={handleCopy} type="button">{promcodeTemp}</StyledPromocode>
                }
                <StyledLink href="https://secret-kitchen.ru" target="_blank">Заказать</StyledLink>
            </StyledContent>
            <StyledImageWrapper>
                <StyledImage src={present1} alt="Подарок" />
            </StyledImageWrapper>
        </StyledSection>
    )
};

export default Present;