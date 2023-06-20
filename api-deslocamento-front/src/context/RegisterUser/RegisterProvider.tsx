"use client"
import { createContext, useState } from "react";
import { IFormProps, IRegisterCliente, IRegisterProvider } from "./Register.interfaces";
import { useForm } from "react-hook-form"
import { api } from "@/services/api";

export const RegisterContext = createContext<IRegisterProvider>(
  {} as IRegisterProvider
);

const RegisterProvider = ({ children }: IFormProps) => {
  const [usersList, setUsersList] = useState([]);
  
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm<IRegisterCliente>()

const createUser = (data: IRegisterCliente) => {
  api.post('/Cliente', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

const listUsers = () => {
  api.get('/Cliente')
    .then((response) => {
      // console.log(response.data);
      setUsersList(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
}

    return (
      <RegisterContext.Provider
        value={{
          register,
          handleSubmit,
          errors,
          createUser,
          listUsers,
          usersList
        }}
      >
        {children}
      </RegisterContext.Provider>
    );
  };
;

export default RegisterProvider;
