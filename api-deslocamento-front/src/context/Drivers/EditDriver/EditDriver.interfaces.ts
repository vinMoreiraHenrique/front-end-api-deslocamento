import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IEditDriverProvider {
  driverId: string;
  editDriverById: (data: any) => void;
  setDriverId: any;
  register: UseFormRegister<IEditDriver>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface IEditDriver {
  id: number;
  vencimentoHabilitacao: string;
}
