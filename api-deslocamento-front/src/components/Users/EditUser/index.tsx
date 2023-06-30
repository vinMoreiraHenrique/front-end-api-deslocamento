import { TextField, ThemeProvider, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { inputTheme } from "../../../styles/Table/InputTheme/theme";
import { IEditUser } from "@/context/Users/EditUser/EditUser.interfaces";
import { EditUserContext } from "@/context/Users/EditUser/EditUserProvider";
import { useContext } from "react";
import FlexForm from "@/components/FlexForm";

const EditUser = () => {
  const { register, handleSubmit, editUserById, setUserId } =
    useContext(EditUserContext);

  const onSubmit: SubmitHandler<IEditUser> = (data: any) => {
    const id = data.id;
    setUserId(id);
    editUserById(data);
  };

  return (
    <FlexForm>
      <ThemeProvider theme={inputTheme}>
      <Typography variant="h1">Editar Usuário</Typography>
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
              setUserId(e.target.value);
            }}
          />
          <TextField
            label="Nome"
            variant="filled"
            {...register("nome")}
          />
          <TextField
            label="Logradouro"
            variant="filled"
            {...register("logradouro")}
          />
          <TextField
            label="Número"
            variant="filled"
            {...register("numero")}
          />
          <TextField
            label="Bairro"
            variant="filled"
            {...register("bairro")}
          />
          <TextField
            label="Cidade"
            variant="filled"
            {...register("cidade")}
          />
          <TextField
            label="UF"
            variant="filled"
            {...register("uf")}
          />
        <button type="submit" className="text-white border-2 border-black bg-[#2D2E2E] border-r-8 p-2 rounded-xl shadow-none border-none">Submeter</button>
      </form>
        </ThemeProvider>
    </FlexForm>
  );
};

export default EditUser;
