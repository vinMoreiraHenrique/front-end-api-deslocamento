
import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListUsersTable = () => {
  const { usersList, page, rowsPerPage } = useContext(ListUsersContext);
  return usersList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    ?.map((user: ICreateUser, index: number) => {
      return (
        <TableRow
          sx={{ backgroundColor: "white", color: "blue" }}
          className={usersList?.length !== 0 ? "animate-fade-in-to-right" : ""}
          key={user.id}
        >
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.nome}</TableCell>
          <TableCell>{user.numeroDocumento}</TableCell>
          <TableCell>{user.tipoDocumento}</TableCell>
          <TableCell>{user.cidade}</TableCell>
          <TableCell>{user.bairro}</TableCell>
          <TableCell>{user.uf}</TableCell>
        </TableRow>
      );
    });
};
export default ListUsersTable;