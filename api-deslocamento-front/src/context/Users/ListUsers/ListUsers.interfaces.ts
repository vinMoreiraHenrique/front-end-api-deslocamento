import { ICreateUser } from "../CreateUser/CreateUser.interfaces";



export interface IListUserProvider {
    listUsers: () => void;
    usersList: ICreateUser[];
    listUserById: (id: number) => void;
    userById: ICreateUser | null;
}



