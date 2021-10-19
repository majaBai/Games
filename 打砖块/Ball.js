const Ball = function () {
    let img = imgFromPath('../assets/ball.png')
    let o = {
      img,
      x: 100,
      y: 350,
      speedX: 4,
      speedY: 4,
      fiered: false
    }
    o.fire = function () {
      console.log('fire')
      o.fiered = true
    }
    o.move = function () {
      if (o.fiered) {
      console.log('ball move')
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
   
    return o
  }
  