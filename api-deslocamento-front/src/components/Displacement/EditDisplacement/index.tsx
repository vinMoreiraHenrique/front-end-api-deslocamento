import FlexForm from "@/components/FlexForm";
import { IEditDisplacement } from "@/context/Displacements/EditDisplacement/EditDisplacement.interfaces";
import { EditDisplacementContext } from "@/context/Displacements/EditDisplacement/EditDisplacementProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Container, TextField, ThemeProvider, Typography } from "@mui/material";
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
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
        <Typography variant="h1">Finalizar Deslocamento</Typography>
        <form
          onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          className="md:flex flex-col gap-2 md:flex-col h-fit flex-nowrap"
        >
          <TextField
            label="ID"
            variant="filled"
            {...register("id")}
            onChange={(e) => {
              setDisplacementId(e.target.value);
            }}
          />
          <TextField
            label="KM Final"
            variant="filled"
            {...register("kmFinal")}
          />
          <TextField
            label="Fim Deslocamento"
            variant="filled"
            {...register("fimDeslocamento")}
          />
          <TextField
            label="Observação"
            variant="filled"
            {...register("observacao")}
          />
          <button type="submit" className="text-white border-2 border-black bg-[#2D2E2E] border-r-8 p-2 rounded-xl shadow-none border-none">Submeter</button>
        </form>
      </ThemeProvider>
    </FlexForm>
  );
};

export default EditDisplacement;
