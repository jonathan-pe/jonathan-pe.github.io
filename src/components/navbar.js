import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { theme, mixins } from '../styles';

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
  box-shadow: ${props => props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.black}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
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

export default function Navbar() {
  const [title, setTitle] = useState("Jonathan Pe | Human");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title])

  const softwareEngineer = (
    <StyledNavLink href="#softwareEngineer" onClick={() => setTitle("Jonathan Pe | Software Engineer")}>
      Software Engineer
    </StyledNavLink>
  );
  const DJ = (
    <StyledNavLink href="#dj" onClick={() => setTitle("Jonathan Pe | DJ")}>
      DJ
    </StyledNavLink>
  );
  const gamer = (
    <StyledNavLink href="#gamer" onClick={() => setTitle("Jonathan Pe | Gamer")}>
      Gamer
    </StyledNavLink>
  );

  const navItems = [softwareEngineer, DJ, gamer];

  return (
    <StyledHeader>
      <StyledNav>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition key="logo" classNames="fade" timeout={300} style={{ transitionDelay: "100ms" }}>
              <StyledLogo>
                <a href="#aboutMe" onClick={() => setTitle("Jonathan Pe | Human")}>
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
