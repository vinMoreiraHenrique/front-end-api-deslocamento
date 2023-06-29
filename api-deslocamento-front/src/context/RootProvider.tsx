import React, { ReactNode } from "react";
import CreateDriverProvider from "./Drivers/CreateDriver/CreateDriverProvider";
import EditDriverProvider from "./Drivers/EditDriver/EditDriverProvider";
import ListDriversProvider from "./Drivers/ListDrivers/ListDriversProvider";
import CreateUserProvider from "./Users/CreateUser/CreateUserProvider";
import EditUserProvider from "./Users/EditUser/EditUserProvider";
import ListUsersProvider from "./Users/ListUsers/ListUsersProvider";
import CreateVehicleProvider from "./Vehicles/CreateVehicle/CreateVehicleProvider";
import { ListVehiclesProvider } from "./Vehicles/ListVehicles/ListVehiclesProvider";
import EditvehicleProvider from "./Vehicles/EditVehicle/EditvehicleProvider";
import ListDisplacementsProvider from "./Displacements/ListDisplacements/ListDisplacementsProvider";
import CreateDisplacementProvider from "./Displacements/CreateDisplacement/CreateDisplacementProvider";
import EditDisplacementProvider from "./Displacements/EditDisplacement/EditDisplacementProvider";

interface RootProviderProps {
  children: ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <CreateUserProvider>
      <CreateDriverProvider>
        <ListDriversProvider>
          <EditDriverProvider>
            <EditUserProvider>
              <ListUsersProvider>
                <CreateVehicleProvider>
                  <EditvehicleProvider>
                    <ListVehiclesProvider>
                      <ListDisplacementsProvider>
                        <CreateDisplacementProvider>
                          <EditDisplacementProvider>
                          {children}
                          </ EditDisplacementProvider>
                        </CreateDisplacementProvider>
                      </ListDisplacementsProvider>
                    </ListVehiclesProvider>
                  </EditvehicleProvider>
                </CreateVehicleProvider>
              </ListUsersProvider>
            </EditUserProvider>
          </EditDriverProvider>
        </ListDriversProvider>
      </CreateDriverProvider>
    </CreateUserProvider>
  );
};

export default RootProvider;
