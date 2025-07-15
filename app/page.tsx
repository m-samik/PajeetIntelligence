import React from "react";
import { Gauge, Laugh, TrendingUp, Zap, Brain, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] min-h-screen text-center p-6 text-white font-sans">
      {/* Header with Logo */}
      <header className="flex justify-center items-center gap-4 mb-10">
        <Image
          src="/pajeetlogo.jpeg"
          alt="Pajeet Intelligence Logo"
          width={100}
          height={100}
          className="rounded-full shadow-md border border-[#2AE7E9]"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2AE7E9] tracking-tight">
          Pajeet Intelligence
        </h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow">
          Your AI Trading Sidekick
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Humor + AI + Trading Culture. Let’s decode India’s chaotic market logic — one meme at a time.
        </p>
        <button className="mt-8 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black px-8 py-4 rounded-xl text-lg transition-all font-bold shadow-md hover:scale-105">
          Start Laughing
        </button>
      </section>

      {/* AI Metrics / Market Sentiment */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto bg-[#1e1e1e] shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border border-[#333]">
          <div className="hover:scale-105 transition-transform">
            <Zap className="mx-auto text-[#2AE7E9] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-white">FOMO Score: 98%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <ShieldAlert className="mx-auto text-[#ef4f94] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-white">Panic Index: 85%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <Brain className="mx-auto text-[#c5f82a] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-white">WhatsApp Accuracy: 6%</p>
          </div>
        </div>
      </section>

      {/* Feature Cards with AI-like Styling */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
        <div className="bg-[#1e1e1e] rounded-2xl shadow-lg border border-[#333] p-6 hover:border-[#2AE7E9] transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#2AE7E9]">🧠 Meme of the Day</h2>
          <p className="text-gray-300">When you enter at ATH because ‘ab toh chalega.’</p>
        </div>
        <div className="bg-[#1e1e1e] rounded-2xl shadow-lg border border-[#333] p-6 hover:border-[#c5f82a] transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#c5f82a]">🤖 Pajeet’s AI Tip</h2>
          <p className="text-gray-300">
            Diversify by investing in every IPO your barber recommends.
          </p>
        </div>
        <div className="bg-[#1e1e1e] rounded-2xl shadow-lg border border-[#333] p-6 hover:border-[#ef4f94] transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#ef4f94]">📉 Market Masala</h2>
          <p className="text-gray-300">
            Sensex crashes 500 pts after Mercury retrograde hits trader confidence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 pt-12 pb-8">
        <p>&copy; 2025 Pajeet Intelligence. Powered by Memes & Machine Learning.</p>
      </footer>
    </main>
  );
}