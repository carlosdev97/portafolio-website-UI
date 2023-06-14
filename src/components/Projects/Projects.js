import React, { useContext } from 'react';
import styled from "styled-components";
import Title from "../Title/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ThemeContext } from '../../ContextTheme';

const StyledProjects = styled.section`
  height: 100vh;
  padding: var(--padding);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.darkmode ? 'var(--secondary-bgcolor)' : 'var(--primary-bgcolor)')};
  @media (max-width: 768px) {
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 425px) {
    height: auto;
    padding: 100px 2%;
  }
`;

const StyledCarousel = styled(Slider)`
  margin: 20px 0;
`

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px 2%;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImageContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const StyledImageCard = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 1rem;
  object-fit: contain;
`;

const StyledDataContainer = styled.div`
  width: 50%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${props => (props.darkmode ? 'var(--primary-fontcolor)' : 'var(--secondary-fontcolor)')};
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const StyledTitleCard = styled.h3`
  margin: 0;
  align-self: flex-start;
  @media (max-width: 425px) {
    margin: 10px 0;
  }
`;

const StyledDescriptionCard = styled.p`
  margin: 0;
`;

const StyledButtonsCard = styled.div`

`;

const StyledButtonCard = styled.a`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #2490CE;
  border: none;
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
  text-decoration: none;
  display: inline;
`;

const Projects = () => {

  const { darkMode } = useContext(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <StyledProjects darkmode={darkMode}>
      <Title title={"Proyectos"} darkmode={darkMode}/>
      <StyledCarousel {...settings}>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard src='https://i.ibb.co/3BfQBcc/encriptador.jpg' alt='Mockups Encriptador de Texto'/>
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>
                Encriptador de Texto
              </StyledTitleCard>
              <StyledDescriptionCard>
                Desarrollo de un encriptador de texto como desafío de la ruta "Lógica de Programación" de la formación Oracle Next Education.
              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard href="https://carlosedm97.github.io/encriptador_de_texto_ONE/" target="_blank" rel="noopener noreferrer">
                  Ver más
                </StyledButtonCard>
              </StyledButtonsCard>
            </StyledDataContainer>
          </StyledCard>
        </div>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard src="https://i.ibb.co/jR7QqcK/alurageek.jpg" alt='Mockups AluraGeek'/>
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>
                AluraGeek
              </StyledTitleCard>
              <StyledDescriptionCard>
                Desarrollo de un Ecommerce como desafío de la ruta 'Front End' de la formación Oracle Next Education.
              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard href="https://alurageek-one-carlosedm97.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver más
                </StyledButtonCard>
              </StyledButtonsCard>
            </StyledDataContainer>
          </StyledCard>
        </div>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard src="https://i.ibb.co/fH6Dd2w/image1.jpg" alt='Mockups AluraFlix'/>
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>
                AluraFlix
              </StyledTitleCard>
              <StyledDescriptionCard>
                Desarrollo de una página web de videos como desafío de la ruta "React JS" de la formación Oracle Next Education.
              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard href="https://aluraflix-one-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Ver más
                </StyledButtonCard>
              </StyledButtonsCard>
            </StyledDataContainer>
          </StyledCard>
        </div>
      </StyledCarousel>
    </StyledProjects>
  );
};

export default Projects;
