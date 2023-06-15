import React, { useState, useContext } from "react";
import { BiSun, BiMoon, BiGridAlt, BiHome, BiBriefcase, BiUser, BiCodeBlock, BiEnvelope, BiX } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import styled, { css } from "styled-components";
import { ThemeContext } from '../../ContextTheme';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding);
    border-bottom: 4px solid var(--primary-fontcolor);
    box-sizing: border-box;
    background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
    @media (max-width: 768px) {
      position: fixed;
      bottom: 0;
      border: none;
      width: 100%;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
      box-sizing: border-box;
      z-index: 9999;
    }
`
const StyledLogo = styled.h1`
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => (props.darkmode ? 'var(--primary-fontcolor)' : 'var(--secondary-fontcolor)')};
`
const StyledDot = styled.span`
  color: var(--primary-color);
`
const StyledNavigation = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media (max-width: 768px) {
    width: auto;
  }
`
const StyledNav = styled.nav`
  width: 90%;
  @media (max-width: 768px) {
    display: none;
    ${props =>
    props.active &&
    css`
      background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
      display: block;
      display: flex;
      flex-direction: column;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 40%;
      box-sizing: border-box;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: .2s;
    `}
  }
`

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: var(--padding);
    font-size: 16px;
    text-align: center;
    gap: 30px;
  }
`

const StyledItem = styled.li`
  list-style: none;
`
const StyledLinkItem = styled.a`
  text-decoration: none;
  color: ${props => (props.darkmode ? 'var(--primary-fontcolor)' : 'var(--secondary-fontcolor)')};
  &:hover {
    text-decoration: underline;
  }
`
const StyledIcon = styled.div`
  display: none;
  color: ${props => (props.darkmode ? 'var(--primary-bgcolor)' : 'var(--secondary-bgcolor)')};
  @media (max-width: 768px) {
    display: initial;
  }
`

const StyledBr = styled.br`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

const StyledBtnClose = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }
`
const StyledMenuClose = styled.div`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
    margin-right: 5%;
    font-size: 1.5rem;
  }
`

const StyledHeaderButtons = styled.div`
  color: ${props => (props.darkmode ? 'var(--primary-bgcolor)' : 'var(--secondary-bgcolor)')};
  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
  }
`

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [ menutoggle, setMenutoggle ] = useState(false);

  return (
    <StyledHeader darkmode={darkMode}>
      <StyledLogo>
        <StyledLink
          href="https://github.com/Carlosedm97"
          target="_blank"
          rel="noopener noreferrer"
          darkmode={darkMode}
        >
          CLDev<StyledDot>.</StyledDot>
        </StyledLink>
      </StyledLogo>
      <StyledNavigation>
        <StyledNav active={menutoggle} darkmode={darkMode}>
          <StyledList>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <BiHome />
                </StyledIcon>
                <StyledBr />
                Inicio
              </StyledLinkItem>
            </StyledItem>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#portafolio" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <BiBriefcase />
                </StyledIcon>
                <StyledBr />
                Portafolio
              </StyledLinkItem>
            </StyledItem>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#formacion" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <HiOutlineAcademicCap />
                </StyledIcon>
                <StyledBr />
                Formación
              </StyledLinkItem>
            </StyledItem>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#sobremi" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <BiUser />
                </StyledIcon>
                <StyledBr />
                Sobre mi
              </StyledLinkItem>
            </StyledItem>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#habilidades" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <BiCodeBlock />
                </StyledIcon>
                <StyledBr />
                Hábilidades
              </StyledLinkItem>
            </StyledItem>
            <StyledItem>
              <StyledLinkItem darkmode={darkMode} href="#contacto" onClick={() => setMenutoggle(!menutoggle)}>
                <StyledIcon darkmode={darkMode}>
                  <BiEnvelope />
                </StyledIcon>
                <StyledBr />
                Contacto
              </StyledLinkItem>
            </StyledItem>
          </StyledList>
          <StyledBtnClose>
            <StyledMenuClose>
              <StyledIcon darkmode={darkMode}>
                <BiX onClick={() => setMenutoggle(!menutoggle)} />
              </StyledIcon>
            </StyledMenuClose>
          </StyledBtnClose>
        </StyledNav>
        <StyledHeaderButtons darkmode={darkMode}>
          { darkMode ? (
            <BiMoon onClick={() => toggleDarkMode()} />
          ) : (
            <BiSun onClick={() => toggleDarkMode()} />
          )}
          <StyledIcon darkmode={darkMode}>
            <BiGridAlt onClick={() => setMenutoggle(!menutoggle)} />
          </StyledIcon>
        </StyledHeaderButtons>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
