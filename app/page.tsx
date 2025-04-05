export default function LinkHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">@cameoandryan</h1>
      <p className="mb-8 text-center text-lg max-w-md">Follow our RV adventures, boondocking tips, and behind-the-scenes moments from the road!</p>

      <div className="w-full max-w-sm space-y-4">
        <a href="https://youtube.com/@cameoandryan" target="_blank" className="block w-full py-3 text-center rounded-2xl bg-red-600 hover:bg-red-700 font-semibold shadow-lg transition">📺 Watch on YouTube</a>
        <a href="https://instagram.com/cameoandryan" target="_blank" className="block w-full py-3 text-center rounded-2xl bg-pink-500 hover:bg-pink-600 font-semibold shadow-lg transition">📸 Follow on Instagram</a>
        <a href="#" className="block w-full py-3 text-center rounded-2xl bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-lg transition">🌐 Visit Our Website</a>
        <a href="#" className="block w-full py-3 text-center rounded-2xl bg-yellow-400 hover:bg-yellow-500 font-semibold shadow-lg transition">🛒 Our Favorite Gear</a>
      </div>

      <footer className="mt-12 text-sm text-gray-400">Made with ❤️ on the road</footer>
    </div>
  );
}
