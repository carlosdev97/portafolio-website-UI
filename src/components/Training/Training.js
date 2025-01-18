import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { ThemeContext } from "../../ContextTheme";
import { AiOutlineCalendar } from "react-icons/ai";

const StyledTraining = styled.section`
  padding: 5rem 5%;
  background-color: ${(props) =>
    props.darkmode ? "var(--secondary-bgcolor)" : "var(--primary-bgcolor)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
    padding: var(--padding-tablet);
  }
  @media (max-width: 425px) {
    padding: var(--padding-mobile);
  }
`;

const StyledTrainingContainer = styled.div`
  padding: 0 30%;
  @media (max-width: 768px) {
    padding: 0 20%;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;

const StyledTrainingCard = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  @media (max-width: 425px) {
    column-gap: 1rem;
  }
`;

const StyledCardData = styled.div`
  color: ${(props) =>
    props.darkmode ? "var(--primary-fontcolor)" : "var(--secondary-fontcolor)"};
`;

const StyledDataTitle = styled.h3`
  margin-bottom: 10px;
`;

const StyledDataSubtitle = styled.span`
  margin-bottom: 10px;
  color: ${(props) =>
    props.darkmode
      ? "var(--tertiary-fontcolor-ligth)"
      : "var(--cuaternary-fontcolor-dark)"};
`;

const StyleDataDate = styled.div`
  margin-top: 10px;
  color: ${(props) =>
    props.darkmode
      ? "var(--tertiary-fontcolor-ligth)"
      : "var(--cuaternary-fontcolor-dark)"};
`;

const StyledCardDesing = styled.div``;

const StyledCardRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--primary-color);
  border-radius: 50%;

  &.last-point {
    position: relative;
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.5);
      }
      70% {
        box-shadow: 0 0 0 20px rgba(0, 123, 255, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
      }
    }
  }
`;

const StyledCardLine = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--primary-color);
  transform: translate(6px, -7px);
`;

const StyldCardSpace = styled.div``;

const Training = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledTraining darkmode={darkMode} id="formacion">
      <Title title={"Formación"} darkmode={darkMode} />
      <StyledTrainingContainer>
        <StyledTrainingCard>
          <StyldCardSpace></StyldCardSpace>
          <StyledCardDesing>
            <StyledCardRounder className="last-point"></StyledCardRounder>
            <StyledCardLine></StyledCardLine>
          </StyledCardDesing>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle>
              {" "}
              Técnico Laboral en Asistente de Desarrollo de Software{" "}
            </StyledDataTitle>
            <StyledDataSubtitle darkmode={darkMode}>
              {" "}
              1000 Programadores para el Valle del Cauca{" "}
            </StyledDataSubtitle>
            <StyleDataDate darkmode={darkMode}>
              {" "}
              <AiOutlineCalendar /> Ago. 2024 - Actualidad
            </StyleDataDate>
          </StyledCardData>
        </StyledTrainingCard>
        <StyledTrainingCard>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle> Desarrollo Web </StyledDataTitle>
            <StyledDataSubtitle darkmode={darkMode}>
              {" "}
              Oracle Next Education{" "}
            </StyledDataSubtitle>
            <StyleDataDate darkmode={darkMode}>
              {" "}
              <AiOutlineCalendar /> Nov. 2022 - Jun. 2023
            </StyleDataDate>
          </StyledCardData>
          <StyledCardDesing>
            <StyledCardRounder></StyledCardRounder>
            <StyledCardLine></StyledCardLine>
            <StyldCardSpace></StyldCardSpace>
          </StyledCardDesing>
        </StyledTrainingCard>
        <StyledTrainingCard>
          <StyldCardSpace></StyldCardSpace>
          <StyledCardDesing>
            <StyledCardRounder></StyledCardRounder>
            <StyledCardLine></StyledCardLine>
          </StyledCardDesing>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle>
              {" "}
              Diplomado en Hábilidades de programación{" "}
            </StyledDataTitle>
            <StyledDataSubtitle darkmode={darkMode}>
              {" "}
              Misión TIC 2022{" "}
            </StyledDataSubtitle>
            <StyleDataDate darkmode={darkMode}>
              {" "}
              <AiOutlineCalendar /> Abr. 2022 - Dic. 2023
            </StyleDataDate>
          </StyledCardData>
        </StyledTrainingCard>
        <StyledTrainingCard>
          <StyledCardData darkmode={darkMode}>
            <StyledDataTitle>
              {" "}
              Universidad HTML 2021 - Aprende HTML desde Cero hasta Experto{" "}
            </StyledDataTitle>
            <StyledDataSubtitle darkmode={darkMode}> Udemy </StyledDataSubtitle>
            <StyleDataDate darkmode={darkMode}>
              {" "}
              <AiOutlineCalendar /> Nov. 2021 - Nov. 2021
            </StyleDataDate>
          </StyledCardData>
          <StyledCardDesing>
            <StyledCardRounder></StyledCardRounder>
            <StyldCardSpace></StyldCardSpace>
          </StyledCardDesing>
        </StyledTrainingCard>
      </StyledTrainingContainer>
    </StyledTraining>
  );
};

export default Training;
