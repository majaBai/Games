// const scene = function (g) {
//     const s = {
//         g
//     }
//     let score  = 0
//     let paddle = Paddle(g)
//     let ball = Ball(g)
//     blocks = loadBlocks()
    
//     s.update = function () {
//         if (ball.y > paddle.y) {
//             g.end()
//             return
//         }
//         if (paddle.collide(ball)) {
//             ball.rebound()
//         }
//         for (let i = 0; i < blocks.length; i++) {
//         let b = blocks[i]
//         if(b.collide(ball)) {
//             b.killed()
//             score += 100
//             ball.rebound()
//         }
//         }
//         ball.move()
//     }
//     s.draw = function () {
//       // draw background
//       g.drawBk()
//       // draw paddle
//       g.drawImg(paddle)
//       // draw ball
//       g.drawImg(ball)
//       // draw blocks
//       for(let i = 0; i < blocks.length; i++) {
//         let b = blocks[i]
//         if (b.alive) {
//           g.drawImg(b)
//         }
//       }
//       // 显示分数
//       g.drawScore(`得分: ${score}`)
//     }
    
//     // 注册按键事件
//     g.register ('a', function () {
//       paddle.moveLeft()
//     })
//     g.register ('d', function () {
//       paddle.moveRight()
//     })
//     g.register ('f', function () {
//       console.log('press f')
//       ball.fire()
//     })
//     g.register ('r', function () {
      
//     })

//     // 拖拽小球
//     let canDragBall = false
//     g.canvas.addEventListener('mousedown', function(e) {
//       let x = e.offsetX
//       let y = e.offsetY
//       if (ball.hasPoint(x, y)) {
//         canDragBall = true
//       }
//     })
//     g.canvas.addEventListener('mousemove', function(e) {
//       let x = e.offsetX
//       let y = e.offsetY
//       if (canDragBall) {
//         ball.x = x
//         ball.y = y
//         g.shiftBall()
//       }
//     })
//     g.canvas.addEventListener('mouseup', function(e) {
//       canDragBall = false
//     })

//     return s
// }

class Scene {
    constructor (g) {
      score  = 0
      paddle = Paddle(g)
      ball = Ball(g)
      blocks = loadBlocks()
      // 注册按键事件
     g.register ('a', function () {
        paddle.moveLeft()
      })
     g.register ('d', function () {
        paddle.moveRight()
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
  
    update () {
      if (ball.y > paddle.y) {
        const s = new SceneEnd(g)
        g.replaceScene(s)
         return
      }
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
    draw () {
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
  }