import React, { useContext } from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import { ThemeContext } from '../../ContextTheme';

const StyledAboutMe = styled.section`
  padding: 10rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
  @media (max-width: 768px) {
    height: auto;
    padding: var(--padding-tablet);
  }
  @media (max-width: 425px) {
    padding: var(--padding-mobile);
  }
`
const StyledParagraph = styled.p`
  color: ${props => (props.darkmode ? 'var(--tertiary-fontcolor-ligth)' : 'var(--cuaternary-fontcolor-dark)')};
`

const AboutMe = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledAboutMe darkmode={ darkMode } id='sobremi'>
      <Title title="Sobre mi" darkmode={ darkMode } />
      <StyledParagraph darkmode={ darkMode }>
        Desarrollador web especializado en el área Front End con conocimiento en tecnologías como HTML5, CSS3, Javascript, React Js y el software de control de versiones Git. Adicionalmente, me he desempeñado en el sector salud como auxiliar de enfermería en un centro de bienestar para adultos mayores. En cuanto a mis habilidades blandas, las que he venido trabajando y aplicando son: la organización, el trabajo colaborativo, la empatía, gestión efectiva del tiempo, capacidad de respuesta, entre otras.
      </StyledParagraph>
    </StyledAboutMe>
  )
}

export default AboutMe;