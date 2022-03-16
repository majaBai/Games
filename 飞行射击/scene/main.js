class Scene {
    constructor (g) {
      this.game = g
      this.elements = []
    }
    addElement (material) {
      this.elements.push(material)
    }
    removeElement (e) {
      let idx
      for(let i = 0; i< this.elements.length; i++) {
        if (this.elements[i] === e) {
          idx = i
          break
        }
      }
      console.log('removeElement', idx)
      this.elements.splice(idx, 1)
    }
    removeElementById (idx) {
      this.elements.splice(idx, 1)
    }
    draw () {
      this.game.drawBk()
      this.elements.forEach(item => {
        // this.game.drawMaterial(item)
        item.draw()
      })
    } 
    update () {
        this.elements.forEach((item, idx, allElement) => {
          item.update(idx, allElement)
        })
    }
    // 改变初始化示例的调用方法
    // 静态方法
    static new (game) {
        return new this(game)
    }
  }