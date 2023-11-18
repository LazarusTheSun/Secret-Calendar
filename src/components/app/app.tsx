import React, {useState, useEffect} from 'react';

import GlobalStyles from '../../GlobalStyles';
import { StyledHiddenTitle, StyledBackgroundPattern } from './app.styled';

import Header from '../header/header';
import IntroSection from '../introSection/introSection';
import LayoutWrapper from '../layoutWrapper/layoutWrapper';
import Calendar from '../calendar/calendar';
import Footer from '../footer/footer';
import Present from '../present/present';
import InfoSection from '../infoSection/infoSection';

import { getPresent } from '../../utils/getPresent';
import { IIntroState } from './app.types';

const App = () => {
    const [introState, setIntroState] = useState<IIntroState>({
        presentVisibility: "idle",
        descriptionVisiblity: "idle",
    });

    const [currentPresent, setCurrentPresent] = useState<number | null>(null);
    const present = getPresent(currentPresent);

    return (
        <>
            <StyledHiddenTitle>Secret Календарь</StyledHiddenTitle>
            <StyledBackgroundPattern />
            <Header />
            <LayoutWrapper>
                <IntroSection
                    presentVisibility={introState.presentVisibility}
                    descriptionVisiblity={introState.descriptionVisiblity}
                />
                {present ? (
                    <Present
                        title={present.title}
                        imageSrc={present.imgSrc}
                        promocode={present.promocode}
                        setIntroState={setIntroState}
                        setCurrentPresent={setCurrentPresent}
                        presentVisibility={introState.presentVisibility}
                    />
                ) : null}
                <Calendar
                    setIntroState={setIntroState}
                    presentVisibility={introState.presentVisibility}
                    setCurrentPresent={setCurrentPresent}
                />
                <InfoSection />
            </LayoutWrapper>
            <Footer />
            <GlobalStyles />
        </>
    )
};

export default App;