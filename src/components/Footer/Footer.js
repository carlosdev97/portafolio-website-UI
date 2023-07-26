import styled from "styled-components";
import { ThemeContext } from "../../ContextTheme";
import React, { useContext } from "react";

const StyledFooter = styled.footer`
  text-align: center;
  background-color: ${(props) =>
    props.darkmode ? "var(--secondary-bgcolor)" : "var(--primary-bgcolor)"};
    @media (max-width: 768px) {
      padding-bottom: 100px;
  }
`

const StyledParagraph = styled.p`
  padding: 32px 0;
  margin: 0;
  color: ${props => (props.darkmode ? 'var(--tertiary-fontcolor-ligth)' : 'var(--cuaternary-fontcolor-dark)')};
`

const StyledLinkFooter = styled.a`
  color: var(--primary-color);
`

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledFooter darkmode={darkMode}>
      <StyledParagraph darkmode={darkMode}>Copyright &copy; 2023 <StyledLinkFooter href="https://github.com/Carlosedm97/" target="_blank" rel="noopener">Carlos López</StyledLinkFooter></StyledParagraph>
    </StyledFooter>
  )
}

export default Footer;