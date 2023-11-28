import React from 'react';
import { Element } from 'react-scroll';

import {
    StyledAfterwordTitle,
    StyledColumn,
    StyledColumnTitle,
    StyledContentWrapper,
    StyledDescription,
    StyledIconWrapper,
    StyledInfo,
    StyledParagraph,
    StyledSection,
    StyledWrapper,
    StyledInfoWrapper
} from './infoSection.styled';

import { DATA } from './infoSection.constatns';

const InfoSection = () => {
    return (
        <Element name="info">
            <StyledSection id="info">
            <StyledWrapper>
                    <StyledContentWrapper>
                        <StyledColumnTitle>{DATA.conditions.title}</StyledColumnTitle>
                        <StyledDescription>
                            <StyledParagraph>{DATA.conditions.description}</StyledParagraph>
                        </StyledDescription>
                        <StyledInfo>
                                <StyledInfoWrapper>
                                    <StyledIconWrapper width={24} height={24}>
                                        <img src={DATA.conditions.icon} alt="Эмодзи" />
                                    </StyledIconWrapper>
                                    <div>
                                        <StyledParagraph weight={700}>{DATA.conditions.infoTitle}</StyledParagraph>
                                        <StyledParagraph>{DATA.conditions.infoText}</StyledParagraph>
                                    </div>
                                </StyledInfoWrapper>
                        </StyledInfo>
                    </StyledContentWrapper>
                    <StyledColumn>
                        <StyledIconWrapper height={80} width={80}>
                            <img src={DATA.about.icon} alt="Ель" />
                        </StyledIconWrapper>
                        <StyledContentWrapper>
                            <StyledColumnTitle>{DATA.about.title}</StyledColumnTitle>
                            <StyledDescription>
                                {DATA.about.description.map((par, index) => (
                                    <StyledParagraph key={index}>{par}</StyledParagraph>
                                ))}
                            </StyledDescription>
                        </StyledContentWrapper>
                    </StyledColumn>
                    <div>
                        <StyledAfterwordTitle>{DATA.afterword.title}</StyledAfterwordTitle>
                        <StyledParagraph>{DATA.afterword.description}</StyledParagraph>
                    </div>
                </StyledWrapper>
            </StyledSection>
        </Element>
    )
};

export default InfoSection;