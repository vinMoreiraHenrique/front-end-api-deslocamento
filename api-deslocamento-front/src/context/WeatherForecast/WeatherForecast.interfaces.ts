export interface IListWeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export interface IListWeatherForecastProvider {
    listWeatherForecast: ()=> void;
    weatherForecastList: IListWeatherForecast[];
    page: number;
    rowsPerPage: number;
    tableHeight: string;
    tableType: boolean;
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setTableType: (type: boolean) => void;
}