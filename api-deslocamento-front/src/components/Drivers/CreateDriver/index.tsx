"use client";

import { inputTheme } from "@/components/Users/CreateUser/theme";
import { ICreateDriver } from "@/context/Drivers/CreateDriver/CreateDriver.interfaces";
import { CreateDriverContext } from "@/context/Drivers/CreateDriver/CreateDriverProvider";
import { Container, TextField, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateDriverForm = () => {
  const { register, handleSubmit, createDriver } =
    useContext(CreateDriverContext);

  const onSubmit: SubmitHandler<ICreateDriver> = (data: any) => {
    createDriver(data);
  };

  return (
    <Container>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <ThemeProvider theme={inputTheme}>
          <TextField
            id="outlined-basic"
            label="Número do Documento"
            variant="outlined"
            {...register("nome")}
          />
          <TextField
            id="filled-basic"
            label="Tipo do Documento"
            variant="filled"
            {...register("numeroHabilitacao")}
          />
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            {...register("categoriaHabilitacao")}
          />
          <TextField
            id="outlined-basic"
            label="Logradouro"
            variant="outlined"
            {...register("vencimentoHabilitacao")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default CreateDriverForm;
