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
import ListDisplacementsTable from "./ListDisplacementsTable";
import { useContext, useEffect } from "react";
import { ListDisplacementsContext } from "@/context/Displacements/ListDisplacements/ListDisplacementsProvider";
import ListDisplacementByIdTable from "./ListDisplacementById";

const ListOfDisplacements = () => {
  const {
    listDisplacements,
    displacementsList,
    tableType,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(ListDisplacementsContext);

  useEffect(() => {
    listDisplacements();
  });

  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
      // setTableHeight(suggestedTableHeight);
    }
  });

  return (
    <Container>
      <h1>Lista de Deslocamentos</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer sx={{ color: "blue" }} id="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Início do Deslocamento</TableCell>
                <TableCell>KM Inicial</TableCell>
                <TableCell>KM Final</TableCell>
                <TableCell>Duração em KM</TableCell>
                <TableCell>Motivo</TableCell>
                <TableCell>Observação</TableCell>
                <TableCell>ID do Condutor</TableCell>
                <TableCell>ID do Veículo</TableCell>
                <TableCell>ID do Cliente</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!tableType ? (
                <ListDisplacementByIdTable />
              ) : (
                <ListDisplacementsTable />
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  count={displacementsList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
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

export default ListOfDisplacements;
