// 改变小球速度
function changeSpeed () {
  let speed = document.querySelector('#speed-contrl').value
  window.fps = Number(speed)
}

function main () {
  window.pause = false
  window.fps = 30 // 小球速度
  window.level = 1 // 游戏关卡
  // 游戏所需的所有图片
  var allImgPath = { 
    cloud: '../assets/cloud.png', 
    bullet: '../assets/bullet.png', 
    player: '../assets/player.png',
    enemy: '../assets/enemy.png',
    bk: '../assets/sky.jpeg'
  }
  // g = new Game(allImgPath)
  g = Game.instance(allImgPath) // 单例
  g.ready = function() {
    console.log('g.ready')
    const s = new SceneStart(g)
    // const s = new SceneStart(g) // 初始化场景
    g.start(s)
  }
}

main()