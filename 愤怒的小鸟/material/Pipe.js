class Pipe {
  constructor(option) {
    option.name= 'pipe'
    this.init(option)
  }
  init (option) {
    this.game = option.game
    this.name = option.name
    this.scale = option.scale || 1 // 控制图片大小
    this.down_x = option.x
    this.down_y = option.y
    this.split = 150
    this.frames = []
    this.framesCount = option.framesCount
    for(let i = 0; i < this.framesCount; i += 1) {
      const p_down = this.game.textureByName(`${option.img_path}${0}`).img
      const p_up = this.game.textureByName(`${option.img_path}${1}`).img
      const w = p_down.width * this.scale
      const h = p_down.height * this.scale

      const x = 250 + i * 100
      const down_y = 0
      const up_y = this.split + h

      const obj = {down: p_down, up: p_up, x, down_y, up_y, w, h}
      this.frames.push(obj)
    }
  }
  draw () {
      const ctx =  this.game.ctx
      for (let pipes of this.frames) {
        ctx.drawImage(pipes.down, pipes.x, pipes.down_y, pipes.w, pipes.h)
        ctx.drawImage(pipes.up, pipes.x, pipes.up_y, pipes.w, pipes.h)
      }
  }
  update () {
      for (let i = 0; i < this.frames.length; i++) {
        let pipes = this.frames[i]
        pipes.x -= config.pipe_speed.value
        if (pipes.x < -100 * i - pipes.w) pipes.x = this.game.canvas.width + 100 * (i + 1)
      }
  }
}