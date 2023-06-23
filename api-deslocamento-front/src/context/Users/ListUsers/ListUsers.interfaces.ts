import { ICreateUser } from "../CreateUser/CreateUser.interfaces";



export interface IListUserProvider {
    listUsers: () => void;
    usersList: ICreateUser[];
    listUserById: (id: number) => void;
    userById: ICreateUser | null;
    page: number;
    rowsPerPage: number;
    tableHeight: string;
    tableType: boolean;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setTableType: (type: boolean) => void;
}



