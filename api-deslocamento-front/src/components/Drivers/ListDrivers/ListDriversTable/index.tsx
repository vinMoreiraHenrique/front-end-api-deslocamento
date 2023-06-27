import { ICreateDriver } from "@/context/Drivers/CreateDriver/CreateDriver.interfaces";
import { ListDriversContext } from "@/context/Drivers/ListDrivers/ListDriversProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListDriversTable = () => {
  const { driversList, page, rowsPerPage } = useContext(ListDriversContext);

  return driversList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    ?.map((driver: ICreateDriver, index: number) => {
      return (
        <TableRow
          sx={{ backgroundColor: "white", color: "blue" }}
          className={
            driversList?.length !== 0 ? "animate-fade-in-to-right" : ""
          }
          key={driver.id}
        >
          <TableCell>{driver.id}</TableCell>
          <TableCell>{driver.nome}</TableCell>
          <TableCell>{driver.numeroHabilitacao}</TableCell>
          <TableCell>{driver.catergoriaHabilitacao}</TableCell>
          <TableCell>{driver.vencimentoHabilitacao}</TableCell>
          {/* <button onClick={() => handleDelete(driver.id)}>Delete</button> */}
        </TableRow>
      );
    });
};

export default ListDriversTable;
