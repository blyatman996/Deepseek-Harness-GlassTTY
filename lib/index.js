// dsh-glass-tty host entry — 功能在 client 侧（设置开关 + shell.overlay 全屏覆盖层）。
// host 侧保留空 apply，保证 loader.create 能正常装配。
export const name = 'glass-tty'

export function apply() {
  // no-op host plane
}
