

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
      return o.alive && rectIntersects(o, ball)
    }
    return o
  }