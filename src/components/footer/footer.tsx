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

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterWrapper>
                <nav>
                    <StyledPoliciesMenu>
                        <li>
                            <StyledPolicyLink href="https://secret-kitchen.ru/terms-of-use" target="_blank">правовые документы</StyledPolicyLink>
                        </li>
                        <li>
                            <StyledPolicyLink href="#" target="_blank">полные условия</StyledPolicyLink>
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
                    </nav>
                </StyledWrapper>
            </StyledFooterWrapper>
        </StyledFooter>
    )
};

export default Footer;