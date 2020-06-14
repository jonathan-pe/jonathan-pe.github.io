import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import Logo from '../components/logo';
import { theme, mixins } from '../styles';


const StyledDiv = styled.div`
    ${mixins.flexCenter}
    position: fixed;
    width: 100%;
    height: 100%;
`;

const StyledLogo = styled.div`
    width: max-content;
    max-width: 100px;
    transition: ${theme.transition};
    opacity: ${props => (props.isMounted ? 1 : 0)};

    svg {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        fill: none;
        user-select: none;
        #jpe {
            fill-opacity: 0;
        }
    }
`;

export default function Loader({ finishLoading }) {
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        });

        loader.add({
            targets: '#logo path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 2000,
            delay: 300
        }).add({
            targets: '#logo #jpe',
            duration: 700,
            easing: 'easeInOutQuart',
            fillOpacity: 1
        }).add({
            targets: '#logo',
            duration: 300,
            delay: 800,
            easing: 'easeInOutQuart',
            opacity: 0,
            scale: 0.1
        });
    }

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledDiv>
            <StyledLogo isMounted={isMounted}>
                <Logo />
            </StyledLogo>
        </StyledDiv>
    );
}
