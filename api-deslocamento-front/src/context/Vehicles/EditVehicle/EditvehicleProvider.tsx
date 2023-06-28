import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IEditVehicle, IEditVehicleProvider } from "./EditVehicle.interfaces";

export const EditVehicleContext = createContext<IEditVehicleProvider>(
  {} as IEditVehicleProvider
);

const EditvehicleProvider = ({ children }: IFormProps) => {
  const [vehicleId, setVehicleId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditVehicle>();

  const editVehicleById = (data: any) => {
    const id = data.id;
    api
      .put(`/Veiculo/${vehicleId}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <EditVehicleContext.Provider
      value={{
        register,
        handleSubmit,
        vehicleId,
        editVehicleById,
        setVehicleId,
      }}
    >
      {children}
    </EditVehicleContext.Provider>
  );
};

export default EditvehicleProvider;
