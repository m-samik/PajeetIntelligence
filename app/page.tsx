"use client";

import React, { useState } from "react";
import { Gauge, Laugh, TrendingUp, Zap, Brain, ShieldAlert, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [chat, setChat] = useState("");
  const [responses, setResponses] = useState<string[]>([]);

  const handleSend = () => {
    if (!chat.trim()) return;

    const responsesPool = [
      "🤖 PajeetBot: You're probably buying high again, huh?",
      "🤖 PajeetBot: Did your uncle’s WhatsApp tip bring you here?",
      "🤖 PajeetBot: Remember, if it sounds like a multibagger... run.",
      "🤖 PajeetBot: Buying the dip? More like digging your grave.",
      "🤖 PajeetBot: That stock’s chart looks like my ECG during exam week.",
      "🤖 PajeetBot: Technical analysis won’t save emotional trades.",
      "🤖 PajeetBot: If FOMO had a face, it’d be yours right now."
    ];

    const randomResponse = responsesPool[Math.floor(Math.random() * responsesPool.length)];
    setResponses((prev) => [...prev, randomResponse]);
    setChat("");
  };

  return (
    <main className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] min-h-screen text-center p-6 text-white font-sans">
      {/* Header with Logo */}
      <header className="flex justify-center items-center gap-4 mb-10">
        <Image
          src="/pajeetlogo.jpeg"
          alt="Pajeet Intelligence Logo"
          width={60}
          height={60}
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
        <a href="#chat" className="inline-block mt-8 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black px-8 py-4 rounded-xl text-lg transition-all font-bold shadow-md hover:scale-105">
          Start Laughing
        </a>
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

      {/* Simple Chat Section */}
      <section id="chat" className="bg-[#1a1a1a] py-12 px-4 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6">💬 Chat with PajeetBot</h3>
        <div className="bg-[#121212] border border-[#333] rounded-lg p-4 h-60 overflow-y-auto mb-4 text-left">
          {responses.map((msg, i) => (
            <p key={i} className="text-sm text-gray-300 mb-2">{msg}</p>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-grow bg-[#222] text-white p-3 rounded-lg border border-[#444] focus:outline-none"
            placeholder="Ask PajeetBot anything..."
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black px-4 py-2 rounded-lg flex items-center gap-1 font-semibold"
          >
            <Send size={16} /> Send
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 pt-12 pb-8 text-center">
        <p>&copy; 2025 Pajeet Intelligence. Powered by Memes & Machine Learning.</p>
        <p className="mt-2">Pajeet Intelligence, Built on ₹100 budget, powered by ChatGPT free trial and Binance referrals.</p>
        <p className="mt-1 text-xs text-gray-600">CA: </p>
      </footer>
    </main>
  );
}
