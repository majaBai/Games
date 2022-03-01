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
    g.drawBk()
    g.drawTip('游戏结束, 按 r 回到游戏开始')
  }
  update () {}
}