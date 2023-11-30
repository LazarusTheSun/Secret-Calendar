import React, { useState, useRef } from 'react';

import GlobalStyles from '../../GlobalStyles';
import { StyledHiddenTitle, StyledBackgroundPattern, StyledActionResultBlockWrapper, StyledApp } from './app.styled';

import Header from '../header/header';
import IntroSection from '../introSection/introSection';
import LayoutWrapper from '../layoutWrapper/layoutWrapper';
import Calendar from '../calendar/calendar';
import Footer from '../footer/footer';
import Present from '../present/present';
import InfoSection from '../infoSection/infoSection';

import { getPresent } from '../../utils/getPresent';
import { IAppState } from './app.types';
import Victors from '../victors/victors';

const App = () => {
    const date = new Date();

    const baseState: IAppState = date.getMonth() === 11 ? {
        isActionResultBlockRendered: false,
        actionResultBlockType: "none",
        actionResultBlockVisibility: "idle",
    } : {
        isActionResultBlockRendered: true,
        actionResultBlockType: "victor",
        actionResultBlockVisibility: "visible",
    };

    const [appState, setAppState] = useState<IAppState>(baseState);
    const [currentId, setCurrentId] = useState<number | null>(null);
    const [actionResultBLockHeight, setActionResultBLockHeight] = useState(0);

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const getResultBlock = () => {
        if (!appState.isActionResultBlockRendered) {
            return null;
        }

        if (appState.actionResultBlockType === "victor") {
            return (
                <Victors
                    setActionResultBLockHeight={setActionResultBLockHeight}
                    actionResultBLockHeight={actionResultBLockHeight}
                />
            );
        }

        if (appState.actionResultBlockType === "present") {
            const present = getPresent(currentId);

            if (present) {
                return (
                    <Present
                        title={present.title}
                        imageSrc={present.imgSrc}
                        promocode={present.promocode}
                        actionResultBLockHeight={actionResultBLockHeight}
                        setActionResultBLockHeight={setActionResultBLockHeight}
                    />
                );
            }
        };

        return null;
    }

    return (
        <StyledApp>
            <StyledHiddenTitle>Secret Календарь</StyledHiddenTitle>
            <StyledBackgroundPattern />
            <Header />
            <LayoutWrapper>
                <IntroSection
                    setCurrentId={setCurrentId}
                    setAppState={setAppState}
                    date={date}
                    actionResultBlockVisibility={appState.actionResultBlockVisibility}
                />
                <StyledActionResultBlockWrapper ref={wrapperRef} actionResultBLockHeight={actionResultBLockHeight} actionResultBlockVisibility={appState.actionResultBlockVisibility}>
                    {getResultBlock()}
                </StyledActionResultBlockWrapper>
                <Calendar
                    date={date}
                    setAppState={setAppState}
                    actionResultBlockVisibility={appState.actionResultBlockVisibility}
                    setCurrentId={setCurrentId}
                />
                <InfoSection />
            </LayoutWrapper>
            <Footer />
            <GlobalStyles />
        </StyledApp>
    )
};

export default App;