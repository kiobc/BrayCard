import ArrastraCartas from "./ArrastraCartas.js";
export default class CartaJugador extends ArrastraCartas{
    constructor(data){
        let{salud}=data;
        super(data);
        this.textSalud= new Phaser.GameObjects.BitmapText(this.scene,0,-101,'pressstart',salud);
        this.textMaxSalud= new Phaser.GameObjects.BitmapText(this.scene,-20,-90,'pressstart',salud,12);
        this.textArmadura= new Phaser.GameObjects.BitmapText(this.scene,0,0,'pressstart');
        this.spriteArmadura=new Phaser.GameObjects.Sprite(this.scene,50,-80,'armor');
        this.textSalud.tint=0;
        this.textMaxSalud.tint=0;
        this.add([this.textSalud, this.textMaxSalud, this.textArmadura, this.spriteArmadura]);
        this.salud=salud;
        this.textMaxSalud=this.salud;
        this.armadura=0;

    }
    set salud (newHealth){
        this._salud=newHealth;
        this.textSalud.text=this._salud;
        this.textSalud.x=-44-this.textSalud.width/2;
    }
    get salud(){
        return this._salud;
    }
    set MaxSalud(newMaxSalud){
        this._maxSalud=newMaxSalud;
    }
    get maxHealth(){
        return this._maxSalud;
    }
    set armadura(newArmadura){
        this._armadura=newArmadura;
        this.textArmadura.text= this._armadura;
        this.textArmadura.x=46 - this.textArmadura.width/2;
        this.textArmadura.alpha = this._armadura==0?0:1;
        this.spriteArmadura.alpha= this._armadura==0?0:1;

    }

    get armadura(){
        return this._armadura;
    }
}