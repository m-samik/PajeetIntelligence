import React from "react";
import { Gauge, Laugh, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#EAEAEA] min-h-screen text-center p-6 text-[#1A1A1A]">
      {/* Header with Logo */}
      <header className="flex justify-center items-center gap-4 mb-10">
        <Image
          src="/pajeetlogo.jpeg"
          alt="Pajeet Intelligence Logo"
          width={100}
          height={100}
          className="rounded-full shadow-md"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A453F]">
          Pajeet Intelligence
        </h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#4A453F] mb-4">
          Welcome to Pajeet Intelligence
        </h2>
        <p className="text-lg md:text-xl text-[#3B2E25] max-w-xl mx-auto">
          The Indian Trader’s Guide to Chaos. Laugh, learn, and lose money together.
        </p>
        <button className="mt-6 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-[#1A1A1A] px-6 py-3 rounded-full text-lg transition-all font-semibold">
          Browse Memes
        </button>
      </section>

      {/* Sentiment Meter */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto bg-[#F0F0F0] shadow-2xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <Gauge className="mx-auto text-[#2AE7E9] w-10 h-10" />
            <p className="text-xl font-bold text-[#4A453F]">FOMO: 98%</p>
          </div>
          <div>
            <TrendingUp className="mx-auto text-[#6B7F8C] w-10 h-10" />
            <p className="text-xl font-bold text-[#4A453F]">Panic Level: 85%</p>
          </div>
          <div>
            <Laugh className="mx-auto text-[#4A453F] w-10 h-10" />
            <p className="text-xl font-bold text-[#4A453F]">WhatsApp Tip Accuracy: 6%</p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
        <div className="bg-[#F0F0F0] rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#4A453F]">Meme of the Day</h2>
          <p className="text-[#3B2E25]">When you enter at ATH because ‘ab toh chalega.’</p>
        </div>
        <div className="bg-[#F0F0F0] rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#6B7F8C]">Pajeet’s Tip</h2>
          <p className="text-[#3B2E25]">
            Diversify by investing in every IPO your barber recommends.
          </p>
        </div>
        <div className="bg-[#F0F0F0] rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2 text-[#2AE7E9]">Market Masala</h2>
          <p className="text-[#3B2E25]">
            Sensex falls 500 pts after Mercury retrograde hits trader confidence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-[#6B7F8C] pt-10 pb-6">
        <p>&copy; 2025 Pajeet Intelligence. Built for laughs, not financial advice.</p>
      </footer>
    </main>
  );
}