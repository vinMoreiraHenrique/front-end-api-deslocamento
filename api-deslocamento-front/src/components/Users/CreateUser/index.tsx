"use client";

import { CreateUserContext } from "@/context/Users/CreateUser/CreateUserProvider";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { inputTheme } from "../../../styles/Table/InputTheme/theme";
import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";
import FlexForm from "@/components/FlexForm";
import { blue } from "@mui/material/colors";
import { inter } from "@/app/layout";

const CreateUserForm = () => {
  const { register, handleSubmit, createUser } = useContext(CreateUserContext);

  const onSubmit: SubmitHandler<ICreateUser> = (data: any) => {
    createUser(data);
  };

  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
        <Typography variant="h1" className={inter.style.fontFamily}>
          Create User
        </Typography>
        <form
          action="#"
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
        >
          <TextField
            label="Número do Documento"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
                "&.Mui-focused": {
                  color: "grey",
                },
              },
            }}
            {...register("numeroDocumento")}
          />
          <TextField
            label="Tipo do Documento"
            variant="filled"
            {...register("tipoDocumento")}
          />
          <TextField label="Nome" variant="filled" {...register("nome")} />
          <TextField
            label="Logradouro"
            variant="filled"
            {...register("logradouro")}
          />
          <TextField label="Número" variant="filled" {...register("numero")} />
          <TextField label="Bairro" variant="filled" {...register("bairro")} />
          <TextField label="Cidade" variant="filled" {...register("cidade")} />
          <TextField label="UF" variant="filled" {...register("uf")} />
          <button
            type="submit"
            className="text-white border-2 border-black bg-[#2D2E2E] border-r-8 p-2 rounded-xl shadow-none border-none"
          >
            Submeter
          </button>
        </form>
      </ThemeProvider>
    </FlexForm>
  );
};

export default CreateUserForm;
