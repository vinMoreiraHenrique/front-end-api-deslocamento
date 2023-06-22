"use client"
import { createContext, useState } from "react";
import { IFormProps, ICreateUser, ICreateUserProvider } from "./CreateUser.interfaces";
import { useForm } from "react-hook-form"
import { api } from "@/services/api";

export const CreateUserContext = createContext<ICreateUserProvider>(
  {} as ICreateUserProvider
);

const CreateUserProvider = ({ children }: IFormProps) => {
  
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm<ICreateUser>()

const createUser = (data: ICreateUser) => {
  api.post('/Cliente', data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

    return (
      <CreateUserContext.Provider
        value={{
          register,
          handleSubmit,
          errors,
          createUser,
        }}
      >
        {children}
      </CreateUserContext.Provider>
    );
  };
;

export default CreateUserProvider;
