import React from 'react';

import GlobalStyles from '../../GlobalStyles';
import { StyledHiddenTitle, StyledBackgroundPattern } from './app.styled';

import Header from '../header/header';
import IntroSection from '../introSection/introSection';
import LayoutWrapper from '../layoutWrapper/layoutWrapper';
import Calendar from '../calendar/calendar';
import Footer from '../footer/footer';
import Present from '../present/present';
import InfoSection from '../infoSection/infoSection';

const App = () => {
    return (
        <>
            <StyledHiddenTitle>Secret Календарь</StyledHiddenTitle>
            <StyledBackgroundPattern />
            <Header />
            <LayoutWrapper>
                <IntroSection />
                {/* @ts-ignore */}
                <Present />
                <Calendar />
                <InfoSection />
            </LayoutWrapper>
            <Footer />
            <GlobalStyles />
        </>
    )
};

export default App;