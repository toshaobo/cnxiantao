// 添加北京时间显示功能
function updateBeijingTime() {
  const options = { 
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const formatter = new Intl.DateTimeFormat('zh-CN', options);
  const timeString = formatter.format(new Date());
  // 添加"北京时间"前缀
  document.getElementById('beijing-time').textContent = `北京时间 ${timeString}`;
  // 每秒更新一次
  setTimeout(updateBeijingTime, 1000);
}
// 初始化时间显示
updateBeijingTime();

// 新增代码雨脚本
(function() {
  // 初始化画布
  const canvas = document.getElementById('codeRainCanvas');
  const ctx = canvas.getContext('2d');
  
  // 设置画布尺寸
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // 字符集
  const chars = "010101010101010101010010101abcdefghijklmnopqrstuvwxyz";
  const fontSize = 20;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(0);
  
  // 绘制函数
  function drawRain() {
    // 半透明背景，形成拖尾效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 设置文字样式
    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;
    
    // 绘制每个字符
    for (let i = 0; i < drops.length; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(randomChar, i * fontSize, drops[i] * fontSize);
      
      drops[i]++;
      
      // 随机重置雨滴位置
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }
  
  // 开始动画
  setInterval(drawRain, 33); // 约30帧/秒
})();


var i = 0;
var text = "服务器搭建、服务器运维、文件服务器、局域网组建、网络维护、电脑维修、数据恢复、打印设备维修与维护！      ";

function ketik() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 30);
  }
}

ketik();
