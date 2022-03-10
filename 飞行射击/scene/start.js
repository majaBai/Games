// function loadBlocks() {
//   let l = window.level
//   let blocks = []
//   for (let i = 0; i < Level[l - 1].length; i++) {
//     let b = Block(Level[l - 1][i], g)
//     blocks.push(b)
//   }
//   return blocks
// }
class SceneStart extends Scene {
  constructor (g) {
    super(g)
    this.init()
  }
  init () {
    // 场景所需的素材
    this.player = new Player({game:g, name: 'player', x: 170, y:500, factor:10, speed: 10})
    this.cloud = new Cloud({game:g, name: 'cloud', x: 10, y:50, factor:20, speed: 1})
    this.enemy1 = new Enemy({game:g, name: 'enemy', x: 10, y:50, factor:20, speed: 5})
    this.enemy2 = new Enemy({game:g, name: 'enemy', x: 80, y:150, factor:20, speed: 5})
    this.addElement(this.cloud)
    this.addElement(this.player)
    this.addElement(this.enemy1)
    this.addElement(this.enemy2)
    // 注册按键事件
    g.register ('a', () => {
      this.player.moveLeft()
    })
    g.register ('d', () => {
      this.player.moveRight()
    })
    g.register ('w', () => {
      this.player.moveUp()
    })
    g.register ('s', () => {
      this.player.moveDown()
    })
    g.register ('f', () => {
      this.player.fire()
    })
  }
  // update () {
  //   // this.cloud.y += 1
  // }
    // 注册按键事件
  //   g.register ('a', () => {
  //     this.paddle.moveLeft()
  //   })
  //   g.register ('d', () => {
  //     this.paddle.moveRight()
  //   })
  //   g.register ('f', () => {
  //     this.ball.fire()
  //   })
  //   window.addEventListener('keydown', event => {
  //     // 暂停游戏
  //     if (event.code === 'Space') {
  //       window.pause = !window.pause
  //       log('window.pause', window.pause)
  //     }
  //     // 更换关卡
  //     if('123'.includes(event.key)) {
  //       window.level = Number(event.key)
  //       this.blocks = loadBlocks()
  //     }
  //   })
  //    // 拖拽小球
  //    let canDragBall = false
  //   g.canvas.addEventListener('mousedown', e => {
  //      let x = e.offsetX
  //      let y = e.offsetY
  //      if (this.ball.hasPoint(x, y)) {
  //        canDragBall = true
  //      }
  //    })
  //   g.canvas.addEventListener('mousemove', e => {
  //      let x = e.offsetX
  //      let y = e.offsetY
  //      if (canDragBall) {
  //        this.ball.x = x
  //        this.ball.y = y
  //        g.shiftBall()
  //      }
  //    })
  //   g.canvas.addEventListener('mouseup', function(e) {
  //      canDragBall = false
  //    })
  // }

  // update () {
  //   if (this.ball.y > this.paddle.y) {
  //     const s = new SceneEnd(g)
  //     g.replaceScene(s)
  //      return
  //   }
  //   if (this.paddle.collide(this.ball)) {
  //       this.ball.rebound()
  //   }
  //   for (let i = 0; i < this.blocks.length; i++) {
  //   let b = this.blocks[i]
  //   if(b.collide(this.ball)) {
  //       b.killed()
  //       this.score += 100
  //       this.ball.rebound()
  //   }
  //   }
  //   this.ball.move()
  // }
  
}
