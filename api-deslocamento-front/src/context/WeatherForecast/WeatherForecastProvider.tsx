import { createContext, useState } from "react";
import {
  IListWeatherForecast,
  IListWeatherForecastProvider,
} from "./WeatherForecast.interfaces";
import { IFormProps } from "../Users/CreateUser/CreateUser.interfaces";
import { api } from "@/services/api";

export const ListWeatherForecastContext =
  createContext<IListWeatherForecastProvider>(
    {} as IListWeatherForecastProvider
  );

const ListWeatherForecastProvider = ({ children }: IFormProps) => {
  const [weatherForecastList, setWeatherForecastList] = useState([]);
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

  const listWeatherForecast = () => {
    api
      .get("/WeatherForecast")
      .then((response) => {
        setWeatherForecastList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ListWeatherForecastContext.Provider
      value={{
        listWeatherForecast,
        weatherForecastList,
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
    </ListWeatherForecastContext.Provider>
  );
};

export default ListWeatherForecastProvider;
