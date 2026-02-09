/** RollBytes 官網首頁 */
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* 主視覺區塊 */}
      <section className="text-center max-w-4xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-brand-highlight bg-clip-text text-transparent">
          RollBytes
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          用 AI 重新定義數位體驗
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          我們致力於打造下一代 AI 驅動的數位解決方案，
          讓科技真正為人服務。
        </p>
      </section>

      {/* 頁尾 */}
      <footer className="mt-auto py-8 text-center text-gray-500 text-sm">
        <p>© 2026 RollBytes. All rights reserved.</p>
      </footer>
    </main>
  )
}
