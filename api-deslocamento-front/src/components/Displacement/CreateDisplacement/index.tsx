"use client";

import { ICreateDisplacement } from "@/context/Displacements/CreateDisplacement/CreateDisplacement.interfaces";
import { CreateDisplacementContext } from "@/context/Displacements/CreateDisplacement/CreateDisplacementProvider";
import { inputTheme } from "@/styles/Table/TableTheme/theme";
import { Container, TextField, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateDisplacementForm = () => {
    const { register, handleSubmit, errors, createDisplacement } = useContext(CreateDisplacementContext);

    const onSubmit: SubmitHandler<ICreateDisplacement> = (data: any) => {
        createDisplacement(data);
    }
  return (
    <Container>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <ThemeProvider theme={inputTheme}>
          <TextField
            id="outlined-basic"
            label="km inicial"
            variant="outlined"
            {...register("kmInicial")}
          />
          <TextField
            id="filled-basic"
            label="Início do Deslocamento"
            variant="filled"
            {...register("inicioDeslocamento")}
          />
          <TextField
            id="filled-basic"
            label="Motivo"
            variant="filled"
            {...register("motivo")}
          />
          <TextField
            id="filled-basic"
            label="Observação"
            variant="filled"
            {...register("observacao")}
          />
          <TextField
            id="filled-basic"
            label="ID do Condutor"
            variant="filled"
            {...register("idCondutor")}
          />
          <TextField
            id="filled-basic"
            label="ID do Veículo"
            variant="filled"
            {...register("idVeiculo")}
          />
          <TextField
            id="filled-basic"
            label="ID do Cliente"
            variant="filled"
            {...register("idCliente")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default CreateDisplacementForm;
