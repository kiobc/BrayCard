import CartaBase from "./CartaBase.js";
export default class ArrastraCartas extends CartaBase{
    constructor(data)
    {
        let{ondragend}=data;
        super(data);
        this.originalX=this.x;
        this.originalY=this.y;
        this.draggable=true;
        this.dragging=false;
        this.ondragend=ondragend;
        this.setSize(this.spriteCarta.width, this.spriteCarta.height);
        this.setInteractive();
        this.scene.input.setDraggable(this);
        this.scene.input.on('drag',(pointer,gameObject,dragX,dragY)=>{
            if(!this.draggable)return;
            this.dragging=true;
            gameObject.x=dragX;
            gameObject.y=dragY;
        });
        this.scene.input.on('dragend',(pointer,gameObject)=>{
            this.dragging=false;
            gameObject.ondragend(pointer,gameObject);
        })
        
    }
}