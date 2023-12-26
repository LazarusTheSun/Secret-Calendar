import React, { useEffect, useState } from 'react';
import { fork } from 'effector';
import { Provider } from 'effector-react';

import GlobalStyles from '../../GlobalStyles';
import { StyledHiddenTitle, StyledBackgroundPattern, StyledApp } from './app.styled';

import Header from '../header/header';
import Footer from '../footer/footer';

import { CHECK_DATE } from '../../constants/common';
import StageOnePromoScenario from '../stageOnePromoScenario/stageOnePromoScenario';
import StageTwoPromoScenario from '../stageTwoPromoScenario/stageTwoPromoScenario';

import '../../effector/actionBlock/init';

const scope = fork();

const App = () => {
    const [debugParamValue, setDebugParamValue] = useState<string | null>('');
    const date = new Date();
    
    useEffect(() => {
        const url = new URL(location.href);
        
        setDebugParamValue(url.searchParams.get('debug'));
    }, []);

    let scenario = <StageOnePromoScenario />;

    if (date.getFullYear() === CHECK_DATE.promoStage1.year && date.getMonth() === CHECK_DATE.promoStage1.month) {
        scenario = <StageOnePromoScenario />
    }

    if (date.getFullYear() === CHECK_DATE.promoStage2.year && date.getMonth() === CHECK_DATE.promoStage2.month || debugParamValue === '09xdry') {
        scenario = <StageTwoPromoScenario />
    }

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