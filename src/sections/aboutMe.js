import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section, theme, mixins, media } from '../styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const { colors, fonts, fontSizes } = theme;

const StyledSection = styled(Section)`
    ${mixins.flexCenter};
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    ${media.tablet`padding-top: 150px;`};
`;

const StyledGreeting = styled.h1`
    color: ${colors.blue};
    font-size: 20px;
    font-weight: normal;
    font-family: ${fonts.Courier};
    margin: 0px 0px 10px 2px;
    ${media.tablet`font-size: ${fontSizes.sm};`};
    ${media.phablet`font-size: ${fontSizes.xs};`};
`;

const StyledTitle = styled.h2`
    margin: 0px 0px 10px 0px;
    ${media.desktop`font-size: 70px;`};
    ${media.tablet`font-size: 60px;`};
    ${media.phablet`font-size: 50px;`};
    ${media.phone`font-size: 40px;`};
`;

const StyledSubtitle = styled.h3`
    color: ${colors.grey};
    margin: 0;
    ${media.desktop`font-size: 40px;`};
    ${media.tablet`font-size: 30px;`};
    ${media.phablet`font-size: 20px;`};
    ${media.phone`font-size: ${fontSizes.normal};`};
`;

const StyledCaption = styled.div`
    margin: 60px 0px 60px 0px;
    width: 75%;
    max-width: 600px;
    ${media.phablet`font-size: ${fontSizes.xs};`};
`;

export default function AboutMe() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    const greeting = (
        <StyledGreeting>Hi there! I'm</StyledGreeting>
    );
    const title = (
        <StyledTitle>Jonathan Pe.</StyledTitle>
    );
    const subtitle = (
        <StyledSubtitle>I like coding, gaming and DJing.</StyledSubtitle>
    );
    const caption = (
        <StyledCaption>I'm a Software Engineer based in San Francisco, CA
            interested in web & mobile development. I also enjoy playing video games and DJing!
        </StyledCaption>
    );

    const content = [greeting, title, subtitle, caption];

    return (
        <StyledSection id="aboutMe">
            <TransitionGroup component={null}>
                {isMounted && content.map((item, i) => (
                    <CSSTransition key={i} classNames="fade" timeout={300} style={{ transitionDelay: `${1000 + i * 100}ms` }}>
                        {item}
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledSection>
    );
}
