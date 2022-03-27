// 改变速度
function changeSpeed (event) {
  const key = event.target.dataset.speed
  const value = event.target.value
  config[key].value = Number(value)
  let span = document.querySelector(`#${key}`)
  span.innerText = value
}

function generateConfig () {
  const keys = Object.keys(config)
  let container = document.querySelector('#config')
  keys.forEach(k => {
    if (k !== 'fps') {
      const label = config[k].label
      const val = config[k].value
      const html = `<div>${label}：<input type="range" value='${val}' min='1' max='10' data-speed="${k}" onchange="changeSpeed(event)">  <span id='${k}'>${val}<span></div>`
      container.insertAdjacentHTML('beforeend', html)
    }
  })
}

function main () {
  generateConfig()
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