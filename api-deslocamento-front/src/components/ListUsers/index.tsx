"use client"
import { RegisterContext } from "@/context/RegisterUser/RegisterProvider";
import { api } from "@/services/api";
import { ListItem, ListItemText } from "@mui/material";
import { useContext, useEffect, useState } from "react";

const ListOfUsers = () => {
  const { listUsers, usersList } = useContext(RegisterContext);
  
useEffect(() => {
    listUsers()
})
  
  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul className="text-color-black gap-4">
        {usersList.map((user: any) => {
          return (
            <ListItem sx={{ backgroundColor: "black", color: "white"}} key={user.id} className="text-color-black gap-1">
              <ListItemText >{user.id}</ListItemText>
              <ListItemText>{user.logradouro}</ListItemText>
              <ListItemText>{user.numeroDocumento}</ListItemText>
              <ListItemText>{user.logradouro}</ListItemText>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfUsers;
