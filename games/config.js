// 使用 window 对象来确保全局访问
window.gameCategories = {
    "action": {
        name: "动作",
        nameEn: "Action",
        icon: "fas fa-bolt"
    },
    "strategy": {
        name: "策略",
        nameEn: "Strategy",
        icon: "fas fa-chess"
    },
    "puzzle": {
        name: "益智",
        nameEn: "Puzzle",
        icon: "fas fa-puzzle-piece"
    }
};

// 初始化游戏配置对象
window.gameConfig = {};

// 添加游戏配置
window.gameConfig["plants-vs-zombies"] = {
    title: "植物大战僵尸",
    titleEn: "Plants vs. Zombies",
    category: "strategy",
    description: "经典的塔防策略游戏，用植物击退僵尸大军",
    descriptionEn: "Classic tower defense strategy game, use plants to defeat zombie hordes",
    iframeUrl: "https://roblnet13.github.io/pvz/game/iframe.html",
    coverImage: "https://lh3.googleusercontent.com/proxy/RWQ9nsCDdD3dw4Zo7P8VV0X5B5mdEVxAoqBkn2vdI0o2LwTgWcE3d52yw__HMq2l3u0VKKiZQaYJu1faWaXijBOYspTLUhtg-cg0ePBUUJIYGlY",
    about: "植物大战僵尸是一款广受欢迎的塔防游戏，玩家需要种植不同功能的植物来抵御入侵家园的僵尸。游戏结合了策略元素和轻松的游戏玩法，适合各个年龄段的玩家。每种植物都有独特的能力，玩家需要合理安排资源，建立有效的防线。",
    aboutEn: "Plants vs. Zombies is a widely popular tower defense game where players need to plant different functional plants to defend their home against invading zombies. The game combines strategic elements with casual gameplay suitable for players of all ages. Each plant has unique abilities, and players need to manage resources wisely to establish an effective defense line.",
    controls: [
        "使用鼠标选择和放置植物",
        "点击植物卡片然后点击草坪格子放置植物",
        "收集阳光资源来种植更多植物",
        "合理布局防御阵型抵御僵尸入侵"
    ],
    controlsEn: [
        "Use mouse to select and place plants",
        "Click plant card then click lawn grid to place plants",
        "Collect sun resources to plant more plants",
        "Arrange defense formation wisely to resist zombie invasion"
    ],
    features: [
        "多种不同功能的植物可供选择",
        "各种类型的僵尸敌人",
        "日间和夜间不同的游戏机制",
        "有趣的视觉风格和音效"
    ],
    featuresEn: [
        "Various plants with different functions to choose from",
        "Different types of zombie enemies",
        "Different game mechanics for day and night",
        "Fun visual style and sound effects"
    ]
};

window.gameConfig["monster-survivors"] = {
    title: "怪物幸存者",
    titleEn: "Monster Survivors",
    category: "action",
    description: "生存动作游戏，击败无尽的怪物浪潮",
    descriptionEn: "Survival action game, defeat endless waves of monsters",
    iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    coverImage: "https://assetstorev1-prd-cdn.unity3d.com/key-image/8ef6fd8c-ccff-4c79-96f4-f2c7cd54abe7.png",
    about: "怪物幸存者是一款自动射击的生存动作游戏，玩家控制角色在不断涌来的怪物浪潮中生存。随着游戏进行，玩家可以解锁新的武器和能力，提升自己的战斗力。游戏具有简单上手但富有深度的游戏机制，玩家需要不断优化自己的装备和技能组合，以在越来越困难的关卡中生存。",
    aboutEn: "Monster Survivors is an auto-shooting survival action game where players control a character to survive in waves of incoming monsters. As the game progresses, players can unlock new weapons and abilities to enhance their combat power. The game features easy-to-learn but deep gameplay mechanics, requiring players to continuously optimize their equipment and skill combinations to survive in increasingly difficult levels.",
    controls: [
        "WASD或方向键控制角色移动",
        "自动攻击最近的敌人",
        "收集经验宝石升级",
        "升级时选择新武器或提升现有武器"
    ],
    controlsEn: [
        "WASD or arrow keys to control character movement",
        "Automatically attack nearest enemies",
        "Collect experience gems to level up",
        "Choose new weapons or upgrade existing ones when leveling up"
    ],
    features: [
        "无尽的怪物浪潮",
        "多种武器和能力可解锁",
        "随机生成的游戏环境",
        "独特的像素艺术风格"
    ],
    featuresEn: [
        "Endless waves of monsters",
        "Multiple weapons and abilities to unlock",
        "Randomly generated game environments",
        "Unique pixel art style"
    ]
};

