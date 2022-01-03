const Game = function (allImgPath) {
    let g = {
      actions: {},
      keydowns: {},
      imgs: {},
    }
    let scene = null // 场景
    
    g.canvas = document.querySelector('#canvas')
    g.ctx = canvas.getContext('2d')

    g.register = function (key, cb) {
      g.actions[key] = cb
    }
    g.drawImg = function (image) {
      g.ctx.drawImage(image.img, image.x, image.y)
    }
    g.drawScore = function (scroe) {
      g.ctx.font = "16px serif";
      g.ctx.fillStyle = 'white'
      g.ctx.textAlign = 'center'
      g.ctx.fillText(scroe, 50, g.canvas.height - 20)
    }
    g.drawTip = function (text) {
      g.ctx.font = "bold 32px serif";
      g.ctx.fillStyle = 'white'
      g.ctx.textAlign = 'center'
      g.ctx.fillText(text, g.canvas.width / 2, g.canvas.height / 2)
    }
    g.drawBk = function () {
      const img = g.imgByName('bk').img
      // g.ctx.createPattern(img, "no-repeat")
      g.ctx.drawImage(img, 0, 0, g.canvas.width, g.canvas.height)
    }
    g.clear = function () {
      g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height)
    }
    g.update = function () {
      scene.update()
    }
    g.draw = function () {
      scene.draw()
    }
    
    g.replaceScene = function (s) {
      scene = s
    }

    // events
    document.addEventListener('keydown', event => {
      g.keydowns[event.key] = true
    })
    document.addEventListener('keyup', event => {
      g.keydowns[event.key] = false
    })
    
    const runLoop = function () {
      console.log('runloop', window.pause)
      if (!window.pause) {
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
      }
      setTimeout(() => {
        runLoop()
      }, 1000 / window.fps)
    }
  // 预载入图片
  var imgCount = 0
  let imgKeys = Object.keys(allImgPath)
  for(let i = 0; i < imgKeys.length; i++) {
    let name = imgKeys[i]
    let path = allImgPath[name]
    let img = new Image()
    img.src = path
    img.onload = function () {
      imgCount += 1
      g.imgs[name] = img
      if (imgCount === imgKeys.length) {
        //所有图片加载完成
        g.ready()
        // g.run()
      }
    }
  }
  g.imgByName = function (name) {
    let img = g.imgs[name]
    let image = {
      img,
      w: img.width,
      h: img.height
    }
    return image
  }

  // 拖拽小球
  g.shiftBall = function () {
    g.clear()
    // update
    g.update()
    // draw
    g.draw()
  }

  // 开始运行game
  g.start= function (s) {
    scene = s
    runLoop()

    // setTimeout(() => {
    //   scene = s
    //   runLoop()
    // }, 1000 / window.fps)
  }
   return g
  } 