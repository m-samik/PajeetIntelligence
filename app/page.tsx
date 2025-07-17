"use client";

import React, { useRef, useState } from "react";
import { Zap, Brain, ShieldAlert, Send } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6"; // You must have react-icons installed


export default function Home() {
  const [chat, setChat] = useState("");
  const [responses, setResponses] = useState<string[]>([]);

  const gifs = [
    "/gifs/ajeet_cover.png",
    "/gifs/pumpit.gif",
    "/gifs/giphy.gif"
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Playback failed:", err);
      });
    }
  };

  const handleSend = () => {
    if (!chat.trim()) return;

    const userMessage = `🧑 You: ${chat}`;
    setResponses((prev) => [...prev, userMessage]);

    const replies = [
      "🤖 PajeetBot: That stock's chart looks like my ECG after Maggi overdose.",
      "🤖 PajeetBot: Buying high and selling low? Bold strategy.",
      "🤖 PajeetBot: Your portfolio needs more prayers than analysis.",
      "🤖 PajeetBot: If red candles gave heat, you'd be toasty by now.",
      "🤖 PajeetBot: Multibagger dreams, single digit reality.",
      "🤖 PajeetBot: Heard this tip on WhatsApp? Congrats, you’re late.",
      "🤖 PajeetBot: Did you DYOR or just vibe with the chart?",
      "🤖 PajeetBot: HODL? More like ‘Hope On Daily Losses.’",
      "🤖 PajeetBot: Next time, invest in samosas. At least they deliver taste."
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    setTimeout(() => {
      setResponses((prev) => [
        ...prev,
        `${randomReply} <img src='${randomGif}' class='inline-block w-20 h-20 rounded-md ml-2'/>`
      ]);
    }, 1000);

    setChat("");
  };

  const features = [
    { title: "🧠 Meme of the Day", color: "#2AE7E9", text: "When you enter at ATH because ‘ab toh chalega.’" },
    { title: "🤖 Pajeet’s AI Tip", color: "#c5f82a", text: "Diversify by investing in every IPO your barber recommends." },
    { title: "📉 Market Masala", color: "#ef4f94", text: "Sensex crashes 500 pts after Mercury retrograde hits trader confidence." }
  ];

  return (
    <main className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] min-h-screen text-center p-6 text-white font-sans overflow-hidden">

      {/* Floating Memes */}
      <div className="fixed top-10 left-10 z-10 animate-ping">
        <Image src="/gifs/ajeet_cover.png" alt="Ajeet" width={50} height={50} />
      </div>
      {/* <div className="fixed bottom-10 right-10 z-10 animate-pulse">
        <Image src="/gifs/giphy.gif" alt="Pajeet Crazy" width={150} height={150} />
      </div> */}

      {/* Header */}
      <motion.header
        className="flex justify-center items-center gap-4 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.header>
      {/* AUDIO Element */}
      <audio ref={audioRef} src="/scammer.mp3" loop preload="auto" />
      {/* Play Button */}
      <button
        onClick={handlePlayAudio}
        className="fixed top-6 right-6 z-50 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black font-bold py-2 px-4 rounded-full shadow animate-pulse transition-all"
      >
        🔊 Dont Click Me
      </button>
      {/* Hero Section */}
      <motion.section
        className="text-center py-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center px-4 py-[6px] rounded-full bg-[#2AE7E9] border border-[#4BE0E4] shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)] text-[#000000] font-medium text-sm mb-8">
          <span className="mr-2">🎉</span>
          <span>CA: To be announced</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow animate-pulse">
          Your AI Trading Sidekick
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Humor + AI + Trading Culture. Let’s decode India’s chaotic market logic — one meme at a time.
        </p>
        <a href="#chat" className="inline-block mt-8 bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black px-8 py-4 rounded-xl text-lg transition-all font-bold shadow-md hover:scale-110">
          Start Laughing
        </a>
      </motion.section>

      {/* AI Metrics */}
      <section className="py-12">
        <motion.div
          className="max-w-5xl mx-auto bg-[#1e1e1e] shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border border-[#333]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="hover:scale-105 transition-transform">
            <Zap className="mx-auto text-[#2AE7E9] w-12 h-12 mb-2 animate-spin" />
            <p className="text-xl font-bold text-white">FOMO Score: 98%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <ShieldAlert className="mx-auto text-[#ef4f94] w-12 h-12 mb-2 animate-bounce" />
            <p className="text-xl font-bold text-white">Panic Index: 85%</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <Brain className="mx-auto text-[#c5f82a] w-12 h-12 mb-2 animate-spin" />
            <p className="text-xl font-bold text-white">WhatsApp Accuracy: 6%</p>
          </div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#1e1e1e] rounded-2xl shadow-lg border border-[#333] p-6 hover:scale-105 hover:border-white transition duration-300"
            whileHover={{ rotate: [0, 3, -3, 0], scale: 1.05 }}
          >
            <h2 className="text-2xl font-extrabold mb-3" style={{ color: item.color }}>{item.title}</h2>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Chat Section */}
      <motion.section
        id="chat"
        className="bg-[#1a1a1a] py-12 px-4 rounded-2xl max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 animate-bounce">💬 Chat with PajeetBot</h3>
        <div className="bg-[#121212] border border-[#333] rounded-lg p-4 h-60 overflow-y-auto mb-4 text-left">
          <AnimatePresence>
            {responses.map((msg, i) => (
              <motion.div
                key={i}
                className="text-sm text-gray-300 mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                dangerouslySetInnerHTML={{ __html: msg }}
              />
            ))}
          </AnimatePresence>
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
            className="bg-[#2AE7E9] hover:bg-[#4BE0E4] text-black px-4 py-2 rounded-lg flex items-center gap-1 font-semibold animate-pulse"
          >
            <Send size={16} /> Send
          </button>
        </div>
      </motion.section>

      {/* Footer */}

      <footer className="text-sm text-gray-500 pt-12 pb-8 text-center animate-fade-in">
        <p>&copy; 2025 Pajeet Intelligence. Powered by Memes & Machine Learning.</p>
        <p className="mt-2">
          Pajeet Intelligence, Built on ₹100 budget, powered by ChatGPT free trial and Binance referrals.
        </p>

        {/* Glowing Animated Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-6 text-2xl mb-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white glow-icon hover:text-[#1DA1F2]"
          >
            <FaXTwitter className="icon-animate" />
          </a>
        
        </div>
      </footer>
      <section>
        <div style={{ height: "30px", padding: "0px", margin: "-22px", width: "" }}>
          <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no" width="100%" height="36px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} style={{ border: "0", margin: "0", padding: "0" }}></iframe>
        </div>
      </section>
    </main>
  );
}