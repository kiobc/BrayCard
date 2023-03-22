export function AddBotonRestart(scene) {
  const restartButton = this.add.sprite(400, 500, 'restartbutton')
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.restart();
    });






    const restartboton = scene.add.image(scene.game.config.width / 2, scene.game.config.height / 2, 'restartbutton');
    restartboton.depth = 2;
    restartboton.setInteractive();
    restartboton.on('pointerover', () => (restartboton.tint = 0xcccccc));
    restartboton.on('pointerout', () => (restartboton.tint = 0xffffff));
    restartboton.on('pointerdown', () => {
        restartboton.tint = 0xffffff;
      scene.scene.restart();
    });
  }
