import React, { useContext } from 'react';
import styled from "styled-components";
import Title from "../Title/Title";
import { ThemeContext } from '../../ContextTheme';
import TextField from '@mui/material/TextField';

const StyledContact = styled.section`
  padding: 100vh 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`

`

const StyledTextField = styled(TextField)`

`

const Contact = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <StyledContact>
      <Title title="Contacto" darkmode={ darkMode } />
      <StyledForm>
        <TextField variant="filled" label="Nombre" />
      </StyledForm>
    </StyledContact>
  )
}

export default Contact; 