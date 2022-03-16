// 改变速度
function changeSpeed (event) {
  const key = event.target.dataset.speed
  const value = event.target.value
  console.log('changeSpeed:::key: value', key, value) 
  config[key] = Number(value)
}

function main () {
  window.pause = config.pause
  window.fps = config.fps
  window.level = config.level
  // g = new Game(allImgPath)
  g = Game.instance(allImgPath)
  g.ready = function() {
    const s = new SceneTitle(g)
    // const s = new SceneStart(g)
    // const s = new SceneStart(g)
    g.start(s)
  }
}

main()