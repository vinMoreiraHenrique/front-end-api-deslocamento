import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IEditUserProvider {
    userId: string;
    editUserById: (data: any) => void;
    setUserId: any;
    register: UseFormRegister<IEditUser>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface IEditUser {
    id: number;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
  }