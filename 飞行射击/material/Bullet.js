class Bullet extends GameMaterial {
  constructor(option) {
      super(option)
  }
  update () {
      this.y -= this.speed
  }
}