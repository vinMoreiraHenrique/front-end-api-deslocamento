import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
  } from "react-hook-form";

export interface IEditDisplacement {
    id: number;
    kmFinal: number;
    fimDeslocamento: string;
    observacao: string;
}

export interface IEditDisplacementProvider {
    displacementId: string;
    editDisplacementById: (data: IEditDisplacement) => void
    setDisplacementId: any;
    register: UseFormRegister<IEditDisplacement>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    
}