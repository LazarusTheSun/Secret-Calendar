import React from 'react';
import { StyledLayoutWrapper } from './layoutWrapper.styled';

export const LayoutWrapper = ({
    children,
}: {children: any}) => {
    return (
        <StyledLayoutWrapper>
            {children}
        </StyledLayoutWrapper>
    )
};

export default LayoutWrapper;