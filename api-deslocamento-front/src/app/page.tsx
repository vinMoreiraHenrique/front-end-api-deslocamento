"use client"
import UserForm from "@/components/Users/CreateUser";
import EditUser from "@/components/Users/EditUser";
import ListOfUsers from "@/components/Users/ListUsers";
import CreateUserProvider from "@/context/Users/CreateUser/CreateUserProvider";
import EditUserProvider from "@/context/Users/EditUser/EditUserProvider";
import ListUsersProvider from "@/context/Users/ListUsers/ListUsersProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CreateUserProvider>
          <EditUserProvider>
          <UserForm />
          <EditUser/>
          </EditUserProvider>
          <ListUsersProvider>
            <ListOfUsers />
          </ListUsersProvider>
        </CreateUserProvider>
      </div>
    </main>
  );
}
