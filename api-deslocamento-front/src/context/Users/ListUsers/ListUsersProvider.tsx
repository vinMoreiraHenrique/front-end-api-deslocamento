"use client";
import { createContext, useState } from "react";
import { api } from "@/services/api";
import { ICreateUser, IFormProps } from "../CreateUser/CreateUser.interfaces";
import { IListUserProvider } from "./ListUsers.interfaces";

export const ListUsersContext = createContext<IListUserProvider>(
  {} as IListUserProvider
);

const ListUsersProvider = ({ children }: IFormProps) => {
  const [usersList, setUsersList] = useState([]);
  const [userById, setUserById] = useState(null)

  const listUsers = () => {
    api
      .get("/Cliente")
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listUserById = (id: number) => {
    api
      .get(`/Cliente/${id}`)
      .then((response) => {
        setUserById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <ListUsersContext.Provider
      value={{
        listUsers,
        usersList,
        userById,
        listUserById
      }}
    >
      {children}
    </ListUsersContext.Provider>
  );
};
export default ListUsersProvider;
