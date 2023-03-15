import Principal from './Principal.js';

const config ={
    width:640,
    height:1024,
    backgroundColor:'#33333',
    type: Phaser.AUTO,
    parent:'phaser-game',
    scene:[Principal]

}

new Phaser.Game(config);
