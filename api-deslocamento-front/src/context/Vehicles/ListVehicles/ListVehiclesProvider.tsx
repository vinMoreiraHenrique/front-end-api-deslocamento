import { createContext, useState } from "react";
import { api } from "@/services/api";
import { IListVehiclesProvider } from "@/context/Vehicles/ListVehicles/ListVehicles.interfaces";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";

export const ListVehiclesContext = createContext<IListVehiclesProvider>(
  {} as IListVehiclesProvider
);

export const ListVehiclesProvider = ({ children }: IFormProps) => {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [vehicleById, setVehicleById] = useState(null);
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

  const listVehicles = () => {
    api
      .get("/Veiculo")
      .then((response) => {
        setVehiclesList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listVehicleById = (id: number) => {
    api
      .get(`/Veiculo/${id}`)
      .then((response) => {
        setVehicleById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ListVehiclesContext.Provider
      value={{
        listVehicles,
        vehiclesList,
        vehicleById,
        listVehicleById,
        page,
        rowsPerPage,
        tableHeight,
        tableType,
        handleChangePage,
        handleChangeRowsPerPage,
        setTableType,
      }}
    >
      {children}
    </ListVehiclesContext.Provider>
  );
};
