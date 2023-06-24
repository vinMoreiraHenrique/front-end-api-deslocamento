import { TextField, ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { inputTheme } from "../CreateUser/theme";
import { IEditUser } from "@/context/Users/EditUser/EditUser.interfaces";
import { EditUserContext } from "@/context/Users/EditUser/EditUserProvider";
import { useContext, useEffect } from "react";

const EditUser = () => {
  const { register, handleSubmit, editUserById, setUserId, userId } =
    useContext(EditUserContext);

  const onSubmit: SubmitHandler<IEditUser> = (data: any) => {
    const id = data.id;
    setUserId(id);
    editUserById(data);
    console.log(userId);
    console.log(data);
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
          />
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            {...register("nome")}
          />
          <TextField
            id="outlined-basic"
            label="Logradouro"
            variant="outlined"
            {...register("logradouro")}
          />
          <TextField
            id="outlined-basic"
            label="Número"
            variant="outlined"
            {...register("numero")}
          />
          <TextField
            id="outlined-basic"
            label="Bairro"
            variant="outlined"
            {...register("bairro")}
          />
          <TextField
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            {...register("cidade")}
          />
          <TextField
            id="outlined-basic"
            label="UF"
            variant="outlined"
            {...register("uf")}
          />
        </ThemeProvider>
        <button type="submit">Submeter</button>
      </form>
    </Container>
  );
};

export default EditUser;
