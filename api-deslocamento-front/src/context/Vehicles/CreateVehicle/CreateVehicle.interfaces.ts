import { ReactNode } from "react";
import {
  DeepRequired,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

export interface ICreateVehicle {
  id?: number | undefined;
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}

export interface ICreateVehicleProvider {
  register: UseFormRegister<ICreateVehicle>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  createVehicle: (data: DeepRequired<ICreateVehicle>) => void;
}
