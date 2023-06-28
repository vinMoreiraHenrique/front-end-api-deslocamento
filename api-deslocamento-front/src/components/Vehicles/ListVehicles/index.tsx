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
  Container,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { styledTable } from "../../../styles/Table/TableRow/theme";
import { ListVehiclesContext } from "@/context/Vehicles/ListVehicles/ListVehiclesProvider";
import ListVehicleByIdTable from "./ListVehicleById";
import ListVehiclesTable from "./ListVehiclesTable";

const ListOfVehicles = () => {
  const {
    listVehicles,
    vehiclesList,
    tableType,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(ListVehiclesContext);

  useEffect(() => {
    listVehicles();
  });

  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
    }
  }, [vehiclesList]);

  return (
    <Container>
      <h1>Lista de Veículos</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer sx={{ color: "blue" }} id="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Placa</TableCell>
                <TableCell>Marca e Modelo</TableCell>
                <TableCell>Ano de Fabricação</TableCell>
                <TableCell>Km Atual</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!tableType ? <ListVehicleByIdTable /> : <ListVehiclesTable />}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  count={vehiclesList.length}
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

export default ListOfVehicles;
