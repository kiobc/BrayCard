export default class CartaBase extends Phaser.GameObjects.Container{
     constructor(data){
        let {scene, x,y,name,card,image,depth}=data;
        let spriteCarta=new Phaser.GameObjects.Sprite(scene,0,0,card);
        let spriteImagen = new Phaser.GameObjects.Sprite(scene,0,20,image);
        let textNombre = new Phaser.GameObjects.BitmapText(scene,0,0,'pressstart',name,16,Phaser.GameObjects.BitmapText.ALIGN_CENTER);
        super(scene,x,y,[spriteCarta,spriteImagen, textNombre]);
        this.spriteCarta=spriteCarta;
        this.spriteImagen=spriteImagen;
        this.textNombre=textNombre;
        this.cartanombre=name;
        this.scene=scene;
        this.scene.add.existing(this);
    }
    set cartanombre(newName){
        this._cartanombre= newName;
        this.textNombre.text=this._cartanombre;
        this.textNombre.maxWidth=this.spriteCarta.width;
        this.textNombre.tint=0;
        this.textNombre.x=-this.textNombre.width/2;
        this.textNombre.y=120-this.textNombre.height;
    }
}