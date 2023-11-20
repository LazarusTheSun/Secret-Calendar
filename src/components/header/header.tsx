import React from 'react';

import { StyledHeader, StyledHeaderWrapper, StyledLogoWrapper } from './header.styled';

import LogoDesktop from '../../images/logo/logo.svg';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <StyledLogoWrapper href="https://promo.secret-kitchen.ru" target="_blank">
                    <LogoDesktop />
                </StyledLogoWrapper>
            </StyledHeaderWrapper>
        </StyledHeader>
    )
};

export default Header;