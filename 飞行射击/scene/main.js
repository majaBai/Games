class Scene {
    constructor (g) {
      this.game = g
      this.elements = []
      this.player = null
      this.bullets = []
      this.enemy = []
    }
    addPlayer (p) {
      this.player = p
    }
    addBullets (b) {
      this.bullets.push(b)
    }
    addEnemy (e) {
      this.enemy.push(e)
    }
    addElement (material) {
      this.elements.push(material)
    }
    removeElement (idx) {
      this.elements.splice(idx, 1)
    }
    removeEnemy (idx) {
      this.enemy.splice(idx, 1)
    }
    removeBullets (idx) {
      this.bullets.splice(idx, 1)
    }
    removePlayer () {
      this.player = null
    }
    draw () {
      this.game.drawBk()
      const allElement = [...this.elements, this.player, ...this.enemy, ...this.bullets]
      allElement.forEach(item => {
        item && item.draw()
      })
    } 
    update () {
      this.elements = this.elements.filter(item => !item.death)
      this.elements.forEach(item => item.update())
      this.player && this.player.update()
      this.enemy.forEach((item, idx) => item.update(idx))
      this.bullets.forEach((item, idx) => item.update(idx))
    }
    // 改变初始化示例的调用方法
    // 静态方法
    static new (game) {
        return new this(game)
    }
  }