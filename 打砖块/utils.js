var imgFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
  }

  // 矩形相交
  var rectIntersects = function (a, b) {
    let [x1, y1] = [a.x, a.y]
    let [x2, y2] = [b.x, b.y]
    if (y1 + a.img.height < y2 || y2 + b.img.height < y1) return false
    if (x1 + a.img.width < x2 || x1 > x2 + b.img.width) return false
    return true
  }
