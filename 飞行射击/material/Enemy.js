class Enemy extends GameMaterial {
    constructor(option) {
        option.name= 'enemy'
        option.factor= 20
        option.speed= config.enemy_speed
        super(option)
    }
    update () {
        // this.y += 1
    }
}