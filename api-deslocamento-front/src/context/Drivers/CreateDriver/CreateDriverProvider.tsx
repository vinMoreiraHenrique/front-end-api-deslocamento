import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { ICreateDriver, ICreateDriverProvider } from "./CreateDriver.interfaces";
import { api } from "@/services/api";
import CreateUserProvider from "@/context/Users/CreateUser/CreateUserProvider";

export const CreateDriverContext = createContext<ICreateDriverProvider>({} as ICreateDriverProvider);

const CreateDriverProvider = ({ children }: IFormProps) => {

    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm<ICreateDriver>();

      const createDriver = (data: ICreateDriver) => {
        api.post('/Condutor', data)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.error(error);
          });
      }

    return (
        <CreateDriverContext.Provider
            value={{
                register,
                handleSubmit,
                errors,
                createDriver,
            }}
        >
            {children}
        </CreateDriverContext.Provider>
    );
}

export default CreateDriverProvider;