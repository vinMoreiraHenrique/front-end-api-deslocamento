import { createContext, useState } from "react";

import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { IEditDisplacement, IEditDisplacementProvider } from "./EditDisplacement.interfaces";

export const EditDisplacementContext = createContext<IEditDisplacementProvider>(
  {} as IEditDisplacementProvider
);

const EditDisplacementProvider = ({ children }: IFormProps) => {
  const [displacementId, setDisplacementId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditDisplacement>();

  const editDisplacementById = (data: any) => {
    const id = data.id;
    if (displacementId === null) {
      console.error("Displacement ID is null");
      return;
    }
    api
      .put(`/Deslocamento/${displacementId}/EncerrarDeslocamento`, data)
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <EditDisplacementContext.Provider 
    value={{
      register,
      handleSubmit,
      displacementId,
      editDisplacementById,
      setDisplacementId
    }}>
      {children}
    </EditDisplacementContext.Provider>
  );
};

export default EditDisplacementProvider;
