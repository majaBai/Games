class Game {
  constructor(allImgPath) {
    this.actions = {},
    this.keydowns = {},
    this.imgs= {},
    this.canvas= document.querySelector('#canvas'),
    this.ctx= this.canvas.getContext('2d')
    this.scene = null
    this.i = null // 实例，唯一
     // events
    document.addEventListener('keydown', event => {
      this.keydowns[event.key] = true
    })
    document.addEventListener('keyup', event => {
      this.keydowns[event.key] = false
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

  static instance(allImgPath) {
    const i = this.i || new this(allImgPath)
    return i
  }

  start (s) {
    this.scene = s
    this.runLoop()
  }
  runLoop () {
    if (!window.pause) {
      // events
      let keys = Object.keys(g.actions)
      keys.forEach(k => {
        if (this.keydowns[k]) {
          this.actions[k]()
        }
      })
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
  register (key, cb) {
    this.actions[key] = cb
  }
  drawScene () {
    this.scene.draw()
  }
  drawMaterial (image) {
    this.ctx.drawImage(image.img, image.x, image.y)
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
    const img = this.imgByName('bk').img
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
  imgByName (name) {
    let img = this.imgs[name]
    let image = {
      img,
      w: img.width,
      h: img.height
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