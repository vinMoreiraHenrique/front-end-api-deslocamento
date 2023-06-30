"use client"
import CreateDriverForm from "@/components/Drivers/CreateDriver"
import EditDriver from "@/components/Drivers/EditDriver"
import ListOfDrivers from "@/components/Drivers/ListDrivers"
import RootProvider from "@/context/RootProvider"
import { inputTheme } from "@/styles/Table/InputTheme/theme"
import { ThemeProvider } from "@emotion/react"
import { Box, Button, ButtonGroup } from "@mui/material"
import { useState } from "react"

const DriverPage = () => {
  const [formStatus, setFormStatus] = useState("createDriver");
    return(
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
                  onClick={() => setFormStatus("createDriver")}
                >
                  Criar Condutor
                </Button>
              </ButtonGroup>
              {formStatus === "createDriver" && <CreateDriverForm />}
              {formStatus === "editById" && <EditDriver />}
            </Box>
            <ListOfDrivers />
          </ThemeProvider>
        </RootProvider>
      </div>
    </main>
    )
}

export default DriverPage;