import { ReactNode } from "react";
import {
    DeepRequired,
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
    FieldValues,
  } from "react-hook-form"

export interface ICreateUser {
  id?: string;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface ICreateUserProvider {
    register: UseFormRegister<ICreateUser>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    errors: FieldErrors<FieldValues>; 
    createUser: (data: DeepRequired<ICreateUser>) => void;
}
export interface IFormProps {
children: ReactNode
}
