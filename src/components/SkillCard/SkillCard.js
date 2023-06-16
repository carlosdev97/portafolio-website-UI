import React, { useContext } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { ThemeContext } from "../../ContextTheme";

const StyledCard = styled.div`
  display: flex;
  align-items: flex-end;
  width: 140px;
  height: 140px;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.darkmode ? "var(--primary-bgcolor)" : "var(--secondary-bgcolor)"};
  color: ${props => (props.darkmode ? 'var(--secondary-fontcolor)' : 'var(--primary-fontcolor)')};
  padding-bottom: 16px;
  padding-left: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  @media (max-width: 425px) {
    width: 100px;
    height: 100px;
    font-size: 1rem;
  }
`;

const StyledCardInfo = styled.div``;

const StyledCardTitle = styled.h3`
  font-weight: 400;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

const StyledIconWrapper = styled(IconContext.Provider)`
`;

const StyledIcon = styled.div`
  font-size: 24px;
`;

const SkillCard = ({ title, iconName: IconComponent }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledCard darkmode={darkMode}>
      <StyledCardInfo>
        <StyledIconWrapper value={{ className: "card-icon" }} >
          <StyledIcon>
            <IconComponent />
          </StyledIcon>
        </StyledIconWrapper>
        <StyledCardTitle darkmode={darkMode}>{title}</StyledCardTitle>
      </StyledCardInfo>
    </StyledCard>
  );
};

export default SkillCard;
