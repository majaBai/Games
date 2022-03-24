
class SceneTitle extends Scene {
    constructor(g) {
      super(g)
      this.init(g)
    }
    init (g) {
      const bird = new BirdsAnimation({game: g, x: 20, y: 200, scale: 0.5, framesCount: 7, img_path: 'b'})
      const g0 = new Ground({game: g, x: -10, y: 600, framesCount: 1, img_path: 'g'})
      const g1 = new Ground({game: g, x: 325, y: 600, framesCount: 1, img_path: 'g'})
      const g2 = new Ground({game: g, x: 625, y: 600, framesCount: 2, img_path: 'g'})
      this.addElement(g0)
      this.addElement(g1)
      this.addElement(g2)
      this.addElement(bird)

      this.bird = bird
      g.register ('a', (s) => {
        //  s表示按键的按下与否的状态，up/down
        this.bird.move('x', -2, s)
      })
      g.register ('d', (s) => {
        this.bird.move('x', 2, s)
      })
      // g.register ('w', (s) => {
      //   this.bird.move('y', -2, s)
      // })
      // g.register ('s', (s) => {
      //   this.bird.move('y', 2, s)
      // })
      g.register ('j', (s) => {
        this.bird.jump(s)
      })
    }
    draw () {
      super.draw()
    }
    update () {
      super.update()
    }
  }