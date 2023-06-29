"use client"
import { ListDisplacementsContext } from "@/context/Displacements/ListDisplacements/ListDisplacementsProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { handleDelete } from "../ListDisplacementsTable";

const ListDisplacementByIdTable = () => {
    const { displacementById } = useContext(ListDisplacementsContext);
    const difference = displacementById.kmFinal - displacementById.kmInicial;
    return (
        <TableRow
            sx={{ backgroundColor: "white", color: "blue" }}
            className={displacementById !== null ? "animate-fade-in-to-right" : ""}
        >
            <TableCell>{displacementById?.id}</TableCell>
            <TableCell>{displacementById?.inicioDeslocamento}</TableCell>
            <TableCell>{displacementById?.kmInicial}</TableCell>
            <TableCell>{displacementById?.kmFinal === null ? displacementById?.kmFinal : "Em andamento"}</TableCell>
            <TableCell>{displacementById.kmFinal && displacementById.kmInicial !== null ? difference : "-"}</TableCell>
            <TableCell>{displacementById?.motivo}</TableCell>
            <TableCell>{displacementById?.observacao}</TableCell>
            <TableCell>{displacementById?.idCondutor}</TableCell>
            <TableCell>{displacementById?.idVeiculo}</TableCell>
            <TableCell>{displacementById?.idCliente}</TableCell>
            <button onClick={()=> handleDelete(displacementById?.id)}>Delete</button>
        </TableRow>
    );
}

export default ListDisplacementByIdTable;