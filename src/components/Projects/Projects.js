import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ThemeContext } from "../../ContextTheme";
import { FiExternalLink } from "react-icons/fi";

const StyledProjects = styled.section`
  padding: 3rem 5%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
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

const StyledCarousel = styled(Slider)``;

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
  width: 50%;
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
  color: ${(props) =>
    props.darkmode ? "var(--primary-fontcolor)" : "var(--secondary-fontcolor)"};
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const StyledTitleCard = styled.h3`
  margin: 0;
  align-self: flex-start;
  @media (max-width: 425px) {
    margin: 15px 0;
  }
`;

const StyledDescriptionCard = styled.p`
  margin: 15px 0 30px 0;
  color: ${props => (props.darkmode ? 'var(--tertiary-fontcolor-ligth)' : 'var(--cuaternary-fontcolor-dark)')};
  @media (max-width: 425px) {
    margin: 0 0 30px 0;
  }
`;

const StyledButtonsCard = styled.div``;

const StyledButtonCard = styled.a`
  cursor: pointer;
  padding: 10px 20px;
  background-color: #2490ce;
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
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledProjects darkmode={darkMode} id="portafolio">
      <Title title={"Proyectos"} darkmode={darkMode} />
      <StyledCarousel {...settings}>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard
                src="https://i.ibb.co/3BfQBcc/encriptador.jpg"
                alt="Mockups Encriptador de Texto"
              />
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>Encriptador de Texto</StyledTitleCard>
              <StyledDescriptionCard darkmode={darkMode}>
                El proyecto consiste en la creación de una página web en la cual se proporciona cualquier texto para que sea encriptado o desencriptado. Además de estas dos funcionalidades, la página también cuenta con un botón para copiar el texto ya procesado.
              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard
                  href="https://carlosedm97.github.io/encriptador_de_texto_ONE/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más <FiExternalLink />
                </StyledButtonCard>
              </StyledButtonsCard>
            </StyledDataContainer>
          </StyledCard>
        </div>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard
                src="https://i.ibb.co/jR7QqcK/alurageek.jpg"
                alt="Mockups AluraGeek"
              />
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>AluraGeek</StyledTitleCard>
              <StyledDescriptionCard darkmode={darkMode}>
                E-commerce para una tienda ficticia de accesorios para geeks y gamers. La página posee un formulario de inicio de sesión de administrador para la gestión del inventario, donde se podrán visualizar todos los productos, crear nuevos productos, editar productos existentes y eliminar productos. También cuenta con una barra de búsqueda, validación de formularios para el registro de nuevos productos y un formulario de contacto.              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard
                  href="https://alurageek-one-carlosedm97.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más <FiExternalLink />
                </StyledButtonCard>
              </StyledButtonsCard>
            </StyledDataContainer>
          </StyledCard>
        </div>
        <div>
          <StyledCard>
            <StyledImageContainer>
              <StyledImageCard
                src="https://i.ibb.co/fH6Dd2w/image1.jpg"
                alt="Mockups AluraFlix"
              />
            </StyledImageContainer>
            <StyledDataContainer darkmode={darkMode}>
              <StyledTitleCard>AluraFlix</StyledTitleCard>
              <StyledDescriptionCard darkmode={darkMode}>
              Desarrollo de una plataforma de videos educativos en la cual se pueden clasificar por categorías y asignarles un color. La plataforma incluye un formulario para agregar nuevos videos, así como para agregar nuevas categorías, cada una con su respectiva validación.
              </StyledDescriptionCard>
              <StyledButtonsCard>
                <StyledButtonCard
                  href="https://aluraflix-one-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más <FiExternalLink />
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
