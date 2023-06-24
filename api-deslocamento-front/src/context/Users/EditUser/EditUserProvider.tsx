import { createContext, useState } from "react";
import { IEditUser, IEditUserProvider } from "./EditUser.interfaces";
import { IFormProps } from "../CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";

export const EditUserContext = createContext<IEditUserProvider>({} as IEditUserProvider)

const EditUserProvider = ({children}: IFormProps) => {
    const [userId, setUserId] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IEditUser>();

    const editUserById = (data: any) => {
        api
        .put(`/Cliente/${userId}`, data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <EditUserContext.Provider
            value={{
                register, 
                handleSubmit,
                userId,
                editUserById,
                setUserId
            }}
        >
            {children}
        </EditUserContext.Provider>
    );
}

export default EditUserProvider;