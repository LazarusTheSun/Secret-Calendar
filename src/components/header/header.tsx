import React from 'react';

import { StyledHeader, StyledHeaderWrapper, StyledLogoWrapper } from './header.styled';

import LogoDesktop from '../../images/logo/logo.svg';
import { SITE_LINK } from '../../constants/common';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <StyledLogoWrapper href={SITE_LINK} target="_blank">
                    <LogoDesktop />
                </StyledLogoWrapper>
            </StyledHeaderWrapper>
        </StyledHeader>
    )
};

export default Header;