import { ReactNode } from "react";
import {
    DeepRequired,
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
    FieldValues,
  } from "react-hook-form"

export interface IRegisterCliente {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface IRegisterProvider {
    register: UseFormRegister<IRegisterCliente>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    errors: FieldErrors<FieldValues>; 
    onSubmit: (data: FieldValues) => void;
    createUser: (data: DeepRequired<IRegisterCliente>) => void;
}
export interface IFormProps {
children: ReactNode
}
