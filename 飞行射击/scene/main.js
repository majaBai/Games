class Scene {
    constructor (g) {
      console.log('scene constructor')
      this.game = g
      this.elements = []
    }
    addElement (material) {
      this.elements.push(material)
    }
    draw () {
      this.game.drawBk()
      this.elements.forEach(item => {
        this.game.drawMaterial(item)
      })
    }
    update () {
      // console.log('main scene update')
      this.elements.forEach(item => {
        item.update()
      })
    }
    // 改变初始化示例的调用方法
    // 静态方法
    static new (game) {
        return new this(game)
    }
  }