const Ball = function (g) {
    // let img = imgFromPath('../assets/ball.png')
    let o = g.imgByName('ball')
    // let o = {
    //   img,
    //   x: 150,
    //   y: 350,
    //   speedX: 4,
    //   speedY: 4,
    //   fiered: false
    // }
    o.x = 150
    o.y = 350
    o.speedX = 4
    o.speedY = 4
    o.fiered = false
    o.fire = function () {
      log('fire')
      o.fiered = true
    }
    
    o.move = function () {
      if (o.fiered) {
        if (o.x < 0 || o.x > 980) {
          o.speedX = -o.speedX
        }
        if (o.y < 0 || o.y > 470 ) {
          o.speedY = -o.speedY
        }
        o.x += o.speedX
        o.y += o.speedY
      }
    }
    o.rebound = function () {
      o.speedY *= -1
    }

    o.hasPoint = function (x, y) {
      let xIn = x >= o.x && x <= o.x + o.w
      let yIn = y >= o.y && y <= o.y + o.h
      return xIn && yIn
    }
   
    return o
  }
  