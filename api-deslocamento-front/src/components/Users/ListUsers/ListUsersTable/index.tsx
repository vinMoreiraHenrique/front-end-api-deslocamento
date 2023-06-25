
import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";
import { api } from "@/services/api";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListUsersTable = () => {
  const { usersList, page, rowsPerPage } = useContext(ListUsersContext);

  const handleDelete = (id: number) => {
    api // chama a API para deletar o usuário pelo id
      .delete(`/Cliente/${id}`, {data: {id}})
      .then((response) => {
        console.log(response.data); // loga a resposta da API no console
      })
      .catch((error) => {
        console.error(error); // loga o erro no console, se houver
      });
  };

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
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </TableRow>
      );
    });
};
export default ListUsersTable;