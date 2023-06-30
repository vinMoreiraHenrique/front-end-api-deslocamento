import { ICreateVehicle } from "@/context/Vehicles/CreateVehicle/CreateVehicle.interfaces";
import { ListVehiclesContext } from "@/context/Vehicles/ListVehicles/ListVehiclesProvider";
import { api } from "@/services/api";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListVehiclesTable = () => {
  const { vehiclesList, page, rowsPerPage } = useContext(ListVehiclesContext);

  const handleDelete = (id: number | undefined) => {
    api
      .delete(`/Veiculo/${id}`, { data: { id } })
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return vehiclesList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    ?.map((vehicle: ICreateVehicle, index: number) => {
      return (
        <TableRow
          sx={{ backgroundColor: "white", color: "blue" }}
          className={
            vehiclesList?.length !== 0 ? "animate-fade-in-to-right" : ""
          }
          key={vehicle.id}
        >
          <TableCell>{vehicle.id}</TableCell>
          <TableCell>{vehicle.placa}</TableCell>
          <TableCell>{vehicle.marcaModelo}</TableCell>
          <TableCell>{vehicle.anoFabricacao}</TableCell>
          <TableCell>{vehicle.kmAtual}</TableCell>
          <TableCell>
            <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
          </TableCell>
        </TableRow>
      );
    });
};

export default ListVehiclesTable;
