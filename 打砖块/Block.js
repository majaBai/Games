
 var rectIntersects = function (a, b) {
    let o = a
    let ball = b
    if (ball.y + ball.img.height > o.y - o.img.height && ball.y + ball.img.height < o.y) {
       if (ball.x > o.x && ball.x < o.x + o.img.width) {
         return true
       }
     }
      return false
  }

  const Block = function () {
    let img = imgFromPath('../assets/block.png')
    let o = {
      img,
      x: 0,
      y: 0,
      alive: true
    }
    o.killed = function () {
      o.alive = false
    }
    o.collide = function(ball) {
     return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o
  }