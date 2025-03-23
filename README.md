# Wowlue Games Collection

一个有趣的在线游戏集合，包括怪物幸存者、植物大战僵尸等多种游戏。采用现代网页技术构建，同时针对桌面和移动设备进行了优化。

## Features

- 🎮 多种游戏分类
- 🌐 支持中英文双语切换
- 📱 移动设备友好设计
- 🖥️ 全屏游戏支持
- 🎨 温馨自然的原木风UI设计
- ⚡ 快速加载时间
- 🍃 动态装饰元素

## Games Available

- **怪物幸存者 (Monster Survivors)**: 刺激的生存动作游戏
- **植物大战僵尸 (Plants vs Zombies)**: 经典塔防策略游戏

## Technical Details

- 使用HTML5、CSS3和JavaScript构建
- 响应式设计适配所有屏幕尺寸
- Font Awesome图标集成
- 自定义游戏控件提供更好的移动体验
- 使用网络图片作为游戏封面
- iframe嵌入式游戏体验

## Project Structure

```plaintext
wowlue.com/
├── games/
│   ├── config.js        # 游戏配置和分类定义
│   └── game-detail.html # 游戏详情页模板
└── index.html           # 网站首页
```

## How It Works

本站使用网络图片和iframe集成在线游戏，不依赖于本地图片资源。游戏配置在`games/config.js`文件中定义，包括：

1. 游戏分类定义
2. 游戏详细信息（包括标题、描述、控制方式等）
3. 游戏iframe链接
4. 网络图片链接作为游戏封面

## 多语言支持

网站支持中英文双语切换，用户可以根据自己的喜好选择语言，选择会被保存在本地存储中。

## Browser Support

- Chrome (推荐)
- Firefox
- Safari
- Edge

## License

© 2024 Wowlue Games. 保留所有权利。 