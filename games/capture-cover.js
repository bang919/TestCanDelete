/**
 * 游戏封面截取工具
 * 更新版本：增加自动上传到图床和URL生成功能
 */

// 添加批量抓取功能
async function captureAllCovers() {
    const results = {
        success: [],
        failed: []
    };
    
    for (const [id, game] of Object.entries(window.gameConfig || {})) {
        console.log(`正在处理游戏: ${game.title || id}`);
        
        if (!game.coverImage || !await checkImageExists(game.coverImage)) {
            try {
                const imageUrl = await captureCoverAndUpload(game.iframeUrl, id);
                if (imageUrl) {
                    results.success.push({
                        id,
                        title: game.title,
                        imageUrl
                    });
                    console.log(`✅ 成功抓取并上传: ${game.title}`);
                } else {
                    results.failed.push({
                        id,
                        title: game.title,
                        reason: "上传失败"
                    });
                    console.log(`❌ 上传失败: ${game.title}`);
                }
            } catch (error) {
                results.failed.push({
                    id,
                    title: game.title,
                    reason: error.message
                });
                console.log(`❌ 处理错误: ${game.title} - ${error.message}`);
            }
        } else {
            console.log(`⏩ 跳过，已有有效封面: ${game.title}`);
        }
    }
    
    // 显示结果摘要
    console.log("\n===== 抓取结果摘要 =====");
    console.log(`✅ 成功: ${results.success.length} 个游戏`);
    console.log(`❌ 失败: ${results.failed.length} 个游戏`);
    
    if (results.success.length > 0) {
        console.log("\n成功列表:");
        results.success.forEach(item => {
            console.log(`- ${item.title}: ${item.imageUrl}`);
        });
        
        // 生成可复制的配置更新代码
        generateConfigUpdateCode(results.success);
    }
    
    if (results.failed.length > 0) {
        console.log("\n失败列表:");
        results.failed.forEach(item => {
            console.log(`- ${item.title}: ${item.reason}`);
        });
    }
    
    return results;
}

// 生成配置更新代码
function generateConfigUpdateCode(successItems) {
    console.log("\n===== 配置更新代码 =====");
    console.log("将以下代码复制到config.js中，更新对应游戏配置:");
    
    let updateCode = "";
    successItems.forEach(item => {
        updateCode += `// 更新 ${item.title} 的封面图片\n`;
        updateCode += `window.gameConfig["${item.id}"].coverImage = "${item.imageUrl}";\n\n`;
    });
    
    console.log(updateCode);
}

// 检查图片是否存在
async function checkImageExists(url) {
    if (!url) return false;
    
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

// 抓取封面并上传到图床
async function captureCoverAndUpload(iframeUrl, gameId, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            // 步骤1: 创建并加载iframe
            console.log(`正在加载iframe: ${iframeUrl} (尝试 ${i+1}/${retries})`);
            const iframe = document.createElement('iframe');
            iframe.style.cssText = 'position: absolute; left: -9999px; width: 800px; height: 600px;';
            iframe.src = iframeUrl;
            
            document.body.appendChild(iframe);
            
            // 等待 iframe 加载，添加超时处理
            await Promise.race([
                new Promise(resolve => iframe.onload = resolve),
                new Promise((_, reject) => setTimeout(() => reject(new Error('加载超时')), 15000))
            ]);
            
            // 等待额外的渲染时间
            console.log(`等待游戏渲染...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 步骤2: 捕获屏幕截图
            console.log(`正在截取画面...`);
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            
            const ctx = canvas.getContext('2d');
            try {
                ctx.drawImage(iframe, 0, 0, 800, 600);
            } catch (error) {
                console.error(`截图失败:`, error);
                // 清理资源
                document.body.removeChild(iframe);
                throw new Error('截图失败，可能是跨域问题');
            }
            
            // 步骤3: 转换为数据URL
            const imageData = canvas.toDataURL('image/png');
            
            // 步骤4: 上传到图床 (使用假URL进行演示)
            console.log(`正在上传图片...`);
            const imageUrl = await uploadToImageHost(imageData, gameId);
            
            // 清理资源
            document.body.removeChild(iframe);
            
            // 返回图片URL
            return imageUrl;
        } catch (error) {
            console.error(`尝试 ${i + 1} 失败:`, error);
            // 如果最后一次尝试也失败了，则抛出错误
            if (i === retries - 1) throw error;
            
            // 否则等待一段时间后重试
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// 上传到图床
// 注意：这是一个模拟函数，实际使用时需要替换为真实的图床上传API
async function uploadToImageHost(imageData, gameId) {
    console.log(`模拟上传图片: ${gameId}`);
    
    // 在实际环境中，这里应该是一个API请求来上传图片
    // 例如使用ImgBB, Imgur, 七牛云等图床服务
    
    try {
        // 模拟上传延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 这是演示用途，返回一个假URL
        // 实际使用时，应该从图床API响应中获取真实URL
        return `https://example.com/game-covers/${gameId}-${Date.now()}.png`;
        
        /* 实际上传代码示例 (以ImgBB为例):
        const formData = new FormData();
        formData.append('image', imageData.split(',')[1]);
        formData.append('key', 'YOUR_API_KEY');
        
        const response = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        if (result.success) {
            return result.data.url;
        } else {
            throw new Error('上传失败');
        }
        */
    } catch (error) {
        console.error('上传失败:', error);
        throw new Error('图片上传失败');
    }
}

// 添加到页面的控制按钮
function addCaptureControls() {
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
        padding: 10px;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    const captureButton = document.createElement('button');
    captureButton.textContent = '抓取所有游戏封面';
    captureButton.style.cssText = `
        padding: 8px 12px;
        background-color: #8d6e63;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;
    captureButton.onclick = () => {
        captureAllCovers().catch(console.error);
    };
    
    controlPanel.appendChild(captureButton);
    document.body.appendChild(controlPanel);
}

// 在开发环境中自动添加控制面板
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
        console.log('封面抓取工具已加载');
        addCaptureControls();
    });
}

// 导出函数供全局使用
window.captureGameCover = {
    captureAll: captureAllCovers,
    captureSingle: captureCoverAndUpload,
    checkImage: checkImageExists
}; 