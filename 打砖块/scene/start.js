function loadBlocks() {
  let l = window.level
  let blocks = []
  for (let i = 0; i < Level[l - 1].length; i++) {
    let b = Block(Level[l - 1][i], g)
    blocks.push(b)
  }
  return blocks
}
class SceneStart extends Scene {
  constructor (g) {
    super(g)
    this.score  = 0
    this.paddle = Paddle(g)
    this.ball = Ball(g)
    this.blocks = loadBlocks()
    // 注册按键事件
    g.register ('a', () => {
      this.paddle.moveLeft()
    })
    g.register ('d', () => {
      this.paddle.moveRight()
    })
    g.register ('f', () => {
      this.ball.fire()
    })
    window.addEventListener('keydown', event => {
      // 暂停游戏
      if (event.code === 'Space') {
        window.pause = !window.pause
        log('window.pause', window.pause)
      }
      // 更换关卡
      if('123'.includes(event.key)) {
        window.level = Number(event.key)
        this.blocks = loadBlocks()
      }
    })
     // 拖拽小球
     let canDragBall = false
    g.canvas.addEventListener('mousedown', e => {
       let x = e.offsetX
       let y = e.offsetY
       if (this.ball.hasPoint(x, y)) {
         canDragBall = true
       }
     })
    g.canvas.addEventListener('mousemove', e => {
       let x = e.offsetX
       let y = e.offsetY
       if (canDragBall) {
         this.ball.x = x
         this.ball.y = y
         g.shiftBall()
       }
     })
    g.canvas.addEventListener('mouseup', function(e) {
       canDragBall = false
     })
  }

  update () {
    if (this.ball.y > this.paddle.y) {
      const s = new SceneEnd(g)
      g.replaceScene(s)
       return
    }
    if (this.paddle.collide(this.ball)) {
        this.ball.rebound()
    }
    for (let i = 0; i < this.blocks.length; i++) {
    let b = this.blocks[i]
    if(b.collide(this.ball)) {
        b.killed()
        this.score += 100
        this.ball.rebound()
    }
    }
    this.ball.move()
  }
  draw () {
    // draw background
   g.drawBk()
    // draw paddle
   g.drawMaterial(this.paddle)
    // draw ball
    g.drawMaterial(this.ball)
    // draw blocks
    for(let i = 0; i < this.blocks.length; i++) {
      let b = this.blocks[i]
      if (b.alive) {
        g.drawMaterial(b)
      }
    }
    // 显示分数
    g.drawScore(`得分: ${this.score}`)
  }
  
}
