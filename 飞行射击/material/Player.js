class Player extends GameMaterial {
    constructor(option) {
        super(option)
        this.cooldown = 3
    }
    moveLeft () {
        this.x -= this.speed
        this.x = this.x >= 0? this.x : 0
    }
    moveRight () {
        this.x += this.speed
        this.x = this.x <= this.game.canvas.width - this.w? this.x : this.game.canvas.width - this.w
    }
    moveUp () {
        this.y -= this.speed
        this.y = this.y >= 0 ? this.y : 0
    }
    moveDown () {
        this.y += this.speed
        this.y = this.y <= this.game.canvas.height - this.h? this.y : this.game.canvas.height - this.h
    }
    update () {
        if (this.cooldown >= 0) {
            this.cooldown -= 1
        } else {
            this.cooldown = 3
        }
    }
    fire () {
        if (this.cooldown === 0) {
            const b = new Bullet({game:this.game, name: 'bullet', x: this.x + this.w/2, y:this.y, factor:50, speed: 5})
            this.game.scene.addElement(b)
        }
    }
}