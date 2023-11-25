import React, { useState } from 'react';

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
    const [appState, setAppState] = useState<IAppState>({
        isActionResultBlockRendered: false,
        actionResultBlockType: "none",
        actionResultBlockVisibility: "idle",
    });
    const [currentId, setCurrentId] = useState<number | null>(null);
    const [actionResultBLockHeight, setActionResultBLockHeight] = useState(0);

    const date = new Date();
    const pureDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const getResultBlock = () => {
        if (!appState.isActionResultBlockRendered) {
            return null;
        }

        if (appState.actionResultBlockType === "victor") {
            return (
                <Victors setActionResultBLockHeight={setActionResultBLockHeight} />
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
                        setAppState={setAppState}
                        setCurrentId={setCurrentId}
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
                    date={pureDate}
                    actionResultBlockVisibility={appState.actionResultBlockVisibility}
                />
                <StyledActionResultBlockWrapper actionResultBLockHeight={actionResultBLockHeight} actionResultBlockVisibility={appState.actionResultBlockVisibility}>
                    {getResultBlock()}
                </StyledActionResultBlockWrapper>
                <Calendar
                    date={pureDate}
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