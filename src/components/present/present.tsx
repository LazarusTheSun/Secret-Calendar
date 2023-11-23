import React, { useState, useEffect, useRef } from 'react';

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
    StyledTitle,
} from './present.styled';

import { IPresent } from './present.types';

import { copyToClipboard } from '../../utils/copyToClipboard';
import { ANIMATIONS_TIMINGS } from '../../constants/animations';

const Present = ({
    title,
    promocode,
    imageSrc,
    setAppState,
    setCurrentId,
    setActionResultBLockHeight,
}: IPresent) => {
    const [isCopied, setIsCopied] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ref.current) {
            const height = ref.current.offsetHeight;
            setActionResultBLockHeight(height);

            setIsVisible(true);
        }
    }, []);

    const handleCopy = async () => {
        if (isCopied) {
            return;
        }

        await copyToClipboard(promocode);

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const handlePresentClick = () => {
        setIsVisible(false);

        setAppState(state => ({
            ...state,
            actionResultBlockVisibility: "hidden",
        }))

        setTimeout(() => {
            setAppState(state => ({
                ...state,
                actionResultBlockType: "none",
                isActionResultBlockRendered: false,
            }));
            setCurrentId(null);
        }, ANIMATIONS_TIMINGS.baseTransitionTime);
    }

    return (
        <StyledSection ref={ref} isVisible={isVisible}>
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