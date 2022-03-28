const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const x = 0
const y = 0

var groud = new Image()
groud.src = 'img/g0.png'
groud.onload = () => {
  ctx.drawImage(groud, 20, 400)
}

var bird = new Image();   
bird.src = 'img/b0.png'
bird.onload = () => {
  ctx.drawImage(bird, x , y)
}





