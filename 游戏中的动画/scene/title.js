
class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      this.init(g)
    }
    init (g) {
      const walker = new WolkingAnimation({game: g, x: 80, y: 20, scale: 0.3, framesCount: 96})
      this.addElement(walker)

      this.walker = walker
      g.register ('a', () => {
        this.walker.move(-2)
      })
      g.register ('d', () => {
        this.walker.move(2)
      })
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