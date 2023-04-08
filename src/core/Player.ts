import { Table } from "./table";

export class Player{

    _name = "";
    _score = 0;
    _isHandler : boolean;
    _table : Table;

    constructor(name : string, isHandler : boolean, table : Table){

        this._name = name;
        this._isHandler = isHandler;
        this._table = table;

    }


}