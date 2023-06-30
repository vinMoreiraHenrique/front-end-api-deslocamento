"use client";

import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { ICreateDriver } from "@/context/Drivers/CreateDriver/CreateDriver.interfaces";
import { CreateDriverContext } from "@/context/Drivers/CreateDriver/CreateDriverProvider";
import { Container, TextField, ThemeProvider, Typography } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FlexForm from "@/components/FlexForm";

const CreateDriverForm = () => {
  const { register, handleSubmit, createDriver } =
    useContext(CreateDriverContext);

  const onSubmit: SubmitHandler<ICreateDriver> = (data: any) => {
    createDriver(data);
  };

  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
      <Typography variant="h1">Criar Condutor</Typography>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
      >
          <TextField
            label="Nome"
            variant="filled"
            {...register("nome")}
          />
          <TextField
            label="Número da Habilitação"
            variant="filled"
            {...register("numeroHabilitacao")}
          />
          <TextField
            label="Categoria da Habilitação"
            variant="filled"
            {...register("categoriaHabilitacao")}
          />
          <TextField
            label="Vencimento da Habilitação"
            variant="filled"
            {...register("vencimentoHabilitacao")}
          />
        <button type="submit" className="text-white border-2 border-black bg-[#2D2E2E] border-r-8 p-2 rounded-xl shadow-none border-none">Submeter</button>
      </form>
        </ThemeProvider>
    </FlexForm>
  );
};

export default CreateDriverForm;
