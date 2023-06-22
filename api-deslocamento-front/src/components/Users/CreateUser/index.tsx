"use client";

import { CreateUserContext } from "@/context/Users/CreateUser/CreateUserProvider";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { inputTheme } from "./theme";
import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";

const CreateUserForm = () => {
  const { register, handleSubmit, createUser } = useContext(CreateUserContext);

  const onSubmit: SubmitHandler<ICreateUser> = (data: any) => {
    createUser(data);
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
            {...register("numeroDocumento")}
          />
          <TextField
            id="filled-basic"
            label="Tipo do Documento"
            variant="filled"
            {...register("tipoDocumento")}
          />
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            {...register("nome")}
          />
          <TextField
            id="outlined-basic"
            label="Logradouro"
            variant="outlined"
            {...register("logradouro")}
          />
          {/* <TextField
          id="outlined"
          label="Outlined"
          variant="outlined"
          sx={{
            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "yellow",
            },
            "& fieldset": {
              borderColor: "red ",
            },
            "&:Mui-focused fieldset": {
              borderColor: "yellow",
            },
          }}
          {...register("numero")}
        > */}
          <TextField
            id="outlined-basic"
            label="Número"
            variant="outlined"
            {...register("numero")}
          />
          <TextField
            id="outlined-basic"
            label="Bairro"
            variant="outlined"
            {...register("bairro")}
          />
          <TextField
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            {...register("cidade")}
          />
          <TextField
            id="outlined-basic"
            label="UF"
            variant="outlined"
            {...register("uf")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default CreateUserForm;
