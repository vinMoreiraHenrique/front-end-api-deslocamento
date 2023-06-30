import { ICreateVehicle } from "@/context/Vehicles/CreateVehicle/CreateVehicle.interfaces";
import { CreateVehicleContext } from "@/context/Vehicles/CreateVehicle/CreateVehicleProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Container, TextField, ThemeProvider, Typography } from "@mui/material";
import FlexForm from "@/components/FlexForm";

const CreateVehicleForm = () => {
  const { register, handleSubmit, errors, createVehicle } =
    useContext(CreateVehicleContext);

  const onSubmit: SubmitHandler<ICreateVehicle> = (data: any) => {
    createVehicle(data);
  };

  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
        <Typography variant="h1">Criar Veículo</Typography>
        <form
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
        >
          <TextField 
          label="Placa" 
          variant="filled" 
          {...register("placa")} />
          <TextField
            label="Marca e Modelo"
            variant="filled"
            {...register("marcaModelo")}
          />
          <TextField
            label="Ano de Fabricação"
            variant="filled"
            {...register("anoFabricacao")}
          />
          <TextField label="Quilometragem" variant="filled" {...register("kmAtual")} />
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

export default CreateVehicleForm;
