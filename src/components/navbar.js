import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './logo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { theme, mixins, media } from '../styles';

const { colors, fonts } = theme;

const StyledHeader = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0px 50px;
    background-color: ${colors.darkBlue};
    transition: ${theme.transition};
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    width: 100%;
    height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
    box-shadow: ${props => props.scrollDirection === 'up' ? `0 10px 30px 0px ${colors.fadedBlack}` : 'none'};
    transform: translateY(
        ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
    );
    z-index: 99;
    ${media.desktop`padding: 0 40px;`};
    ${media.tablet`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
    color: ${colors.blue};
    font-family: ${fonts.Poppins};
`;

const StyledNavLink = styled.a`
    margin: 10px 25px;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 20px;
    padding: 5px;
    a {
        display: block;
        width: 40px;
        height: 40px;

    &:hover {
        svg {
            g {
                fill: ${colors.blue}
            }
        }
    }

    &:focus {
        svg {
            g {
                fill: ${colors.blue}
            }
        }
    }

    svg {
        width: 40px;
        height: 40px;
    }
  }
`;

const DELTA = 5;
const navHeight = theme.navHeight.substring(0, theme.navHeight.indexOf('px'));

export default function Navbar(props) {
    let [title, setTitle] = useState('Jonathan Pe | Human');
    let [isMounted, setIsMounted] = useState(!props.isHome);
    let [menuOpen, setMenuOpen] = useState(false);
    let [scrollDirection, setScrollDirection] = useState('none');
    let [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const toggleMenu = () => { 
            setMenuOpen(!menuOpen);
        };

        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                toggleMenu();
            }
        };

        const handleKeydown = e => {
            if (!menuOpen) {
                return;
            }

            if (e.which === 27 || e.key === 'Escape') {
                toggleMenu();
            }
        };

        window.addEventListener('resize', () => handleResize());
        window.addEventListener('keydown', (e) => handleKeydown(e));

        return function cleanup() {
            window.removeEventListener('resize', () => handleResize());
            window.removeEventListener('keydown', (e) => handleKeydown(e));
        };
    });

    useEffect(() => {
        const handleScroll = () => {
            const fromTop = window.scrollY;

            // Make sure they scroll more than DELTA
            if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
                return;
            }

            if (fromTop < DELTA) {
                setScrollDirection('none');
            } else if (fromTop > lastScrollTop && fromTop > navHeight) {
                if (scrollDirection !== 'down') {
                    setScrollDirection('down');
                }
            } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
                if (scrollDirection !== 'up') {
                    setScrollDirection('up');
                }
            }

            setLastScrollTop(fromTop);
        };

        window.addEventListener('scroll', () => handleScroll());
        

        return function cleanup() {
            window.removeEventListener('scroll', () => handleScroll());
        };
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const softwareEngineer = (
        <StyledNavLink href="#softwareEngineer" onClick={() => setTitle('Jonathan Pe | Software Engineer')}>
            Software Engineer
        </StyledNavLink>
    );
    const DJ = (
        <StyledNavLink href="#dj" onClick={() => setTitle('Jonathan Pe | DJ')}>
            DJ
        </StyledNavLink>
    );
    const gamer = (
        <StyledNavLink href="#gamer" onClick={() => setTitle('Jonathan Pe | Gamer')}>
            Gamer
        </StyledNavLink>
    );

    const navItems = [softwareEngineer, DJ, gamer];

    return (
        <StyledHeader scrollDirection={scrollDirection}>
            <StyledNav>
                <TransitionGroup>
                    {isMounted && (
                        <CSSTransition key="logo" classNames="fade" timeout={300} style={{ transitionDelay: '100ms' }}>
                            <StyledLogo>
                                <a href="#aboutMe" onClick={() => setTitle('Jonathan Pe | Human')}>
                                    <Logo />
                                </a>
                            </StyledLogo>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup>
                    {isMounted && navItems.map((item, i) => (
                        <CSSTransition key={i} classNames="fade" timeout={300} style={{ transitionDelay: `${100 + i * 100}ms` }}>
                            {item}
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </StyledNav>
        </StyledHeader>
    );
}

Navbar.propTypes = {
    isHome: PropTypes.bool
};
