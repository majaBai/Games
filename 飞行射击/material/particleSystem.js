class Particle extends GameMaterial {
    constructor(option) {
      option.name= 'fire'
      option.factor= 50
      super(option)
      this.duration = 100
      this.vx = option.vx
      this.vy = option.vy
      this.system = option.system
    }
    update () {
      this.duration--
      this.vy += 0.05 // 添加重力加速度
      this.x += this.vx
      this.y += this.vy
    }
    draw () {
      if(this.duration > 0) {
        // 其实应该把它从场景中删除，暂时先让他不 draw 
        this.game.drawMaterial(this)
      }
      // else {
      //   this.system.restart()
      // }
    }
  }
  class particleSystem {
    constructor(game, x, y) {
      this.init(game, x, y)
    }
    init (game, x, y) {
      this.game = game
      this.numbersOfParticles = 80
      this.x = x
      this.y = y
      this.particles = []
    }
    restart () {
      this.particles = []
    }
    update () {
      if (this.particles.length < this.numbersOfParticles) {
        const vx = 0.2 * randomBetween(-10, 10)
        const vy = 0.2 * randomBetween(-10, 10)
        const p = new Particle({game: this.game, x: this.x, y: this.y, vx, vy, system: this})
        this.particles.push(p)
      }
      this.particles.forEach(item => item.update())
    }
    draw () {
      this.particles.forEach(item => item.draw())
    }
  }