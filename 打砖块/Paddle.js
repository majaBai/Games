const Paddle = function (g) {
    // let img = imgFromPath('../assets/paddle.png')
    let o = g.imgByName('paddle')
    // let o = {
    //   img,
    //   x: 100,
    //   y: 400,
    //   speed: 10,
    // }
    o.x = 100
    o.y = 400
    o.speed = 10
    o.collide = function(ball) {
    return rectIntersects(o, ball)
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
