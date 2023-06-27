"use client";
import ListOfDrivers from "@/components/Drivers/ListDrivers";
import EditUser from "@/components/Users/EditUser";
import ListOfUsers from "@/components/Users/ListUsers";
import CreateDriverProvider from "@/context/Drivers/CreateDriver/CreateDriverProvider";
import ListDriversProvider from "@/context/Drivers/ListDrivers/ListDriversProvider";
import CreateUserProvider from "@/context/Users/CreateUser/CreateUserProvider";
import EditUserProvider from "@/context/Users/EditUser/EditUserProvider";
import ListUsersProvider from "@/context/Users/ListUsers/ListUsersProvider";
import CreateUserForm from "@/components/Users/CreateUser";
import CreateDriverForm from "@/components/Drivers/CreateDriver";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CreateUserProvider>
          <CreateDriverProvider>
            <ListDriversProvider>
              <CreateDriverForm />
              <ListOfDrivers />
            </ListDriversProvider>
          </CreateDriverProvider>
          <EditUserProvider>
            {/* <CreateUserForm /> */}
            <EditUser />
          </EditUserProvider>
          <ListUsersProvider>
            {/* <ListOfUsers /> */}
          </ListUsersProvider>
        </CreateUserProvider>
      </div>
    </main>
  );
}
