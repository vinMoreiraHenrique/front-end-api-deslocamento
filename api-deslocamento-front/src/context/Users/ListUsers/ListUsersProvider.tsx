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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableHeight, setTableHeight] = useState("auto");
  const [tableType, setTableType] = useState(true);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        listUserById,
        page,
        rowsPerPage,
        tableHeight,
        tableType,
        handleChangePage,
        handleChangeRowsPerPage,
        setTableType
      }}
    >
      {children}
    </ListUsersContext.Provider>
  );
};
export default ListUsersProvider;
