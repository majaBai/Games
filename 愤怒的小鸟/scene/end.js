class SceneEnd extends Scene {
  constructor(g) {
    super(g)
    g.register ('r', function () {
      console.log('press r')
      const s = new SceneStart(g)
      g.replaceScene(s)
    })
  }
  draw () {
    // super.draw()
    this.game.drawBk()
    this.game.drawTip('game over!', 'yellow', this.game.canvas.width / 2, this.game.canvas.height / 4)
    this.game.drawTip('press r to restart game', 'black', this.game.canvas.width / 2, this.game.canvas.height / 4 + 40)
  }
  update () {
    super.update()
  }
}