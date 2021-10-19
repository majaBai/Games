
const Paddle = function () {
    let img = imgFromPath('../assets/paddle.png')
    let o = {
      img,
      x: 100,
      y: 400,
      speed: 10,
    }
    o.collide = function(ball) {
     if (ball.y + ball.img.height > o.y) {
       if (ball.x > o.x && ball.x < o.x + o.img.width) {
         return true
       }
     }
      return false
    }
    o.moveLeft = function () {
      o.x -= o.speed
      o.x = o.x >= 0? o.x : 0
    }
    o.moveRight = function () {
      o.x += o.speed
      o.x = o.x <= canvas.width - 165? o.x : canvas.width - 165
    }
    return o
  }
