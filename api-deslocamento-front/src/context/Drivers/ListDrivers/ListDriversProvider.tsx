"use client";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";
import { createContext, useState } from "react";
import { IListDriverProvider } from "./ListDrivers.interfaces";

export const ListDriversContext = createContext<IListDriverProvider>(
  {} as IListDriverProvider
);

const ListDriversProvider = ({ children }: IFormProps) => {
  const [driversList, setDriversList] = useState([]);
  const [driverById, setDriverById] = useState(null);
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

  const listDrivers = () => {
    api
      .get("/Condutor")
      .then((response) => {
        setDriversList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listDriverById = (id: number) => {
    api
      .get(`/Condutor/${id}`)
      .then((response) => {
        setDriverById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ListDriversContext.Provider
      value={{
        listDrivers,
        listDriverById,
        driversList,
        driverById,
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
    </ListDriversContext.Provider>
  );
};
export default ListDriversProvider;
