class Cloud extends GameMaterial {
    constructor(option) {
        super(option)
    }
    update () {
        this.y += this.speed
        if (this.y > this.game.canvas.height) {
            this.init()
        }
    }
}