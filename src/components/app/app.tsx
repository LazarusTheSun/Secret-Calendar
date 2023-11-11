import React from 'react';

import GlobalStyles from '../../GlobalStyles';
import { StyledTitle } from './app.styled';

import Header from '../header/header';
import IntroSection from '../introSection/introSection';
import LayoutWrapper from '../layoutWrapper/layoutWrapper';
import Calendar from '../calendar/calendar';
import Footer from '../footer/footer';

const App = () => {
    return (
        <>
            <StyledTitle>Secret Календарь</StyledTitle>
            <Header />
            <LayoutWrapper>
                <IntroSection />
                <Calendar />
            </LayoutWrapper>
            <Footer />
            <GlobalStyles />
        </>
    )
};

export default App;