import React, { useContext, useState } from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import { ThemeContext } from "../../ContextTheme";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import queryString from "query-string";

const StyledContact = styled.section`
  padding: 10rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.darkmode ? "var(--secondary-bgcolor)" : "var(--primary-bgcolor)"};
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  border: 1px solid #e8e8e8;
  padding: 2.5em 1.5em;
  border-radius: 1em;
  background-color: #fff;
  @media (max-width: 425px) {
    max-width: 300px;
  }
`;

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryParams = queryString.stringify({
      subject: subject,
      body: `Hola soy ${name} mi correo es ${email} y ${message}`
    });

    const mailtoLink = `mailto:carlosedm97@gmail.com?${queryParams}`;

    window.location.href = mailtoLink;
  };

  return (
    <StyledContact darkmode={darkMode}>
      <Title title="Contacto" darkmode={darkMode} />
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Nombre"
          fullWidth
          margin="normal"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          margin="normal"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Asunto"
          fullWidth
          margin="normal"
          onChange={(event) => {
            setSubject(event.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Mensaje"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          sx={{ marginTop: "16px" }}
        >
          Enviar
        </Button>
      </StyledForm>
    </StyledContact>
  );
};

export default Contact;
