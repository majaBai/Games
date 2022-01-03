class Scene {
    constructor (g) {
      console.log('scene constructor')
    }
    draw () {
        alert('需要子类自己实现 draw 方法')
    }
    update () {

    }
    // 改变初始化示例的调用方法
    // 静态方法
    static new (game) {
        return new this(game)
    }
  }