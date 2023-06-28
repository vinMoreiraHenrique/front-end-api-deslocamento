"use client";
import ListOfDrivers from "@/components/Drivers/ListDrivers";
import EditUser from "@/components/Users/EditUser";
import CreateDriverForm from "@/components/Drivers/CreateDriver";
import EditDriver from "@/components/Drivers/EditDriver";
import RootProvider from "@/context/RootProvider";
import CreateVehicleForm from "@/components/Vehicles/CreateVehicle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <RootProvider>
          <CreateVehicleForm />
          {/* <EditDriver /> */}
          {/* <CreateDriverForm /> */}
          {/* <ListOfDrivers /> */}
          {/* <CreateUserForm /> */}
          {/* <EditUser /> */}
          {/* <ListOfUsers /> */}
        </RootProvider>
      </div>
    </main>
  );
}
