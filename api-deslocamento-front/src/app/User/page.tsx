"use client";
import CreateUserForm from "@/components/Users/CreateUser";
import EditUser from "@/components/Users/EditUser";
import ListOfUsers from "@/components/Users/ListUsers";
import RootProvider from "@/context/RootProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Box, Button, ButtonGroup, ThemeProvider } from "@mui/material";
import { useState } from "react";

const UserPage = () => {
  const [formStatus, setFormStatus] = useState("createUser");
  return (
    <main className="flex min-h-screen flex-col items-center pl-5 pr-5 pt-5 vw-full sm:w-screen">
      <div className="z-10 w-full max-w-full items-center justify-between text-sm flex flex-col md:flex-row">
        <RootProvider>
          <ThemeProvider theme={inputTheme}>
            <Box className="">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "white",
                    },
                  }}
                  onClick={() => setFormStatus("editById")}
                >
                  Editar por Id
                </Button>
                <Button
                  sx={{
                    color: "black",
                    ":hover": {
                      color: "white",
                    },
                  }}
                  onClick={() => setFormStatus("createUser")}
                >
                  Criar Usuário
                </Button>
              </ButtonGroup>
              {formStatus === "createUser" && <CreateUserForm />}
              {formStatus === "editById" && <EditUser />}
            </Box>
            <ListOfUsers />
          </ThemeProvider>
        </RootProvider>
      </div>
    </main>
  );
};

export default UserPage;
