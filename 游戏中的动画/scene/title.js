
class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      this.init(g)
    }
    init (g) {
      const animation = new WolkingAnimation({game: g, x: 80, y: 20})
      this.addElement(animation)
    }
    draw () {
      // g.drawBk()
      // g.drawTip('按 k 开始游戏')
      super.draw()
    }
    update () {
      super.update()
    }
  }