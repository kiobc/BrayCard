import CartaBase from './CartaBase.js';

export default class CartaGrid extends CartaBase {
  constructor(data) {
    let { value, type } = data;
    super(data);
    this.textValor = new Phaser.GameObjects.BitmapText(this.scene, 0, -100, 'pressstart', value);
    this.add(this.textValor);
    this.value = value;
    this.cardtype = type;
  }
  set value(newValor) {
    this._value = newValor;
    this.textValor.text = this._value;
    this.textValor.x = -45 - this.textValor.width / 2;
    this.textValor.tint = 0;
  }
  get value() {
    return this._value;
  }

  set highlighted(highlight) {
    if (highlight) {
      let color = 0xcccc88;
      this.spriteCarta.tint = color;
      this.spriteImagen.tint = color;
    } else {
      this.spriteCarta.tint = 0xffffff;
      this.spriteImagen.tint = 0xffffff;
    }
  }
}
