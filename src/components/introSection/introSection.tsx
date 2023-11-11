import React from 'react';

import { StyledDescription, StyledSecret, StyledSection, StyledTitle } from './introSection.styles';
import Secret from '../../images/icons/secret.svg';

const IntroSection = () => {
    return (
        <StyledSection>
            <StyledTitle>
                <StyledSecret>
                    <Secret />
                </StyledSecret>
                Календарь
            </StyledTitle>
            <StyledDescription>
                онлайн календарь от гастромаркета Secret<br />kitchen получай подарки каждый день в течение<br />месяца специальное предложение весь декабрь
            </StyledDescription>
        </StyledSection>
    )
};

export default IntroSection;