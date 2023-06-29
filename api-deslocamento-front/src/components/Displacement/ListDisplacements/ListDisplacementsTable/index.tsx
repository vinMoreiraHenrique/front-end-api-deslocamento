import { IListDisplacement } from "@/context/Displacements/ListDisplacements/ListDisplacements.interfaces";
import { ListDisplacementsContext } from "@/context/Displacements/ListDisplacements/ListDisplacementsProvider";
import { api } from "@/services/api";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

export const handleDelete = (id: number | undefined) => {
  api
    .delete(`/Deslocamento/${id}`, { data: { id } })
    .then((response) => {
      response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
const ListDisplacementsTable = () => {
  const { displacementsList, page, rowsPerPage } = useContext(
    ListDisplacementsContext
  );
  

  return displacementsList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((displacement: IListDisplacement, index: number) => {
        const difference = displacement?.kmFinal - displacement?.kmInicial;
      return (
        <TableRow
          sx={{ backgroundColor: "white", color: "blue" }}
          className={
            displacementsList?.length !== 0 ? "animate-fade-in-to-right" : ""
          }
          key={displacement.id}
        >
          <TableCell>{displacement.id}</TableCell>
          <TableCell>{displacement.inicioDeslocamento}</TableCell>
          <TableCell>{displacement.kmInicial}</TableCell>
          <TableCell>
            {displacement.kmFinal !== null
              ? displacement.kmFinal
              : "Em andamento"}
          </TableCell>
          <TableCell>{displacement.kmFinal && displacement.kmInicial !== null ? difference : "-"}</TableCell>
          <TableCell>{displacement.motivo}</TableCell>
          <TableCell>{displacement.observacao}</TableCell>
          <TableCell>{displacement.idCondutor}</TableCell>
          <TableCell>{displacement.idVeiculo}</TableCell>
          <TableCell>{displacement.idCliente}</TableCell>
          <button onClick={() => handleDelete(displacement.id)}>Delete</button>
        </TableRow>
      );
    });
};

export default ListDisplacementsTable;
