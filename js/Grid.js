import CartaGrid from "./CartaGrid.js";
import CartaTipo from "./CartaTipo.js";

export default class Grid{
    constructor(data){
        let{scene,columnas,rows}=data;
        this.xOffset=120;
        this.yOffset=280;
        this.yStart=scene.game.config.height/2;
        this.columnas=columnas;
        this.rows=rows;
        this.scene=scene;
        this.cartas=[];
        this.addCarta(0);

    }
    addCarta(startIndex){
        for (let index = startIndex; index < this.columnas*this.rows; index++) {
            const cartatipo=CartaTipo[Math.floor(Math.random()*CartaTipo.length)];
            let card= new CartaGrid({
                scene:this.scene,
                x:this.xOffset+(this.scene.game.config.width/2- this.xOffset)*(index % this.columnas),
                y: this.yStart-this.yOffset*Math.floor(index/this.columnas),
                card:'card',
                image: cartatipo.image,
                value: cartatipo.value,
                name:cartatipo.name,
                type:cartatipo.type

            });
            card.depth=0;
            this.cartas.push(card);
            
        }
    }

}