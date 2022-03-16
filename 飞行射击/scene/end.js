class SceneEnd extends Scene {
  constructor(option) {
    super(option.g)
    this.text = option.text
    g.register ('r', function () {
      console.log('press r')
      const s = new SceneStart(g)
      g.replaceScene(s)
    })
    const example = new Example(this.game, this.text)
    const ps = new particleSystem(g, 20, 100)
    const ps1 = new particleSystem(g, 300, 20)
    this.addElement(example)
    this.addElement(ps)
    this.addElement(ps1)
  }
  draw () {
    super.draw()
  }
  update () {
    super.update()
  }
}