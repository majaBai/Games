const imgFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
  }

  // 矩形相交(是否相撞)
const rectIntersects = function (a, b) {
  // console.log('rectIntersects', a, b)
    let [x1, y1] = [a.x, a.y]
    let [x2, y2] = [b.x, b.y]
    if (y1 + a.h < y2 || y2 + b.h < y1) return false
    if (x1 + a.w < x2 || x1 > x2 + b.w) return false
    return true
  }

const log = console.log.bind(console)
const e = sel => document.querySelector(sel)
// var log = function (s) {
//   const textArea = e("#log-area")
//   textArea.value += '\n' + s
// }

// 返回a, b 之间的随机数
const randomBetween = function (a, b) {
  return  a + (b - a) * Math.random(0, 1)
}
