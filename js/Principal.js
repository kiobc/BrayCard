import CartaJugador from './CartaJugador.js';
import CartaGrid from './CartaGrid.js';
import Grid from './Grid.js';
import { AddBotonRestart } from './BotonRestart.js';

export default class Principal extends Phaser.Scene {
  constructor() {
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
    this.load.image('botonrestart', 'assets/restartbutton.png');
    this.load.image('shield', 'assets/shield.png');
    this.load.image('troll', 'assets/troll.png');
    this.load.bitmapFont('pressstart', 'assets/pressstart.png', 'assets/pressstart.fnt');
  }
  create() {
    this.grid = new Grid({ scene: this, columnas: 3, filas: 3 });

    this.player = new CartaJugador({
      scene: this,
      name: 'Paladin',
      x: this.game.config.width / 2,
      y: this.game.config.height - 200,
      card: 'playercard',
      image: 'paladin',
      salud: 16,
      depth: 1,
      ondragend: (pointer, gameObject) => {
        this.player.x = this.player.originalX;
        this.player.y = this.player.originalY;
        if (this.highlighted) {
          this.player.originalX = this.player.x = this.highlighted.x;
          this.highlighted.selected = true;
          switch (this.highlighted.cardtype) {
            case 'attack':
              this.player.attack(this.highlighted.value);
              this.highlighted.dead = true;
              this.highlighted.deadAnimation();
              break;
            case 'heal':
              this.player.salud = Math.min(this.player.salud + this.highlighted.value, this.player.maxsalud);
              this.highlighted.selected = true;
              break;
            case 'armor':
              this.player.armor = this.highlighted.value;
              break;
          }
          if (this.player.dead) {
            AddBotonRestart(this);
          } else {
            this.grid.fadeFrontRow();
          }
        }
      }
    });
  }

  update(time, delta) {
    this.grid.cards[0].highlighted = false;
    this.grid.cards[1].highlighted = false;
    this.grid.cards[2].highlighted = false;
    this.highlighted = null;
    let columnWidth = this.game.config.width / this.grid.columnas;
    let xDiff = Math.abs(this.player.x - this.player.originalX);
    if (this.player.y < 700 && xDiff < columnWidth * 1.4) {
      if (this.player.x < columnWidth) {
        this.grid.cards[0].highlighted = true;
        this.highlighted = this.grid.cards[0];
      } else if (this.player.x > columnWidth * 2) {
        this.grid.cards[2].highlighted = true;
        this.highlighted = this.grid.cards[2];
      } else {
        this.grid.cards[1].highlighted = true;
        this.highlighted = this.grid.cards[1];
      }
    }
  }
}
