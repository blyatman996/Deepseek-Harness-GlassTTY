# 📟 Deepseek Harness笨终端风格 Deepseek-Harness-Glass_Teletype

> 一个让 DSH 秒变 1970 年代“玻璃电传打字机”的插件。  
> 作者本人对“笨终端 / 玻璃终端”这个概念爱得深沉，所以把好好的现代 AI 聊天界面，硬生生塞进了一块会发光的古董 CRT 里。

[![npm version](https://img.shields.io/npm/v/dsh-glass-tty.svg)](https://www.npmjs.com/package/dsh-glass-tty)

> 已发布到 npm：`npm install dsh-glass-tty`

---

## 🧪 这是什么？

简单说：**把 DeepSeek Harness 变成一台只会发光的笨终端。**

- 没有花里胡哨的 Markdown 
- 没有侧边栏、头像、emoji 
- 只有：
  - 荧光粉在对你眨眼
  - 扫描线在缓缓爬行
  - 键盘在咔哒咔哒
  - 以及一个假装自己是 VT100 的输入框

进入 GlassTTY 后，你会觉得自己不是在和 AI 聊天，而是在和一台 1970 年的大型机对话。

---

## ✨ 特性

### 🖥 全屏玻璃终端
- 通过 `shell.overlay` 全屏覆盖 DSH
- 侧边栏、Markdown、代码高亮、emoji 全部“眼不见为净”
- 进入后自动滚到最后一页，像刚开机就连上了主机

### 🎨 六种荧光粉配方
| 型号 | 颜色 |  说明 |
|---|---|---|
| P1 | 绿 | 经典 P1 磷光绿 |
| P2 | 蓝绿 | 蓝绿/青绿观感 |
| P3 | 琥珀 | 经典 P3 暗琥珀色 |
| P4 | 白 | CRT 冷白感 |
| P11 | 蓝白 | “蓝白”色 |
| P22R | 暗红 | “暗红” |

> 在设置里选

### ⌨️ 类Vim 式操作
- 平时**不显示输入框**，界面只负责当一块安静的屏幕
- 按 `Ctrl+;` 或 `Ctrl+:`：输入框从底部冒出来
- `Enter`：发送
- `Shift+Enter`：换行
- `Esc`：取消输入
- **连按三次 Esc**：紧急逃生通道，直接退出 GlassTTY
- `Home` / `End`：回顶部 / 到底部
- `PageUp` / `PageDown`：严格翻一页
- `↑` / `↓`：严格走一行；在文本框里也会乖乖跟着光标滚动

### 🧠 信息展示政策
- **Think：完全展开**，让你看清楚 AI 脑子里到底在想什么
- **Tool / Bash / Write：折叠成摘要**，只看一眼“它干了啥”，不看过程
- **emoji：能转就转，转不了就删**，单色显示器不配拥有彩色表情

---

## 🕹 命令手册

| 命令 | 作用 |
|---|---|
| `Help` / `Man` | 显示中文帮助（10 秒后自动消失，不粘人） |
| `Exit` | 退出 GlassTTY |
| `NewConversation` | 真的新建一个会话（不是只给你看“新建会话”界面） |
| `LsConversation` | 列出会话，↑/↓ 选择，Enter 进入，PageUp/PageDown 翻页 |
| `Abort` / `stop` | 按停大模型的嘴 |
| 普通文字 | 直接发给 DSH |

---

## 🚀 快速开始

也可以通过 npm 安装：

```bash
npm install dsh-glass-tty
```

1. 把插件目录放到你的 DSH 插件收藏夹
2. 执行：
   ```bash
   dev_inject_plugin /path/to/dsh-glass-tty
   ```
3. 打开 DSH 设置 → “GlassTTY 终端模式”
4. 选一个荧光粉，打开开关
5. 开始假装你在 1970 年上班

---

## 🔤 字体说明

- **VT323**：SIL OFL 1.1，开源
- **Fusion Pixel Font**：开源
- 两个字体都已**内嵌进插件**

---

## 📜 许可证

- 插件代码：BSD-3-Clause
- 字体：各自的开源许可证（VT323 / Fusion Pixel Font）

---

## ⚠️ 免责声明

本插件可能导致：
- 过度沉迷键盘操作
- 看到普通网页 UI 时觉得“太现代了，受不了”
- 在荧光绿屏幕前产生一种 1970 年代程序员的错觉

如果出现以上症状，请按三下 `Esc` 回到现实世界。

# 📟 Deepseek Harness Dumb Terminal Style Deepseek-Harness-Glass_Teletype

> A plugin that instantly turns DSH into a 1970s “glass teletype”.  
> The author has a deep and abiding love for the concept of “dumb terminals / glass terminals,” so they crammed a perfectly good modern AI chat interface into a glowing antique CRT.

---

## 🧪 What is this?

In short: **turn DeepSeek Harness into a dumb terminal that only glows.**

- No fancy Markdown
- No sidebar, avatars, emoji
- Only:
  - phosphor blinking at you
  - scan lines slowly crawling
  - keyboard clicking and clacking
  - and an input box pretending to be a VT100

After entering GlassTTY, you'll feel like you're not chatting with an AI, but talking to a 1970s mainframe.

---

## ✨ Features

### 🖥 Fullscreen glass terminal
- Uses `shell.overlay` to cover DSH fullscreen
- Sidebar, Markdown, code highlighting, emoji all “out of sight, out of mind”
- Automatically scrolls to the last page after entering, like you just powered on and connected to the host

### 🎨 Six phosphor recipes
| Model | Color | Description |
|---|---|---|
| P1 | Green | Classic P1 phosphor green |
| P2 | Blue-green | Blue-green / cyan-green look |
| P3 | Amber | Classic P3 dark amber |
| P4 | White | CRT cool white feel |
| P11 | Blue-white | “Blue-white” color |
| P22R | Dark red | “Dark red” |

> Choose in settings

### ⌨️ Vim-like controls
- Normally **the input box is hidden**; the screen just acts as a quiet display
- Press `Ctrl+;` or `Ctrl+:`: the input box pops up from the bottom
- `Enter`: send
- `Shift+Enter`: newline
- `Esc`: cancel input
- **Press `Esc` three times**: emergency escape hatch, directly exits GlassTTY
- `Home` / `End`: go to top / bottom
- `PageUp` / `PageDown`: strictly turn one page
- `↑` / `↓`: strictly move one line; in the text box it will also obediently scroll with the cursor

### 🧠 Information display policy
- **Think: fully expanded** so you can see exactly what the AI is thinking
- **Tool / Bash / Write: collapsed into a summary** — just a glance at “what it did”, not the process
- **emoji: convert if possible, delete if not** — monochrome displays don’t deserve colored emojis

---

## 🕹 Command reference

| Command | Action |
|---|---|
| `Help` / `Man` | Show Chinese help (auto-dismisses after 10 seconds, not clingy) |
| `Exit` | Exit GlassTTY |
| `NewConversation` | Actually creates a new conversation (not just showing you the “new conversation” screen) |
| `LsConversation` | List conversations, ↑/↓ to select, Enter to enter, PageUp/PageDown to page |
| `Abort` / `stop` | Shut the big model’s mouth |
| Plain text | Sent directly to DSH |

---

## 🚀 Quick start

You can also install via npm:

```bash
npm install dsh-glass-tty
```

1. Put the plugin directory into your DSH plugin favorites
2. Run:
   ```bash
   dev_inject_plugin /path/to/dsh-glass-tty
   ```
3. Open DSH settings → “GlassTTY terminal mode”
4. Pick a phosphor and flip the switch
5. Start pretending you’re working in 1970

---

## 🔤 Font notes

- **VT323**: SIL OFL 1.1, open source
- **Fusion Pixel Font**: open source
- Both fonts are **embedded in the plugin**

---

## 📜 License

- Plugin code: BSD-3-Clause
- Fonts: their respective open-source licenses (VT323 / Fusion Pixel Font)

---

## ⚠️ Disclaimer

This plugin may cause:
- excessive addiction to keyboard-driven operation
- seeing normal web UIs and feeling “too modern, can’t stand it”
- developing the illusion of being a 1970s programmer in front of a phosphor-green screen

If you experience any of these symptoms, press `Esc` three times to return to the real world.
