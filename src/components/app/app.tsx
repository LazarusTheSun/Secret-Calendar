import React from 'react';
import { fork } from 'effector';
import { Provider } from 'effector-react';

import GlobalStyles from '../../GlobalStyles';
import { StyledHiddenTitle, StyledBackgroundPattern, StyledApp } from './app.styled';

import Header from '../header/header';
import Footer from '../footer/footer';

import { CHECK_DATE } from '../../constants/common';
import ActivePromoScenario from '../activePromoScenario/activePromoScenario';
import InactivePromoScenario from '../inactivePromoScenario/inactivePromoScenario';

import '../../effector/actionBlock/init';

const scope = fork();

const App = () => {
    const date = new Date();

    const scenario = date.getFullYear() === CHECK_DATE.year && date.getMonth() === CHECK_DATE.month
        ? <ActivePromoScenario />
        : <InactivePromoScenario />;

    return (
        <Provider value={scope}>
            <StyledApp>
            <StyledHiddenTitle>Secret Календарь</StyledHiddenTitle>
            <StyledBackgroundPattern />
            <Header />
            {scenario}
            <Footer />
            <GlobalStyles />
        </StyledApp>
        </Provider>
    )
};

export default App;