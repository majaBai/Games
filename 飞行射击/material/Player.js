class Player extends GameMaterial {
    constructor(option) {
        option.name= 'player'
        option.factor= 10
        option.speed= config.player_speed
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
        this.speed = config.player_speed
        if (this.cooldown >= 0) {
            this.cooldown -= 1
        } else {
            this.cooldown = 3
        }
    }
    fire () {
        if (this.cooldown === 0) {
            const b = new Bullet({game:this.game, x: this.x + this.w/2, y:this.y})
            this.game.scene.addElement(b)
        }
    }
}