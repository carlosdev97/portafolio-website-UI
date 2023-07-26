import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import SkillCard from "../SkillCard/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiStyledcomponents } from "react-icons/si";
import { ThemeContext } from "../../ContextTheme";

const StyledSkills = styled.section`
  padding: 5rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
`;

const StyledListSkills = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
`;

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledSkills darkmode={ darkMode } id="habilidades">
      <Title title={"Hábilidades"} darkmode={darkMode} />
      <StyledListSkills>
        <SkillCard title={"HTML5"} iconName={SiHtml5} />
        <SkillCard title={"CSS3"} iconName={SiCss3} />
        <SkillCard title={"Javascript"} iconName={SiJavascript} />
        <SkillCard title={"React JS"} iconName={SiReact} />
        <SkillCard title={"Styled Components"} iconName={SiStyledcomponents} />
        <SkillCard title={"Git"} iconName={SiGit} />
      </StyledListSkills>
    </StyledSkills>
  );
};

export default Skills;
