import { ICreateUser } from "@/context/Users/CreateUser/CreateUser.interfaces";
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";
import { api } from "@/services/api";
import { styledTable } from "@/styles/Table/StyledTable/theme";
import { TableCell, TableRow, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/Fa";

const ListUsersTable = () => {
  const { usersList, page, rowsPerPage } = useContext(ListUsersContext);

  const handleDelete = (id: number | undefined) => {
    api
      .delete(`/Cliente/${id}`, { data: { id } })
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return usersList
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    ?.map((user: ICreateUser, index: number) => {
      return (
        
        <TableRow
          sx={{
            transition: "transform 0.2s",
            ":hover": {
              backgroundColor: "#707070", // Change the background color to red on hover
              color: "white",
              transform: "scale(1.7)",
              // zIndex: 20,
              borderRadius: "10px",
               // Change the text color to white on hover
            },
          }}
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
          <TableCell>
            <button onClick={() => handleDelete(user.id)}>
              <FaTrashAlt className="hover:text-red-500" />
            </button>
          </TableCell>
        </TableRow>
      );
    });
};
export default ListUsersTable;
