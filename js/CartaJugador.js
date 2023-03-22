import ArrastraCarta from './ArrastraCarta.js';

export default class CartaJugador extends ArrastraCarta {
  constructor(data) {
    let { salud } = data;
    super(data);
    this.textsalud = new Phaser.GameObjects.BitmapText(this.scene, 0, -102, 'pressstart', salud);
    this.textMaxsalud = new Phaser.GameObjects.BitmapText(this.scene, -20, -90, 'pressstart', salud, 12);
    this.textArmadura = new Phaser.GameObjects.BitmapText(this.scene, 0, -102, 'pressstart');
    this.spriteArmadura = new Phaser.GameObjects.Sprite(this.scene, 50, -80, 'armor');
    this.textsalud.tint = 0;
    this.textMaxsalud.tint = 0;
    this.add([this.textsalud, this.textMaxsalud, this.spriteArmadura, this.textArmadura]);
    this.salud = salud;
    this.maxsalud = salud;
    this.armor = 0;
  }

  set salud(newsalud) {
    this._salud = newsalud;
    this.textsalud.text = this._salud;
    this.textsalud.x = -44 - this.textsalud.width / 2;
  }

  get salud() {
    return this._salud;
  }

  set maxsalud(newMaxsalud) {
    this._maxsalud = newMaxsalud;
  }

  get maxsalud() {
    return this._maxsalud;
  }

  set armor(newArmor) {
    this._armor = newArmor;
    this.textArmadura.text = this._armor;
    this.textArmadura.x = 47 - this.textArmadura.width / 2;
    this.textArmadura.alpha = this._armor == 0 ? 0 : 1;
    this.spriteArmadura.alpha = this._armor == 0 ? 0 : 1;
  }

  get armor() {
    return this._armor;
  }

  attack(ataqueValor) {
    if (ataqueValor <= this.armor) {
      this.armor = this.armor - ataqueValor;
    } else {
      this.salud = this.salud - (ataqueValor - this.armor);
      this.armor = 0;
    }
    if (this.salud <= 0) this.dead = true;
  }

  set dead(dead) {
    this.salud = '0';
    this.cartanombre = 'Muerto';
    this.draggable = false;
    this.deadAnimation();
  }
  get dead() {
    return this._cartanombre == 'Muerto';
  }
}
