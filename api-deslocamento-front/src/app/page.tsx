"use client";
import ListOfDrivers from "@/components/Drivers/ListDrivers";
import EditUser from "@/components/Users/EditUser";
import CreateDriverForm from "@/components/Drivers/CreateDriver";
import EditDriver from "@/components/Drivers/EditDriver";
import RootProvider from "@/context/RootProvider";
import CreateVehicleForm from "@/components/Vehicles/CreateVehicle";
import ListOfVehicles from "@/components/Vehicles/ListVehicles";
import EditVehicle from "@/components/Vehicles/EditVehicle";
import CreateUserForm from "@/components/Users/CreateUser";
import ListOfUsers from "@/components/Users/ListUsers";
import CreateDisplacementForm from "@/components/Displacement/CreateDisplacement";
import ListOfDisplacements from "@/components/Displacement/ListDisplacements";
import EditDisplacement from "@/components/Displacement/EditDisplacement";
import ListOfWeatherForecast from "@/components/WeatherForecast/ListWeatherForecast";
import { Button, ThemeProvider } from "@mui/material";
import { styledTable } from "@/styles/Table/StyledTable/theme";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <RootProvider>
          <ThemeProvider theme={styledTable}>
            <Button
              variant="contained"
              color="primary"
              href="/User"
            >
              Usuários
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/Driver"
            >
              Condutores
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/Vehicle"
            >
              Veículos
            </Button>

            <Button
              variant="contained"
              color="primary"
              href="/WeatherForecast"
            >
              Previsão do Tempo
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/Displacement"
            >
              Deslocamento
            </Button>
          </ThemeProvider>
        </RootProvider>
      </div>
    </main>
  );
}
