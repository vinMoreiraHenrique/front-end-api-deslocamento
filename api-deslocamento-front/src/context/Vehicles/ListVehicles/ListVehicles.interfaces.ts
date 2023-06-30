import { ICreateVehicle } from "../CreateVehicle/CreateVehicle.interfaces";



export interface IListVehiclesProvider {
    listVehicles: () => void;
    vehiclesList: ICreateVehicle[];
    listVehicleById: (id: number) => void;
    vehicleById: ICreateVehicle | null;
    page: number;
    rowsPerPage: number;
    tableHeight: string;
    tableType: boolean;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setTableType: (type: boolean) => void;
}