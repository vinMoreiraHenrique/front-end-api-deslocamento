import FlexForm from "@/components/FlexForm";
import { IEditVehicle } from "@/context/Vehicles/EditVehicle/EditVehicle.interfaces";
import { EditVehicleContext } from "@/context/Vehicles/EditVehicle/EditvehicleProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Button, ButtonGroup, Container, TextField, ThemeProvider, Typography } from "@mui/material";
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
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
        
        <Typography variant="h1">Editar Veículo</Typography>
        <form
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
        >
          <TextField
            label="ID"
            variant="filled"
            {...register("id")}
            onChange={(e) => {
              setVehicleId(e.target.value);
            }}
          />

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
          <TextField
            label="KM Atual"
            variant="filled"
            {...register("kmAtual")}
          />
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

export default EditVehicle;
