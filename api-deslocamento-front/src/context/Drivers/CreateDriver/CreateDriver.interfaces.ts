import {
  DeepRequired,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ICreateDriver {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

export interface ICreateDriverProvider {
  createDriver: (data: DeepRequired<ICreateDriver>) => void;
  register: UseFormRegister<ICreateDriver>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
