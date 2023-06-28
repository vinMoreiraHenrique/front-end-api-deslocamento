import { ICreateVehicle } from "@/context/Vehicles/CreateVehicle/CreateVehicle.interfaces";
import { CreateVehicleContext } from "@/context/Vehicles/CreateVehicle/CreateVehicleProvider";
import { inputTheme } from "@/styles/Table/TableTheme/theme";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Container, TextField, ThemeProvider } from "@mui/material";

const CreateVehicleForm = () => {
  const { register, handleSubmit, errors, createVehicle } =
    useContext(CreateVehicleContext);

  const onSubmit: SubmitHandler<ICreateVehicle> = (data: any) => {
    createVehicle(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <ThemeProvider theme={inputTheme}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            {...register("placa")}
          />
          <TextField
            id="filled-basic"
            label="Número da Habilitação"
            variant="filled"
            {...register("marcaModelo")}
          />
          <TextField
            id="standard-basic"
            label="anoFabricacao"
            variant="filled"
            {...register("anoFabricacao")}
          />
          <TextField
            id="standard-basic"
            label="KM"
            variant="filled"
            {...register("kmAtual")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default CreateVehicleForm;
