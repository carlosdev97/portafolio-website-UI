import React, { useContext } from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { ThemeContext } from "../../ContextTheme";

const StyledHero = styled.section`
  padding: 10rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.darkmode ? "var(--secondary-bgcolor)" : "var(--primary-bgcolor)"};
  @media (max-width: 768px) {
    height: 100vh;
    padding: 0 5%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  @media (max-width: 425px) {
    height: 100vh;
    padding: 0 5%;
  }
`;

const StyledHeroInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) =>
    props.darkmode ? "var(--primary-fontcolor)" : "var(--secondary-fontcolor)"};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledHeroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledHeroParagraph = styled.p`
  margin: 0;
  font-size: 3rem;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 2.3rem;
  }
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

const StyledHeroTitle = styled.h2`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

const StyledHeroUnderscore = styled.span`
  display: inline-block;
  color: #2490ce;
`;

const StyledHeroButtons = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

const StyledHeroLink = styled.a`
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) =>
    props.darkmode ? "var(--primary-fontcolor)" : "var(--secondary-fontcolor)"};
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  color: var(--primary-color);
`;

const StyledAiFillLinkedin = styled(AiFillLinkedin)`
  color: var(--primary-color);
`;

const StyledAiFillFilePdf = styled(AiFillFilePdf)`
  color: var(--primary-color);
`;

const StyledHeroImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 452px) {
    width: 200px;
    height: 200px;
  }
`;

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledHero darkmode={darkMode}>
      <StyledHeroInfo darkmode={darkMode}>
        <StyledHeroTexts>
          <StyledHeroParagraph>Hola, me llamo Carlos, soy</StyledHeroParagraph>
          <StyledHeroTitle>
            Desarrollador Front End
            <StyledHeroUnderscore>.</StyledHeroUnderscore>
          </StyledHeroTitle>
        </StyledHeroTexts>
        <StyledHeroButtons>
          <StyledHeroLink
            href="https://github.com/carlosdev97"
            target="_blank"
            rel="noopener noreferrer"
            darkmode={darkMode}
          >
            GitHub
            <StyledAiFillGithub />
          </StyledHeroLink>
          <StyledHeroLink
            href="https://www.linkedin.com/in/carlos-antonio-meza-lopez/"
            target="_blank"
            rel="noopener noreferrer"
            darkmode={darkMode}
          >
            LinkedIn
            <StyledAiFillLinkedin />
          </StyledHeroLink>
          <StyledHeroLink
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            darkmode={darkMode}
          >
            Curriculum
            <StyledAiFillFilePdf />
          </StyledHeroLink>
        </StyledHeroButtons>
      </StyledHeroInfo>
      <StyledHeroImage
        src="https://github.com/carlosdev97.png"
        alt="Foto de Carlos"
      />
    </StyledHero>
  );
};

export default Hero;
