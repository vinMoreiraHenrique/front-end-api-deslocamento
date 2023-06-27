import { createContext, useState } from "react";
import { IEditDriver, IEditDriverProvider } from "./EditDriver.interfaces";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";

export const EditDriverContext = createContext<IEditDriverProvider>(
  {} as IEditDriverProvider
);

const EditDriverProvider = ({ children }: IFormProps) => {
  const [driverId, setDriverId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditDriver>();

  const editDriverById = (data: any) => {
    const id = data.id;
    if (driverId === null) {
      console.error("Driver ID is null");
      return;
    }
    api
      .put(`/Condutor/${driverId}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log(data);
      });
  };

  return (
    <EditDriverContext.Provider
      value={{
        register,
        handleSubmit,
        driverId,
        editDriverById,
        setDriverId,
      }}
    >
      {children}
    </EditDriverContext.Provider>
  );
};

export default EditDriverProvider;
