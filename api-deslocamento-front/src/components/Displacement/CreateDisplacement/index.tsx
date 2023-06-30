"use client";

import FlexForm from "@/components/FlexForm";
import { ICreateDisplacement } from "@/context/Displacements/CreateDisplacement/CreateDisplacement.interfaces";
import { CreateDisplacementContext } from "@/context/Displacements/CreateDisplacement/CreateDisplacementProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Container, TextField, ThemeProvider, Typography } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateDisplacementForm = () => {
    const { register, handleSubmit, errors, createDisplacement } = useContext(CreateDisplacementContext);

    const onSubmit: SubmitHandler<ICreateDisplacement> = (data: any) => {
        createDisplacement(data);
    }
  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
        <Typography variant="h1">Criar Deslocamento</Typography>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
      >
          <TextField
            label="km inicial"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("kmInicial")}
          />
          <TextField
            id="filled-basic"
            label="Início do Deslocamento"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("inicioDeslocamento")}
          />
          <TextField
            id="filled-basic"
            label="Motivo"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("motivo")}
          />
          <TextField
            id="filled-basic"
            label="Observação"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("observacao")}
          />
          <TextField
            id="filled-basic"
            label="ID do Condutor"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("idCondutor")}
          />
          <TextField
            id="filled-basic"
            label="ID do Veículo"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("idVeiculo")}
          />
          <TextField
            id="filled-basic"
            label="ID do Cliente"
            variant="filled"
            sx={{
              "& .MuiInputLabel-filled": {
                color: "white",
              }}
            }
            {...register("idCliente")}
          />
        <button type="submit" className="text-white border-2 border-black bg-[#2D2E2E] border-r-8 p-2 rounded-xl shadow-none border-none">Submeter</button>
      </form>
        </ThemeProvider>
    </FlexForm>
  );
};

export default CreateDisplacementForm;
