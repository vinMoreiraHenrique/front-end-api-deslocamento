"use client"
import { ListVehiclesContext } from "@/context/Vehicles/ListVehicles/ListVehiclesProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListVehicleByIdTable = () => {
    const {vehicleById} = useContext(ListVehiclesContext);
    return (
        <TableRow
            sx={{ backgroundColor: "white", color: "blue" }}
            className={vehicleById !== null ? "animate-fade-in-to-right" : ""}
        >
            <TableCell>{vehicleById?.id}</TableCell>
            <TableCell>{vehicleById?.placa}</TableCell>
            <TableCell>{vehicleById?.marcaModelo}</TableCell>
            <TableCell>{vehicleById?.anoFabricacao}</TableCell>
            <TableCell>{vehicleById?.kmAtual}</TableCell>
        </TableRow>
    );
}

export default ListVehicleByIdTable;