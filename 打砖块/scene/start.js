class SceneStart extends Scene {
  constructor (g) {
    super(g)
    g.register ('f', function () {
      console.log('press f',ball)
      ball.fire()
    })
    console.log('scene_start')
  }
}
