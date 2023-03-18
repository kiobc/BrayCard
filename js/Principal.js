
import CartaGrid from './CartaGrid.js';
import CartaJugador from './CartaJugador.js';
export default class Principal extends Phaser.Scene{
    constructor(){
        super('Principal');

    }
    preload() {
        this.load.image('armor', 'assets/armor.png');
        this.load.image('card', 'assets/card.png');
        this.load.image('dead', 'assets/dead.png');
        this.load.image('deathknight', 'assets/deathknight.png');
        this.load.image('firedrake', 'assets/firedrake.png');
        this.load.image('goldendragon', 'assets/goldendragon.png');
        this.load.image('healingpotion', 'assets/healingpotion.png');
        this.load.image('kobold', 'assets/kobold.png');
        this.load.image('ogre', 'assets/ogre.png');
        this.load.image('paladin', 'assets/paladin.png');
        this.load.image('playercard', 'assets/playercard.png');
        this.load.image('restartbutton', 'assets/restartbutton.png');
        this.load.image('shield', 'assets/shield.png');
        this.load.image('troll', 'assets/troll.png');
        this.load.bitmapFont('pressstart', 'assets/pressstart.png', 'assets/pressstart.fnt');
      }
      create(){
        let cartatest = new CartaGrid({
          scene: this,
          name: 'Poción de salud roja',
          x: 200,
          y: 200,
          card: 'card',
          image: 'healingpotion',
          value: 12
        });
        

        this.player= new CartaJugador({
            scene: this,
            name:'Paladin',
            x:this.game.config.width/2,
            y:this.game.config.height-200,
            card:'playercard',
            image:'paladin',
            salud:16,
            depth:1,
            ondragend:(pointer, gameObject)=>{}
        });
      }
}