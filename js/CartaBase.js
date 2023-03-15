export default class CartaBase extends Phaser.GameObjects.Container{
     constructor(data){
        let {scene, x,y,name,card,image,depth}=data;
        let spriteCarta=new Phaser.GameObjects.Sprite(scene,0,0,card);
        let spriteImagen = new Phaser.GameObjects.Sprite(scene,0,0,image);
        let textNombre = new Phaser.GameObjects.BitmapText(scene,0,0,'pressstart',name,16,Phaser.GameObjects.BitmapText.ALIGN_CENTER);
        super(scene,x,y,[spriteCarta,spriteImagen, textNombre]);
        this.spriteCarta=spriteCarta;
        this.spriteImagen=spriteImagen;
        this.textNombre=textNombre;
        this.cardname=name;
        this.scene=scene;
        this.scene.add.existing(this);
    }
}