import { IListWeatherForecast } from "@/context/WeatherForecast/WeatherForecast.interfaces";
import { ListWeatherForecastContext } from "@/context/WeatherForecast/WeatherForecastProvider";
import { api } from "@/services/api";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListWeatherForecastTable = () => {
  const { weatherForecastList, page, rowsPerPage } = useContext(
    ListWeatherForecastContext
  );

  return weatherForecastList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((weatherForecast: IListWeatherForecast, index: number) => {
      return (
        <TableRow
          sx={{
            ":hover": {
              backgroundColor: "#707070", // Change the background color to red on hover
              color: "white", // Change the text color to white on hover
            },
          }}
          className={
            weatherForecastList?.length !== 0 ? "animate-fade-in-to-right" : ""
          }
          key={index}
        >
          <TableCell align="center">{weatherForecast.date}</TableCell>
          <TableCell align="center">{weatherForecast.temperatureC}</TableCell>
          <TableCell align="center">{weatherForecast.temperatureF}</TableCell>
          <TableCell align="center">{weatherForecast.summary}</TableCell>
        </TableRow>
      );
    });
};

export default ListWeatherForecastTable;
