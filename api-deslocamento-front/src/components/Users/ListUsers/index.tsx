"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  ThemeProvider,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { styledTable } from "./theme";
import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";

const ListOfUsers = () => {
  const { listUsers, usersList, listUserById } = useContext(ListUsersContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableHeight, setTableHeight] = useState("auto");

  useEffect(() => {
    listUsers();
    listUserById(92);
  });

  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
      setTableHeight(`${suggestedTableHeight}px`);
    }
  }, [usersList]);

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

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer
          sx={{ color: "blue", maxHeight: tableHeight }}
          id="table-container"
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Número do Documento</TableCell>
                <TableCell>Tipo de Documento</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Bairro</TableCell>
                <TableCell>UF</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((user: ICreateUser, index: number) => {
                  return (
                    <TableRow
                      sx={{ backgroundColor: "white", color: "blue" }}
                      className={
                        usersList?.length !== 0
                          ? "animate-fade-in-to-right"
                          : ""
                      }
                      key={user.id}
                    >
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.nome}</TableCell>
                      <TableCell>{user.numeroDocumento}</TableCell>
                      <TableCell>{user.tipoDocumento}</TableCell>
                      <TableCell>{user.cidade}</TableCell>
                      <TableCell>{user.bairro}</TableCell>
                      <TableCell>{user.uf}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50]}
                  count={usersList.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
};

export default ListOfUsers;
