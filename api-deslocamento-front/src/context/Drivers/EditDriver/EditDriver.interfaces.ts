import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IEditDriver {
  id: number;
  vencimentoHabilitacao: string;
}

export interface IEditDriverProvider {
  driverId: string;
  editDriverById: (data: IEditDriver) => void;
  setDriverId: any;
  register: UseFormRegister<IEditDriver>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
