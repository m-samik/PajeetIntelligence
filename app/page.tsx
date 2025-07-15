import React from "react";
import { Gauge, Laugh, TrendingUp, Zap, Brain, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#EAEAEA] via-[#F0F0F0] to-[#D8D8D8] min-h-screen text-center p-6 text-[#1A1A1A] font-sans">
      {/* Header with Logo */}
      <header className="flex justify-center items-center gap-4 mb-10">
        <Image
          src="/pajeetlogo.jpeg"
          alt="Pajeet Intelligence Logo"
          width={100}
          height={100}
          className="rounded-full shadow-md border border-[#4A453F]"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4A453F] tracking-tight">
          Pajeet Intelligence
        </h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-black text-[#4A453F] mb-6 drop-shadow">
          Decode The Desi Trading Chaos
        </h2>
        <p className="text-lg md:text-xl text-[#3B2E25] max-w-2xl mx-auto">
          Laugh at losses. Roast your risk. Because trading tips from your uncle are just the beginning.
        </p>
        <button className="mt-8 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-[#1A1A1A] px-8 py-4 rounded-xl text-lg transition-all font-bold shadow-md hover:scale-105">
          Browse Meme Market
        </button>
      </section>

      {/* Animated Market Sentiment Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border border-[#DDD]">
          <div className="hover:scale-105 transition-transform">
            <Zap className="mx-auto text-[#2AE7E9] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-[#4A453F]">FOMO Level: 98%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <ShieldAlert className="mx-auto text-[#6B7F8C] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-[#4A453F]">Panic Index: 85%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <Brain className="mx-auto text-[#4A453F] w-12 h-12 mb-2" />
            <p className="text-xl font-bold text-[#4A453F]">WhatsApp Accuracy: 6%</p>
          </div>
        </div>
      </section>

      {/* Feature Cards with Icons and Animation */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
        <div className="bg-[#F0F0F0] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#4A453F]">🔥 Meme of the Day</h2>
          <p className="text-[#3B2E25]">When you enter at ATH because ‘ab toh chalega.’</p>
        </div>
        <div className="bg-[#F0F0F0] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#6B7F8C]">🧠 Pajeet’s Tip</h2>
          <p className="text-[#3B2E25]">
            Diversify by investing in every IPO your barber recommends.
          </p>
        </div>
        <div className="bg-[#F0F0F0] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
          <h2 className="text-2xl font-extrabold mb-3 text-[#2AE7E9]">🌶 Market Masala</h2>
          <p className="text-[#3B2E25]">
            Sensex crashes 500 pts after Mercury retrograde hits trader confidence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-[#6B7F8C] pt-12 pb-8">
        <p>&copy; 2025 Pajeet Intelligence. Built for laughs, not financial advice.</p>
      </footer>
    </main>
  );
}
