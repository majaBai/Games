class SceneStart extends Scene {
  constructor (g) {
    super(g)
    this.init()
  }
  init () {
    // 场景所需的素材
    this.player = new Player({game:g, x: 170, y:500})
    this.cloud = new Cloud({game:g, x: 200, y:-290})
    this.cloud1 = new Cloud({game:g, x: 20, y:-100})
    this.enemy1 = new Enemy({game:g, x: 30, y: -50})
    this.enemy2 = new Enemy({game:g, x: 180, y: 150})
    this.enemy3 = new Enemy({game:g, x: 100, y:-190})
    this.enemy4 = new Enemy({game:g, x: 290, y: 20})
    this.enemy5 = new Enemy({game:g, x: 350, y: -90})
    this.enemy6 = new Enemy({game:g, x: 60, y: -10})
    this.enemy7 = new Enemy({game:g, x: 240, y: -120})
    this.enemy8 = new Enemy({game:g, x: 50, y: 180})
    this.enemy9 = new Enemy({game:g, x: 120, y: 80})
    this.enemy10 = new Enemy({game:g, x: 210, y: 220})
    this.addElement(this.cloud)
    this.addElement(this.cloud1)
    this.addPlayer(this.player)
    this.addEnemy(this.enemy1)
    this.addEnemy(this.enemy2)
    this.addEnemy(this.enemy3)
    this.addEnemy(this.enemy4)
    this.addEnemy(this.enemy5)
    this.addEnemy(this.enemy6)
    this.addEnemy(this.enemy7)
    this.addEnemy(this.enemy8)
    this.addEnemy(this.enemy9)
    this.addEnemy(this.enemy10)
    // 注册按键事件
    g.register ('a', () => {
      this.player && this.player.moveLeft()
    })
    g.register ('d', () => {
      this.player && this.player.moveRight()
    })
    g.register ('w', () => {
      this.player && this.player.moveUp()
    })
    g.register ('s', () => {
      this.player && this.player.moveDown()
    })
    g.register ('f', () => {
      this.player && this.player.fire()
    })
  }
}
