"use client"
import CreateUserForm from "@/components/Users/CreateUser"
import ListOfUsers from "@/components/Users/ListUsers"
import RootProvider from "@/context/RootProvider"

const UserPage = () => {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <RootProvider>
          <CreateUserForm />
          <ListOfUsers />
        </RootProvider>
      </div>
    </main>
    )
}

export default UserPage