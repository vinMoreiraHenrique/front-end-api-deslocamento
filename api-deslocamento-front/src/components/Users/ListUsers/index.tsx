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
import { useContext, useEffect } from "react";
import { styledTable } from "./theme";
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";
import ListUsersTable from "./ListUsersTable";
import ListUserByIdTable from "./ListUserByIdTable";

const ListOfUsers = () => {
  const {
    listUsers,
    usersList,
    listUserById,
    tableType,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    setTableType,
  } = useContext(ListUsersContext);

  useEffect(() => {
    listUsers();
  });
  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
      // setTableHeight(`${suggestedTableHeight}px`);
    }
  }, [usersList]);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer sx={{ color: "blue" }} id="table-container">
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
              {!tableType ? <ListUserByIdTable /> : <ListUsersTable />}
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
