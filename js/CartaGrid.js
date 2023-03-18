import CartaBase from "./CartaBase.js";
export default class CartaGrid extends CartaBase{
    constructor(data){
        let {value, tipo }= data ;
        super(data);
        this.textValor= new Phaser.GameObjects.BitmapText(this.scene,0,-100,'pressstart',value);
        this.add(this.textValor);
        this.value=value;
        this.cartatipo=tipo;

    }
    set value(newValue){
        this._value=newValue;
        this.textValor.text= this._value;
        this.textValor.x=-44-this.textValor.width/2;
        this.textValor.tint=0;
    }
    get value(){
        return this._value;
    }
}