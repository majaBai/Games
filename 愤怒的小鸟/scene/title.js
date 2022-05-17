
class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      this.init(g)
    }
    init (g) {
      g.register ('k', () => {
        const startScene = new SceneStart(g)
        this.game.replaceScene(startScene)

        const gameTip = document.querySelector('.desc')
        gameTip.classList.remove('hidden')
      })
    }
    draw () {
      // super.draw()
      this.game.drawBk()
      this.game.drawTip('Press k to start game!', 'yellow', this.game.canvas.width / 2, this.game.canvas.height / 4)
    }
    update () {
      super.update()
    }
  }