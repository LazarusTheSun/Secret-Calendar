import styled from 'styled-components';

import { ANIMATIONS_TIMINGS } from '../../constants/animations';
import { TVisibility } from '../../types/types';

export const StyledActionResultBlockWrapper = styled.div<{ actionResultBLockHeight: number; actionResultBlockVisibility: TVisibility }>`
    position: relative;
    height: 0;
    transition: height ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;

    ${({ actionResultBlockVisibility, actionResultBLockHeight }) => actionResultBlockVisibility === "visible" && `
        height: ${actionResultBLockHeight}px;
    `}
`;