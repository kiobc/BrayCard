export function AddBotonRestart(scene) {
  const botonrestart = scene.add.image(scene.game.config.width / 2, scene.game.config.height / 2, 'botonrestart');
  botonrestart.depth = 2;
  botonrestart.setInteractive();
  botonrestart.on('pointerover', () => (botonrestart.tint = 0xcccccc));
  botonrestart.on('pointerout', () => (botonrestart.tint = 0xffffff));
  botonrestart.on('pointerdown', () => {
    botonrestart.tint = 0xffffff;
    scene.scene.restart();
  });
}
