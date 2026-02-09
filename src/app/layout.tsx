import type { Metadata } from 'next'
import './globals.css'

/** 網站 metadata 設定 */
export const metadata: Metadata = {
  title: 'RollBytes — 用 AI 重新定義數位體驗',
  description: 'RollBytes 致力於打造下一代 AI 驅動的數位解決方案',
}

/** 根佈局元件 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
