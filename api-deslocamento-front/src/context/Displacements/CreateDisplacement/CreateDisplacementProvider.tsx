import { createContext } from "react";
import {
  ICreateDisplacement,
  ICreateDisplacementProvider,
} from "./CreateDisplacement.interfaces";
import { useForm } from "react-hook-form";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";

export const CreateDisplacementContext =
  createContext<ICreateDisplacementProvider>({} as ICreateDisplacementProvider);

const CreateDisplacementProvider = ({ children }: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateDisplacement>();

  const createDisplacement = (data: ICreateDisplacement) => {
    api
      .post("/Deslocamento/IniciarDeslocamento", data)
      .then((response) => {
        console.log( response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CreateDisplacementContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        createDisplacement,
      }}
    >
      {children}
    </CreateDisplacementContext.Provider>
  );
};

export default CreateDisplacementProvider;
