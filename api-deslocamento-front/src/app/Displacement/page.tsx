"use client";
import CreateDisplacementForm from "@/components/Displacement/CreateDisplacement";
import EditDisplacement from "@/components/Displacement/EditDisplacement";
import ListOfDisplacements from "@/components/Displacement/ListDisplacements";
import RootProvider from "@/context/RootProvider";
import { inputTheme } from "@/styles/Table/InputTheme/theme";
import { Box, Button, ButtonGroup, ThemeProvider } from "@mui/material";
import { useState } from "react";

const DisplacementPage = () => {
  const [formStatus, setFormStatus] = useState("createDisplacement");
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
                  onClick={() => setFormStatus("createDisplacement")}
                >
                  Criar Deslocamento
                </Button>
              </ButtonGroup>
              {formStatus === "createDisplacement" && <CreateDisplacementForm />}
              {formStatus === "editById" && <EditDisplacement />}
            </Box>
            <ListOfDisplacements />
          </ThemeProvider>
        </RootProvider>
      </div>
    </main>
  );
};

export default DisplacementPage;
