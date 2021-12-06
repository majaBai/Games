function loadBlocks() {
  let l = window.level
  let blocks = []
  for (let i = 0; i < Level[l - 1].length; i++) {
    let b = Block(Level[l - 1][i], g)
    blocks.push(b)
  }
  return blocks
}

function changeSpeed () {
  let speed = document.querySelector('#speed-contrl').value
  window.fps = Number(speed)
}

// 添加功能：暂停、关卡
window.addEventListener('keydown', event => {
    // 暂停
    if (event.code === 'Space') {
      window.pause = !window.pause
      log('window.pause', window.pause)
    }
    // 选择关卡
    if('123'.includes(event.key)) {
      window.level = Number(event.key)
      blocks = loadBlocks()
    }
  })

function main () {
  window.pause = false
  window.fps = 10
  window.level = 1
  var score  = 0

  // 游戏所需的所有图片
  var allImgPath = { 
    block: '../assets/block.png', 
    ball: '../assets/ball.png', 
    paddle: '../assets/paddle.png',
    bk: '../assets/bk.jfif'
  }
  g = Game(allImgPath)
  g.ready = function() {
    paddle = Paddle(g)
    ball = Ball(g)
    blocks = loadBlocks()

    g.update = function () {
      // 判断相撞
      if (paddle.collide(ball)) {
        ball.rebound()
      }
      for (let i = 0; i < blocks.length; i++) {
        let b = blocks[i]
        if(b.collide(ball)) {
          b.killed()
          score += 100
          ball.rebound()
       }
      }
      ball.move()
    }
    g.draw = function () {
      // draw background
      g.drawBk()
      // draw paddle
      g.drawImg(paddle)
      // draw ball
      g.drawImg(ball)
      // draw blocks
      for(let i = 0; i < blocks.length; i++) {
        let b = blocks[i]
        if (b.alive) {
          g.drawImg(b)
        }
      }
      // 显示分数
      g.drawScore(`得分: ${score}`)
    }
    // 注册按键事件
    g.register ('a', function () {
      paddle.moveLeft()
    })
    g.register ('d', function () {
      paddle.moveRight()
    })
    g.register ('f', function () {
      ball.fire()
    })

    // 拖拽小球
    let canDragBall = false
    g.canvas.addEventListener('mousedown', function(e) {
      let x = e.offsetX
      let y = e.offsetY
      if (ball.hasPoint(x, y)) {
        canDragBall = true
      }
    })
    g.canvas.addEventListener('mousemove', function(e) {
      let x = e.offsetX
      let y = e.offsetY
      if (canDragBall) {
        ball.x = x
        ball.y = y
        g.shiftBall()
      }
    })
    g.canvas.addEventListener('mouseup', function(e) {
      canDragBall = false
    })
  }
}

main()