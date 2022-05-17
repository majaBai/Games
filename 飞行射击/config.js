// 配置文件
// 游戏所需的所有图片
var allImgPath = { 
  cloud: '../assets/shoot-plane/cloud.png', 
  bullet: '../assets/shoot-plane/bullet.png', 
  player: '../assets/shoot-plane/player.png',
  enemy: '../assets/shoot-plane/enemy.png',
  bk: '../assets/shoot-plane/sky.jpeg',
  fire: '../assets/shoot-plane/bomb.png',
  bomb: '../assets/shoot-plane/bomb.png'
}
const config = {
    player_speed: 10,
    bullet_speed: 5,
    cloud_speed: 1,
    enemy_speed: 1,
    pause: false, // 暂停游戏
    fps: 40, // 帧率
    level: 1, // 关卡
    fire_v: 0.01 // 爆炸火花加速度
  }