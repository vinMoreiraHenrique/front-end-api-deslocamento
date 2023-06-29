import { ICreateDisplacement } from "../CreateDisplacement/CreateDisplacement.interfaces";

export interface IListDisplacement {
  id?: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

export interface IListDisplacementsProvider {
  listDisplacements: () => void;
  displacementsList: IListDisplacement[];
  listDisplacementById: (id: number) => void;
  displacementById: IListDisplacement;
  page: number;
  rowsPerPage: number;
  tableHeight: string;
  tableType: boolean;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setTableType: (type: boolean) => void;
}
