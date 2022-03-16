// 配置文件
// 游戏所需的所有图片
var allImgPath = { 
  cloud: '../assets/cloud.png', 
  bullet: '../assets/bullet.png', 
  player: '../assets/player.png',
  enemy: '../assets/enemy.png',
  bk: '../assets/sky.jpeg',
  fire: '../assets/bomb.png',
  bomb: '../assets/bomb.png'
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