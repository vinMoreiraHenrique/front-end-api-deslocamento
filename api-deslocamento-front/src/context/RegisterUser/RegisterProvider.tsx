"use client"
import { createContext } from "react";
import { IFormProps, IRegisterCliente, IRegisterProvider } from "./Register.interfaces";
import { useForm } from "react-hook-form"
import { api } from "@/api";

export const RegisterContext = createContext<IRegisterProvider>(
  {} as IRegisterProvider
);

const RegisterProvider = ({ children }: IFormProps) => {
  
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm<IRegisterCliente>()

    const onSubmit = (data: any) => {
      createUser(data)
    };

const createUser = (data: IRegisterCliente) => {
  api.post('/Cliente', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

    return (
      <RegisterContext.Provider
        value={{
          register,
          handleSubmit,
          errors,
          onSubmit,
          createUser,
        }}
      >
        {children}
      </RegisterContext.Provider>
    );
  };
;

export default RegisterProvider;