// 添加经典HTML游戏
window.gameConfig["classic-html"] = {
    title: "我们成为我们所见",
    titleEn: "WE BECOME WHAT WE BEHOLD",
    description: "一个关于新闻循环、恶性循环和无限循环的游戏",
    descriptionEn: "A game about news cycles, vicious cycles, infinite cycles",
    coverImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1103210/header.jpg?t=1563495717",
    iframeUrl: "https://html-classic.itch.zone/html/300364/index.html?v=1542781840",
    category: "puzzle",
    about: "《我们成为我们所见》是一款由Nicky Case创作的实验性游戏，讲述了媒体如何塑造我们的观点和社会。游戏通过简单而有力的交互方式，展示了新闻循环如何放大社会分化，以及我们如何被我们所消费的媒体所影响。这款游戏仅需几分钟就能完成，但其寓意深远。",
    aboutEn: "WE BECOME WHAT WE BEHOLD is an experimental game created by Nicky Case that explores how media shapes our views and society. Through simple yet powerful interactions, the game demonstrates how news cycles amplify social divisions and how we are influenced by the media we consume. The game takes just a few minutes to complete but leaves a lasting impression.",
    controls: [
        "使用鼠标操作",
        "点击拍摄照片",
        "跟随游戏提示进行"
    ],
    controlsEn: [
        "Use mouse for interaction",
        "Click to take photos",
        "Follow in-game instructions"
    ],
    features: [
        "富有创意的社会评论",
        "简单但意义深远的游戏机制",
        "由知名独立游戏开发者Nicky Case创作",
        "获得高度评价的实验性游戏（4.8/5分）"
    ],
    featuresEn: [
        "Creative social commentary",
        "Simple yet meaningful game mechanics",
        "Created by renowned indie developer Nicky Case",
        "Highly rated experimental game (4.8/5 stars)"
    ]
};

// 添加Rhythm Doctor游戏
window.gameConfig["rhythm-doctor"] = {
    title: "周五狂欢夜",
    titleEn: "FRIDAY NIGHT FUNKIN",
    category: "action",
    description: "热门音乐节奏对战游戏",
    descriptionEn: "Popular rhythm battle game",
    iframeUrl: "https://html-classic.itch.zone/html/2876359-1104083/index.html?v=1732313800games/rhythm-doctor/index.html",
    coverImage: "https://img0.baidu.com/it/u=2729103138,1378212111&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
    about: "FRIDAY NIGHT FUNKIN是一款流行的音乐节奏游戏，玩家将扮演Boyfriend，通过按键配合音乐节拍与各种角色进行唱歌对决。游戏具有鲜明的卡通风格，充满活力的角色和朗朗上口的音乐，让玩家在节奏对战中体验紧张刺激的音乐对决。",
    aboutEn: "FRIDAY NIGHT FUNKIN is a popular rhythm game where players take on the role of Boyfriend who must compete in musical rap battles against various characters by pressing keys in time with the music. The game features a distinctive cartoon style, vibrant characters, and catchy music that creates an exciting musical showdown experience.",
    controls: [
        "使用方向键按照节拍按下对应按键",
        "跟随音乐节奏和屏幕指示器",
        "在正确的时机按下按键赢得对决",
        "随着关卡进展难度会逐渐增加"
    ],
    controlsEn: [
        "Use arrow keys to press corresponding buttons on beat",
        "Follow the music rhythm and on-screen indicators",
        "Press keys at the right time to win the battle",
        "Difficulty increases as you progress through levels"
    ],
    features: [
        "独特的卡通艺术风格",
        "多样化的角色和对手",
        "精心设计的原创音乐曲目",
        "充满挑战性的节奏游戏玩法",
        "令人愉悦的音乐对战体验"
    ],
    featuresEn: [
        "Unique cartoon art style",
        "Diverse characters and opponents",
        "Carefully designed original music tracks",
        "Challenging rhythm gameplay",
        "Enjoyable musical battle experience"
    ]
};

// 确保文件加载完成后输出调试信息
console.log('config.js loaded:', {
    categories: window.gameCategories,
    games: window.gameConfig
}); 