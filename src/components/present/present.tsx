import React, { useState } from 'react';

import {
    StyledContent,
    StyledCopied,
    StyledFragment,
    StyledImage,
    StyledImageWrapper,
    StyledInfo,
    StyledLabel,
    StyledLink,
    StyledPresent,
    StyledPromocode,
    StyledSection,
    StyledTitle
} from './present.styled';

import { IPresent } from './present.types';

import { copyToClipboard } from '../../utils/copyToClipboard';

const Present = ({
    title,
    promocode,
    imageSrc,
    setIntroState,
    setCurrentPresent,
    presentVisibility
}: IPresent) => {
    const [isCopied, setIsCopied] = useState(false);

    console.log(presentVisibility)

    const handleCopy = async () => {
        if (isCopied) {
            return;
        }

        await copyToClipboard(promocode);

        setIsCopied(true);

        const copyTimer = setTimeout(() => {
            setIsCopied(false);
        }, 3000);

        return () => {
            clearTimeout(copyTimer);
        }
    };

    const handlePresentClick = () => {
        setIntroState({
            presentVisibility: "hidden",
            descriptionVisiblity: "visible",
        });
        setCurrentPresent(null);
    }

    return (
        <StyledSection presentVisibility={presentVisibility}>
            <StyledPresent>
                <StyledContent>
                    <StyledLabel>
                        твой подарок сегодня
                    </StyledLabel>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledInfo>
                        Для получения подарка используй этот промокод. <br /> Он работает только <StyledFragment>сегодня</StyledFragment>.
                    </StyledInfo>
                    {
                        isCopied
                            ? <StyledCopied>Скопировано</StyledCopied>
                            : <StyledPromocode onClick={handleCopy} type="button">{promocode}</StyledPromocode>
                    }
                    <StyledLink href="https://secret-kitchen.ru/?utm_source=new_year_24&utm_medium=site&utm_campaign=new_year_24" target="_blank">Заказать</StyledLink>
                </StyledContent>
                <StyledImageWrapper onClick={handlePresentClick}>
                    <StyledImage src={imageSrc} alt="Подарок" />
                </StyledImageWrapper>
            </StyledPresent>
        </StyledSection>
    )
};

export default Present;