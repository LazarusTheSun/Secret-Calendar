import React from 'react';
import { StyledLayoutWrapper } from './layoutWrapper.styled';

export const LayoutWrapper = ({
    children,
}: {children: JSX.Element | JSX.Element[]}) => {
    return (
        <StyledLayoutWrapper>
            {children}
        </StyledLayoutWrapper>
    )
};

export default LayoutWrapper;