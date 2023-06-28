import { IEditVehicle } from "@/context/Vehicles/EditVehicle/EditVehicle.interfaces";
import { EditVehicleContext } from "@/context/Vehicles/EditVehicle/EditvehicleProvider";
import { inputTheme } from "@/styles/Table/TableTheme/theme";
import { Container, TextField, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const EditVehicle = () => {
  const { register, handleSubmit, editVehicleById, setVehicleId } =
    useContext(EditVehicleContext);

  const onSubmit: SubmitHandler<IEditVehicle> = (data: any) => {
    const id = data.id;
    setVehicleId(id);
    editVehicleById(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <ThemeProvider theme={inputTheme}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            {...register("id")}
            onChange={(e) => {
              setVehicleId(e.target.value);
            }}
          />

          <TextField
            id="outlined-basic"
            label="Marca e Modelo"
            variant="outlined"
            {...register("marcaModelo")}
          />
          <TextField
            id="outlined-basic"
            label="Ano de Fabricação"
            variant="outlined"
            {...register("anoFabricacao")}
          />
          <TextField
            id="outlined-basic"
            label="KM Atual"
            variant="outlined"
            {...register("kmAtual")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default EditVehicle;
