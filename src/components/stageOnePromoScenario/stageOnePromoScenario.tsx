import React, { useState, useRef } from 'react';

import Victors from '../victors/victors';
import Present from '../present/present';
import IntroSection from '../introSection/introSection';
import Calendar from '../calendar/calendar';
import InfoSection from '../infoSection/infoSection';
import LayoutWrapper from '../layoutWrapper/layoutWrapper';

import { getPresent } from '../../utils/getPresent';

import { StyledActionResultBlockWrapper } from './stageOnePromoScenario.styled';
import { useUnit } from 'effector-react';
import { actionBlock } from '../../effector/actionBlock/state';

const StageOnePromoScenario = () => {
    const date = new Date();

    const actionBlockStore = useUnit(actionBlock);
    const [currentId, setCurrentId] = useState<number | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const getResultBlock = () => {
        if (!actionBlockStore.isRendered) {
            return null;
        }

        if (actionBlockStore.type === "victor") {
            return (
                <Victors isAnimated />
            );
        }

        if (actionBlockStore.type === "present") {
            const present = getPresent(currentId);

            if (present) {
                return (
                    <Present
                        title={present.title}
                        imageSrc={present.imgSrc}
                        promocode={present.promocode}
                    />
                );
            }
        };

        return null;
    }
    
    return (
        <LayoutWrapper>
            <IntroSection
                setCurrentId={setCurrentId}
                date={date}
            />
            <StyledActionResultBlockWrapper
                ref={wrapperRef}
                actionResultBLockHeight={actionBlockStore.height}
                actionResultBlockVisibility={actionBlockStore.visibility}
            >
                {getResultBlock()}
            </StyledActionResultBlockWrapper>
            <Calendar
                date={date}
                setCurrentId={setCurrentId}
            />
            <InfoSection />
        </LayoutWrapper>
    )
};

export default StageOnePromoScenario;