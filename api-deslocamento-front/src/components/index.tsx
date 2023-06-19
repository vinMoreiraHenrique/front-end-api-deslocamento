"use client"

import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

interface IRegisterCliente {
  numeroDocumento: string,
  tipoDocumento: string,
  nome: string,
  logradouro: string,
  numero: string,
  bairro: string,
  cidade: string,
  uf: string
}

const theme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&.MuiFilledInput-root::after": {
            borderColor: "green",
          },
          "&:hover.MuiFilledInput-root::before": {
            borderColor: "red ",
            color: "red",
          },
          "&.Mui-focused::after": {
            borderColor: "yellow",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red ",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
          },
        },
      },
    },
  },
});

const UserForm = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const onSubmit = (data: any) => {
  console.log(data)
}

  return (
    <Container>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" label="Número do Documento" variant="outlined" {...register("numeroDoDocumento")}/>
        <TextField id="filled-basic" label="Tipo do Documento" variant="filled" {...register("tipoDoDocumento")}/>
        <TextField id="standard-basic" label="Nome" variant="standard" {...register("nome")}/>
        <TextField id="outlined-basic" label="Logradouro" variant="outlined" {...register("logradouro")}/>
        {/* <TextField
          id="outlined"
          label="Outlined"
          variant="outlined"
          sx={{
            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "yellow",
            },
            "& fieldset": {
              borderColor: "red ",
            },
            "&:Mui-focused fieldset": {
              borderColor: "yellow",
            },
          }}
          {...register("numero")}
        > */}
        <TextField id="outlined-basic" label="Número" variant="outlined" {...register("numero")}/>
        <TextField id="outlined-basic" label="Bairro" variant="outlined" {...register("bairro")}/>
        <TextField id="outlined-basic" label="Cidade" variant="outlined" {...register("cidade")}/>
        <TextField id="outlined-basic" label="UF" variant="outlined" {...register("uf")}/>
      </ThemeProvider>
      <button type="submit">Submeter</button>
    </form>
    </Container>
  );
};

export default UserForm;
