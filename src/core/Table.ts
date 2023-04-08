

export class Table{

    private _word : String = "";
    private _letters : string[] = []
    private _chances = 0;
    private _isOver = false;
    private _isWon : boolean | null  = null;

    constructor(){}

    public guess(letter : string){

        if(this._isOver) throw new Error("Game is over")

        if(letter.length > 1 || !letter) throw new Error("invalid string must be a only character")

        if(this._letters.find(l => l === letter)){

            throw new Error("letter already exists")

        } else {

            this._letters.push(letter);

            if(!this._word.split('').find(l => l === letter)) this._chances++;

            this.checkStatus()

        }
        
    }

    private get_wordStatus(){

        let _word = "";

        for(let i = 0; i < this._word.length; i++){

            if(!i) _word += this._word[0];

            else if(i === this._word.length - 1) _word += this._word[i]

            else if(this._letters.find(l => l === this._word[i])){

                _word += this._word[i];

            } 

            else _word += "_"

        }

        return _word;

    }

    public try_word(_word : string){

        if(_word === this._word) {
            
            this._isOver = true;
            
            this._isWon = true;
        
        }

        else {

            this._isOver = true;
            
            this._isWon = false;
        

        }

    }

    private checkStatus(){

        if(this._chances === 5) this._isOver = true;

        let _isWon = true;

        for(let letter of this._word){

            if(!this._letters.find(l => l === letter)) _isWon = false;

        }

        this._isWon = _isWon;

    }

    
    public get isWon() : boolean | null {

        return this._isWon;
    }

    public start(word : string){

        this._word = word;
        this._chances = 0;
        this._letters = [];
        this._isOver = false;
        this._isWon = null;

    }
    

}