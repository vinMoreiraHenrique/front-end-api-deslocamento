import FlexForm from "@/components/FlexForm";
import { IEditDriver } from "@/context/Drivers/EditDriver/EditDriver.interfaces";
import { EditDriverContext } from "@/context/Drivers/EditDriver/EditDriverProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Container, TextField, ThemeProvider, Typography } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const EditDriver = () => {
  const { register, handleSubmit, editDriverById, setDriverId } =
    useContext(EditDriverContext);

  const onSubmit: SubmitHandler<IEditDriver> = (data: any) => {
    const id = data.id;
    setDriverId(id);
    editDriverById(data);
  };

  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
      <Typography variant="h1">Editar Condutor</Typography>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
      >
          <TextField
            label="ID"
            variant="filled"
            {...register("id")}
            onChange={(e) => {
              setDriverId(e.target.value);
            }}
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

export default EditDriver;
