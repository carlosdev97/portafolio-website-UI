import React, { useContext } from 'react';
import styled from 'styled-components';
import Title from "../Title/Title";
import { ThemeContext } from '../../ContextTheme';
import { AiOutlineCalendar } from "react-icons/ai"

const StyledTraining = styled.section`
  height: 100vh;
  padding: var(--padding);
  background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTrainingContainer = styled.div`
  padding: 0 30%;
  @media (max-width: 768px) {
    padding: var(--padding-tablet);
  }
  @media (max-width: 425px) {
    padding: var(--padding-mobile);
  }
`
// ! Inicio tarjeta

const StyledTrainingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  @media (max-width: 425px) {
    column-gap: 1rem;
  }
`
// ! Seccion 1 Tarjeta -----------

const StyledCardData = styled.div`
  color: ${props => (props.darkmode ? 'var(--primary-fontcolor)' : 'var(--secondary-fontcolor)')};
`
// ! Seccion Data -------------

const StyledDataTitle = styled.h3`

`

const StyledDataSubtitle = styled.span`
  margin-bottom: 10px;
`

const StyleDataDate = styled.div`
  margin-top: 10px;
`

// ! Seccion 2 Tarjeta ------------

const StyledCardDesing = styled.div`

`

// ! Seccion Desing ------------

const StyledCardRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--primary-color);
  border-radius: 50%;

`

const StyledCardLine = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--primary-color);
  transform: translate(6px, -7px);
`

// ! Sección 3 Tarjeta -----------

const StyldCardSpace = styled.div`

`

const Training = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledTraining darkmode={darkMode}>
      <Title title={"Formación"} darkmode={darkMode}/>
      <StyledTrainingContainer>
        <StyledTrainingCard>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle> Desarrollo Web </StyledDataTitle>
            <StyledDataSubtitle> Oracle Next Education </StyledDataSubtitle>
            <StyleDataDate> <AiOutlineCalendar /> Nov. 2022 - Jun. 2023</StyleDataDate>
          </StyledCardData>
          <StyledCardDesing>
            <StyledCardRounder>
            </StyledCardRounder>
            <StyledCardLine>
            </StyledCardLine>
            <StyldCardSpace></StyldCardSpace>
          </StyledCardDesing>
        </StyledTrainingCard>
        <StyledTrainingCard>
          <StyldCardSpace></StyldCardSpace>
          <StyledCardDesing>
            <StyledCardRounder>
            </StyledCardRounder>
            <StyledCardLine>
            </StyledCardLine>
          </StyledCardDesing>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle> Diplomado en Hábilidades de programación </StyledDataTitle>
            <StyledDataSubtitle> Misión TIC 2022 </StyledDataSubtitle>
            <StyleDataDate> <AiOutlineCalendar /> Abr. 2022 - Dic. 2023</StyleDataDate>
          </StyledCardData>
        </StyledTrainingCard>
        <StyledTrainingCard>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle> Universidad HTML 2021 - Aprende HTML desde Cero hasta Experto </StyledDataTitle>
            <StyledDataSubtitle> Udemy </StyledDataSubtitle>
            <StyleDataDate> <AiOutlineCalendar /> Nov. 2021 - Nov. 2021</StyleDataDate>
          </StyledCardData>
          <StyledCardDesing>
            <StyledCardRounder>
            </StyledCardRounder>
            <StyldCardSpace></StyldCardSpace>
          </StyledCardDesing>
        </StyledTrainingCard>
      </StyledTrainingContainer>
    </StyledTraining>
  )
}

export default Training;