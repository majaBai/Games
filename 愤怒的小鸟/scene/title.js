
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
      g.register ('a', () => {
        this.bird.move('x', -2)
      })
      g.register ('a', () => {
        console.log('aaa up----')
        this.bird.startfall()
      }, false) // keyup
      g.register ('d', () => {
        this.bird.move('x', 2)
      })
      g.register ('d', () => {
        this.bird.startfall()
      }, false) // keyup
      g.register ('w', () => {
        this.bird.move('y', -2)
      })
      g.register ('w', () => {
        this.bird.startfall()
      }, false) // keyup
      g.register ('s', () => {
        this.bird.move('y', 2)
      })
      g.register ('j', () => {
        this.bird.jump()
      })
      g.register ('j', () => {
        this.bird.startfall()
      }, false) // keyup
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