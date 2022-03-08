

  const Block = function (level, g) {
    // let img = imgFromPath('../assets/block.png')
    let o = g.imgByName('player')
    // let o = {
    //   img,
    //   x: level[0],
    //   y: level[1],
    //   lifes: Number(level[2]) || 0,
    //   alive: true
    // }
    o.x = level[0],
    o.y = level[1],
    o.lifes = Number(level[2]) || 0,
    o.alive = true
    o.killed = function () {
      o.lifes -= 1
      if (o.lifes <= 0) {
        o.alive = false
      } 
    }
    o.collide = function(ball) {
      return o.alive && rectIntersects(o, ball)
    }
    return o
  }