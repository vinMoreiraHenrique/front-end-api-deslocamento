import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IEditVehicleProvider {
  vehicleId: string;
  editVehicleById: (data: any) => void;
  setVehicleId: any;
  register: UseFormRegister<IEditVehicle>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface IEditVehicle {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  kmAtual: string;
}
