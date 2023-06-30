"use client"
import { ListDriversContext } from "@/context/Drivers/ListDrivers/ListDriversProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListDriverByIdTable = () => {
  const {driverById} = useContext(ListDriversContext);
  return (
    <TableRow
      sx={{ backgroundColor: "white", color: "blue" }}
      className={driverById !== null ? "animate-fade-in-to-right" : ""}
    >
      <TableCell>{driverById?.id}</TableCell>
      <TableCell>{driverById?.nome}</TableCell>
      <TableCell>{driverById?.numeroHabilitacao}</TableCell>
      <TableCell>{driverById?.catergoriaHabilitacao}</TableCell>
      <TableCell>{driverById?.vencimentoHabilitacao}</TableCell>
    </TableRow>
  );
};

export default ListDriverByIdTable;