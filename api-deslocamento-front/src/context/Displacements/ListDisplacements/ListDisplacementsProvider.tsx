import { createContext, useState } from "react";
import { IListDisplacementsProvider } from "./ListDisplacements.interfaces";
import { IFormProps } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";

export const ListDisplacementsContext = createContext<IListDisplacementsProvider>(
  {} as IListDisplacementsProvider
);

const ListDisplacementsProvider = ({ children }: IFormProps) => {
  const [displacementsList, setDisplacementsList] = useState([]);
  const [displacementById, setDisplacementsById] = useState(null);
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

  const listDisplacements = () => {
    api
      .get("/Deslocamento")
      .then((response) => {
        setDisplacementsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const listDisplacementById = (id: number) => {
    api
      .get(`/Deslocamento/${id}`)
      .then((response) => {
        setDisplacementsById(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ListDisplacementsContext.Provider
      value={{
        listDisplacements,
        listDisplacementById,
        displacementsList,
        displacementById,
        page,
        rowsPerPage,
        tableHeight,
        tableType,
        setTableType,
        handleChangePage,
        handleChangeRowsPerPage,
      }}
    >
      {children}
    </ListDisplacementsContext.Provider>
  );
};

export default ListDisplacementsProvider;
