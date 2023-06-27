"use client";
import { styledTable } from "@/styles/Table/TableRow/theme";
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
  Container,
} from "@mui/material";
import ListDriversTable from "./ListDriversTable";
import { useContext, useEffect } from "react";
import { ListDriversContext } from "@/context/Drivers/ListDrivers/ListDriversProvider";
import ListDriverByIdTable from "./ListDriversById";

const ListOfDrivers = () => {
  const {
    listDrivers,
    driversList,
    tableType,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(ListDriversContext);

  useEffect(() => {
    listDrivers();
  });

  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
      // setTableHeight(suggestedTableHeight);
    }
  }, [driversList]);

  

  return (
    <Container>
      <h1>Lista de Condutores</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer sx={{ color: "blue" }} id="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Número da Habilitação</TableCell>
                <TableCell>Categoria da Habilitação</TableCell>
                <TableCell>Vencimento da Habilitação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!tableType ? <ListDriverByIdTable /> : <ListDriversTable />}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50]}
                  count={driversList.length}
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
    </Container>
  );
};
export default ListOfDrivers;