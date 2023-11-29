import React, { useState, useEffect, useRef } from 'react';
import Media from 'react-media';

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
    StyledLight,
    StyledPresentWrapper,
} from './present.styled';

import { IPresent } from './present.types';

import { copyToClipboard } from '../../utils/copyToClipboard';
import breakpoints from '../../constants/breakpoints.json';

import LightDesktop from '../../images/common/light-desktop.svg';
import LightTablet from '../../images/common/light-tablet.svg';
import LightMobile from '../../images/common/light-mobile.svg';
import { SITE_LINK } from '../../constants/common';

const Present = ({
    title,
    promocode,
    imageSrc,
    actionResultBLockHeight,
    setActionResultBLockHeight,
}: IPresent) => {
    const [isCopied, setIsCopied] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const heightSetter = () => {
            if (ref.current) {
                const height = ref.current.offsetHeight;

                if (actionResultBLockHeight !== height) {
                    setActionResultBLockHeight(height);
                }
            }
        }

        if (ref.current) {
            heightSetter();

            setIsVisible(true);

            window.addEventListener("resize", heightSetter);
            return () => {
                window.removeEventListener("resize", heightSetter);
            }
        }
    }, [window.innerWidth]);

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

    return (
        <StyledSection ref={ref}>
            <StyledPresentWrapper isVisible={isVisible}>
                <StyledPresent>
                    <StyledContent isVisible={isVisible}>
                        <StyledLabel>
                            твой подарок сегодня
                        </StyledLabel>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledInfo isVisible={isVisible}>
                            Для получения подарка используй этот промокод. <br /> Он работает только <StyledFragment>сегодня</StyledFragment>.
                        </StyledInfo>
                        {
                            isCopied
                                ? <StyledCopied>Скопировано</StyledCopied>
                                : <StyledPromocode onClick={handleCopy} isVisible={isVisible}>{promocode}</StyledPromocode>
                        }
                        <StyledLink href={SITE_LINK} target="_blank" isVisible={isVisible}>Заказать</StyledLink>
                    </StyledContent>
                    <StyledImageWrapper isVisible={isVisible}>
                        <StyledImage src={imageSrc} alt="Подарок" />
                    </StyledImageWrapper>
                </StyledPresent>
            </StyledPresentWrapper>
            <StyledLight isVisible={isVisible}>
                <Media queries={{
                    desktop: `(min-width: ${breakpoints.m}px)`,
                    tablet: `(min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px)`,
                    mobile: `(max-width: ${breakpoints.s - 1}px)`,
                }}>
                    {matches => (
                        <>
                            {matches.desktop && <LightDesktop />}
                            {matches.tablet && <LightTablet />}
                            {matches.mobile && <LightMobile />}
                        </>
                    )}
                </Media>
                {/* <Media queries={{
                    large: `(min-width: ${breakpoints.m}px)`,
                    small: `(max-width: ${breakpoints.m - 1}px)`,
                }}>
                    {matches => (
                        <>
                            {matches.large && <LightDesktop />}
                            {matches.small && <LightTablet />}
                        </>
                    )}
                </Media> */}
            </StyledLight>
        </StyledSection>
    )
};

export default Present;