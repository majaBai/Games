const Game = function (fps) {
    let g = {
      actions: {},
      keydowns: {}
    }
    
    g.canvas = document.querySelector('#canvas')
    g.ctx = canvas.getContext('2d')

    g.register = function (key, cb) {
      g.actions[key] = cb
    }
    g.drawImg = function (image) {
      g.ctx.drawImage(image.img, image.x, image.y)
    }
    g.clear = function () {
      g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height)
    }

    // events
    document.addEventListener('keydown', event => {
      g.keydowns[event.key] = true
    })
    document.addEventListener('keyup', event => {
      g.keydowns[event.key] = false
    })
    
    setInterval(function(){
      // events
      let keys = Object.keys(g.actions)
      keys.forEach(k => {
        if (g.keydowns[k]) {
          g.actions[k]()
        }
      })
      // clear
      g.clear()
      // update
      g.update()
      // draw
      g.draw()
   }, 1000/fps)

   return g
  } 