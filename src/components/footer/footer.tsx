import React from 'react';
import {
    StyledFooter,
    StyledFooterWrapper,
    StyledPoliciesMenu,
    StyledPolicyLink,
    StyledAppMarketLink,
    StyledSocialLink,
    StyledMenu,
    StyledWrapper,
} from './footer.styled';

import TgLogo from '../../images/icons/social/tg-icon.svg';
import VkLogo from '../../images/icons/social/vk-icon.svg';

import AppStoreLogo from '../../images/icons/app-markets/apple.svg';
import GooglePlayLogo from '../../images/icons/app-markets/google.svg';
import { useGetDeviceType } from '../../hooks/useGetDeviceType';

import rulesPdf from '../../docs/rules.pdf';

const Footer = () => {
    const device = useGetDeviceType();

    const link = "https://secretkitchen.onelink.me/38De/wao7fd0s";

    const getStores = () => {
        if (device === 'desktop') {
            return (
                <StyledMenu>
                    <li>
                        <StyledAppMarketLink href="https://apps.apple.com/ru/app/secret-kitchen/id1580726480" target="_blank">
                            <AppStoreLogo />
                        </StyledAppMarketLink>
                    </li>
                    <li>
                        <StyledAppMarketLink href="https://play.google.com/store/apps/details?id=ru.secretkitchen.mobile" target="_blank">
                            <GooglePlayLogo />
                        </StyledAppMarketLink>
                    </li>
                </StyledMenu>
            );
        }

        if (device === 'android') {
            return (
                <StyledMenu>
                    <li>
                        <StyledAppMarketLink href={link} target="_blank">
                            <GooglePlayLogo />
                        </StyledAppMarketLink>
                    </li>
                </StyledMenu>
            )
        }

        if (device === 'ios') {
            return (
                <StyledMenu>
                    <li>
                        <StyledAppMarketLink href={link} target="_blank">
                            <AppStoreLogo />
                        </StyledAppMarketLink>
                    </li>
                </StyledMenu>
            )
        }
    }

    return (
        <StyledFooter>
            <StyledFooterWrapper>
                <nav>
                    <StyledPoliciesMenu>
                        <li>
                            <StyledPolicyLink href="https://secret-kitchen.ru/moskva/page/terms-of-use" target="_blank">правовые документы</StyledPolicyLink>
                        </li>
                        <li>
                            <StyledPolicyLink href={rulesPdf} target="_blank">полные условия</StyledPolicyLink>
                        </li>
                    </StyledPoliciesMenu>
                </nav>
                <StyledWrapper>
                    <nav>
                        <StyledMenu>
                            <li>
                                <StyledSocialLink href="https://t.me/secretkitchen_ru" target="_blank">
                                    <TgLogo />
                                </StyledSocialLink>
                            </li>
                            <li>
                                <StyledSocialLink href="https://vk.com/public206552267" target="_blank">
                                    <VkLogo />
                                </StyledSocialLink>
                            </li>
                        </StyledMenu>
                    </nav>
                    <nav>
                        {getStores()}
                    </nav>
                </StyledWrapper>
            </StyledFooterWrapper>
        </StyledFooter>
    )
};

export default Footer;