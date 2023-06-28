"use client";

import { createContext, useState } from "react";
import {
  ICreateVehicle,
  ICreateVehicleProvider,
} from "./CreateVehicle.interfaces";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";

export const CreateVehicleContext = createContext<ICreateVehicleProvider>(
  {} as ICreateVehicleProvider
);

const CreateVehicleProvider = ({ children }: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateVehicle>();

  const createVehicle = (data: ICreateVehicle) => {
    api
      .post("/Veiculo", data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CreateVehicleContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        createVehicle,
      }}
    >
      {children}
    </CreateVehicleContext.Provider>
  );
};

export default CreateVehicleProvider;
