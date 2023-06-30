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
import { styledTable } from "../../../styles/Table/StyledTable/theme";
import { ListWeatherForecastContext } from "@/context/WeatherForecast/WeatherForecastProvider";
import ListWeatherForecastTable from "./ListWeatherForecastTable";

const ListOfWeatherForecast = () => {
  const {
    listWeatherForecast,
    weatherForecastList,
    tableType,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useContext(ListWeatherForecastContext);

  useEffect(() => {
    listWeatherForecast();
  });

  useEffect(() => {
    const tableContainer = document.getElementById("table-container");
    if (tableContainer) {
      const tableRows = tableContainer.querySelectorAll("tbody tr");
      const suggestedTableHeight = (tableRows.length + 1) * 50;
    }
  });

  return (
    <Container>
      <h1>Lista de Previsão de Temperatura</h1>
      <ThemeProvider theme={styledTable}>
        <TableContainer id="table-container">
          <Table>
            <TableHead sx={{ width: "auto" }}>
              <TableRow>
                <TableCell align="center">Data e Hora</TableCell>
                <TableCell align="center">Temperatura °C</TableCell>
                <TableCell align="center">Temperatura °F</TableCell>
                <TableCell align="center">Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ListWeatherForecastTable />
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  count={weatherForecastList.length}
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

export default ListOfWeatherForecast;
