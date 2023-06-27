import { ICreateDriver } from "../CreateDriver/CreateDriver.interfaces";

export interface IListDriverProvider {
    listDrivers: () => void;
    driversList: ICreateDriver[];
    listDriverById: (id: number) => void;
    driverById: ICreateDriver | null;
    page: number;
    rowsPerPage: number;
    tableHeight: string;
    tableType: boolean;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setTableType: (type: boolean) => void;
}