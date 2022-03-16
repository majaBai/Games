class Example {
  constructor(game, text) {
    this.init(game, text)
  }
  init (game, text) {
    this.game = game
    this.text = text
  }
  update () {

  }
  draw () {
    this.game.drawTip(this.text)
  }
}
class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      g.register ('k', function () {
        console.log('press k')
        const s = new SceneStart(g)
        g.replaceScene(s)
        const dom = e('.desc')
        dom.classList.remove('hidden')
      })
      this.init(g)
    }
    init (g) {
      // 示例: 添加一个任意类型的 element
      const example = new Example(this.game, 'press k start game!')
      this.addElement(example)

      const ps = new particleSystem(g, 20, 100)
      const ps1 = new particleSystem(g, 300, 20)
      this.addElement(ps)
      this.addElement(ps1)
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