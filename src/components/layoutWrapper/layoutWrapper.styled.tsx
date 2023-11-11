import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledLayoutWrapper = styled.div`
    margin: 0 auto;

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        max-width: 1172px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.l}) {
        max-width: 508px;
    }
`;
