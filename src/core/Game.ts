import { Table } from "./table";
import { Player } from "./player"

export class Game{

    private _playerOne : Player | null = null;
    private _playerTwo : Player | null = null;
    private _table : Table = new Table();
    private _element : HTMLElement;

    constructor(id : string){

        const element = document.getElementById(id);

        if(element) {
            this._element = element; 
            this.generateinitGame();
        }

        else throw new Error("element doesnt exists")
       
    }


    private generateinitGame(){

        this._element.innerHTML='<h1>Bienvenido al juego del Ahorcado</h1>'
        this.getNamePlayer()

    }

    private getNamePlayer(){

        const newElement = document.createElement("div");
        newElement.innerHTML= `<div> <label> Nombre jugador 1 </label>
                                <input type='text' id='namePlayer'>
                                <button id='button'>Crear</button>
                                </div>`
        this._element.append(newElement);

        document.getElementById("button")?.addEventListener("click", () => this.createPlayerOne(newElement))

    }

    private createPlayerOne(element : HTMLDivElement){

        const value = document.querySelector('input')?.value!;

        this._playerOne = new Player(value, true, this._table);

        element.innerHTML =  `<div> <label> Nombre jugador 2 </label>
                            <input type='text' id='namePlayer'>
                            <button id='button'>Crear</button>
                            </div>`

        document.getElementById("button")?.addEventListener("click", this.createPlayerTwo)

    }

    private createPlayerTwo(){

        const value = document.querySelector('input')?.value!;

        this._playerTwo = new Player(value, true, this._table)

        console.log("asd")

    }

    public get playerOne(){
        return this._playerOne;
    }

    public get playerTwo(){
        return this._playerTwo;
    }

    public get table(){
        return this._table;
    }

}