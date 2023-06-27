import {
    DeepRequired,
    FieldErrors,
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
  } from "react-hook-form";
export interface ICreateDisplacement{
    kmInicial: number,
    kmFinal: number,
    inicioDeslocamento: string,
    checkList: string,
    motivo: string,
    observacao: string,
    idCondutor: number,
    idVeiculo: number,
    idCliente: number
}

export interface ICreateDisplacementProvider{
     createDisplacement: (data: DeepRequired<ICreateDisplacement>) => void;
     register: UseFormRegister<ICreateDisplacement>;
     handleSubmit: UseFormHandleSubmit<FieldValues>;
     errors: FieldErrors<FieldValues>;
}

