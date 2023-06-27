import { IEditDriver } from "@/context/Drivers/EditDriver/EditDriver.interfaces";
import { EditDriverContext } from "@/context/Drivers/EditDriver/EditDriverProvider";
import { inputTheme } from "@/styles/Table/TableTheme/theme";
import { Container, TextField, ThemeProvider } from "@mui/material";
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
    <Container>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <ThemeProvider theme={inputTheme}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            {...register("id")}
            onChange={(e) => {
              setDriverId(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Vencimento da Habilitação"
            variant="outlined"
            {...register("vencimentoHabilitacao")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default EditDriver;
