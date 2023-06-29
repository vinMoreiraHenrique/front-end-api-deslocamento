import { IEditDisplacement } from "@/context/Displacements/EditDisplacement/EditDisplacement.interfaces";
import { EditDisplacementContext } from "@/context/Displacements/EditDisplacement/EditDisplacementProvider";
import { inputTheme } from "@/styles/Table/TableTheme/theme";
import { Container, TextField, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const EditDisplacement = () => {
  const { register, handleSubmit, editDisplacementById, setDisplacementId } =
    useContext(EditDisplacementContext);

  const onSubmit: SubmitHandler<IEditDisplacement> = (data: any) => {
    const id = data.id;
    setDisplacementId(id);
    editDisplacementById(data);
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
              setDisplacementId(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="KM Final"
            variant="outlined"
            {...register("kmFinal")}
          />
          <TextField
          id="outlined-basic"
          label="Fim Deslocamento"
          variant="outlined"
          {...register("fimDeslocamento")}
          />
        <TextField
          id="outlined-basic"
          label="Observação"
          variant="outlined"
          {...register("observacao")}
        />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default EditDisplacement;
