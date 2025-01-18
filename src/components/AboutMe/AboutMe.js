import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { ThemeContext } from "../../ContextTheme";

const StyledAboutMe = styled.section`
  padding: 10rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.darkmode ? "var(--secondary-bgcolor)" : "var(--primary-bgcolor)"};
  @media (max-width: 768px) {
    height: auto;
    padding: var(--padding-tablet);
  }
  @media (max-width: 425px) {
    padding: var(--padding-mobile);
  }
`;
const StyledParagraph = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) =>
    props.darkmode
      ? "var(--tertiary-fontcolor-ligth)"
      : "var(--cuaternary-fontcolor-dark)"};
  @media (max-width: 425px) {
    text-align: center;
  }
`;

const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledAboutMe darkmode={darkMode} id="sobremi">
      <Title title="Sobre mi" darkmode={darkMode} />
      <StyledParagraph darkmode={darkMode}>
        Como Desarrollador Web en constante evolución, me destaco por mi
        meticulosidad, capacidad de autoaprendizaje y espíritu colaborativo,
        cualidades que me permiten aportar soluciones detalladas, bien
        fundamentadas y orientadas al trabajo en equipo en cada proyecto. Estas
        habilidades fortalecen mi desempeño dentro de equipos
        multidisciplinarios, permitiéndome adaptarme y aprender de manera
        continua. Los desafíos me motivan a seguir creciendo, tanto personal
        como profesionalmente, impulsando siempre el desarrollo de ideas
        valiosas y sostenibles. Fuera del ámbito laboral, me inspiro en ser un
        buen hijo y una excelente pareja.
      </StyledParagraph>
    </StyledAboutMe>
  );
};

export default AboutMe;
