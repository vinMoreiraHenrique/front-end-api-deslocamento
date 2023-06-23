"use client"
import { ListUsersContext } from "@/context/Users/ListUsers/ListUsersProvider";
import { TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const ListUserByIdTable = () => {
  const {userById} = useContext(ListUsersContext);
  return (
    <TableRow
      sx={{ backgroundColor: "white", color: "blue" }}
      className={userById !== null ? "animate-fade-in-to-right" : ""}
    >
      <TableCell>{userById?.id}</TableCell>
      <TableCell>{userById?.nome}</TableCell>
      <TableCell>{userById?.numeroDocumento}</TableCell>
      <TableCell>{userById?.tipoDocumento}</TableCell>
      <TableCell>{userById?.cidade}</TableCell>
      <TableCell>{userById?.bairro}</TableCell>
      <TableCell>{userById?.uf}</TableCell>
    </TableRow>
  );
};

export default ListUserByIdTable;
