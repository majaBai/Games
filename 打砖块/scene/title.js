class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      g.register ('k', function () {
        console.log('press k')
        const s = new SceneStart(g)
        g.replaceScene(s)
      })
    }
    draw () {
      g.drawBk()
      g.drawTip('按 k 开始游戏')
    }
    update () {}
  }