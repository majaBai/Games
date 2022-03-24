class Game {
  constructor (allImgPath) {
    this.keydown_actions = {},
    this.keyup_actions = {},
    this.keydowns = {},
    this.keyups = {},
    this.imgs= {},
    this.canvas= document.querySelector('#canvas'),
    this.ctx= this.canvas.getContext('2d')
    this.scene = null
    this.i = null // 实例，唯一
     // events
    document.addEventListener('keydown', event => {
      this.keydowns[event.key] = 'down'
      // this.keyups[event.key] = false
    })
    document.addEventListener('keyup', event => {
      this.keydowns[event.key] = 'up'
      // this.keyups[event.key] = true
    })
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
        }
      }
    }
  }

  static instance (allImgPath) {
    const i = this.i || new this(allImgPath)
    if(!this.i) this.i = i
    return i
  }

  start (s) {
    this.scene = s
    this.runLoop()
  }
  runLoop () {
    if (!window.pause) {
      // events
      let keys_down = Object.keys(g.keydown_actions)
      keys_down.forEach(k => {
        const status = this.keydowns[k]
        if (status === 'down') {
          this.keydown_actions[k]('down')
        } else if (status === 'up') {
          this.keydown_actions[k]('up')
          this.keydowns[k] = null
        }
      })
      // let keys_up = Object.keys(g.keyup_actions)
      // keys_up.forEach(k => {
      //   if (this.keyups[k]) {
      //     this.keyup_actions[k]()
      //     this.keyups[k] = false
      //   }
      // })
      // clear
      this.clear()
      // update
      this.update()
      // draw
      this.drawScene()
    }
    setTimeout(() => {
      this.runLoop()
    }, 1000 / window.fps)
  }
  register (key, cb, isDown = true) {
    if (isDown) this.keydown_actions[key] = cb
    else this.keyup_actions[key] = cb
  }
  drawScene () {
    this.scene.draw()
    // console.log('game.drawScene', this.scene)
    // this.drawBk()
    // this.scene.elements.forEach(item => {
    //   this.drawMaterial(item)
    // })
  }
  drawMaterial (image) {
    this.ctx.drawImage(image.texture, image.x, image.y, image.w, image.h)
  }
  drawScore (scroe) {
    this.ctx.font = "16px serif";
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(scroe, 50, this.canvas.height - 20)
  }
  drawTip (text) {
    this.ctx.font = "bold 32px serif";
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(text, this.canvas.width / 2, this.canvas.height / 2)
  }
  drawBk () {
    const img = this.textureByName('bk').img
    // this.ctx.createPattern(img, "no-repeat")
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  update () {
    this.scene.update()
  }
  replaceScene (s) {
    this.scene = s
  }
  textureByName (name) {
    let img = this.imgs[name]
    let image = {
      img,
      // w: img.width,
      // h: img.height
    }
    return image
  }
  // 拖拽小球
  shiftBall () {
    this.clear()
    // update
    this.update()
    // draw
    this.drawScene()
  }
}