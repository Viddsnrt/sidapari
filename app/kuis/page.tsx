// app/kuis/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { kuisData } from '../../data/data';

export default function Kuis() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isStarted, setIsStarted] = useState(false); // State untuk layar pembuka kuis
  
  // State interaksi soal
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Fungsi: Pilih Jawaban
  const handleAnswer = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === kuisData[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  // Fungsi: Lanjut Soal / Selesai
  const handleNextQuestion = () => {
    if (currentIndex + 1 < kuisData.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  // Fungsi: Berhenti Paksa (Quit)
  const handleQuit = () => {
    if (confirm("Yakin ingin mengakhiri kuis? Progresmu akan hilang.")) {
      setShowResult(true); // Langsung lompat ke hasil dengan skor saat ini
    }
  };

  // Fungsi: Ulangi Kuis
  const resetKuis = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
    setSelectedOption(null);
    setIsStarted(false); // Kembali ke layar awal
  };

  // Kalkulasi Skor
  const progress = ((currentIndex + 1) / kuisData.length) * 100;
  // Hitung skor akhir berdasarkan jumlah soal yang SUDAH dijawab (jika quit di tengah) atau total soal
  // Agar adil, jika quit di tengah, pembaginya tetap total soal.
  const finalScore = Math.round((score / kuisData.length) * 100);

  // --- RENDER LAYAR PEMBUKA (START SCREEN) ---
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl max-w-lg w-full text-center shadow-2xl relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-900/30">
            <span className="text-4xl">🧩</span>
          </div>
          <h1 className="text-3xl font-bold font-serif mb-4 text-white">Uji Wawasan Budaya</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Seberapa jauh kamu mengenal adat, sejarah, dan bahasa Batak? Jawab {kuisData.length} pertanyaan seru ini untuk membuktikannya!
          </p>
          <button 
            onClick={() => setIsStarted(true)}
            className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
          >
            MULAI TANTANGAN
          </button>
          <Link href="/" className="block mt-4 text-gray-500 hover:text-white text-sm font-medium transition">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-2xl relative z-10">
        
        {/* Header Kuis (Kecil) */}
        <div className="flex justify-between items-center mb-8">
           <div className="text-left">
             <h2 className="text-xl font-bold font-serif text-white">Quiz Zone</h2>
             <span className="text-xs text-gray-500 uppercase tracking-widest">Arta Batak Education</span>
           </div>
           <button 
             onClick={handleQuit}
             className="text-gray-400 hover:text-red-500 text-sm font-bold border border-gray-700 hover:border-red-500 px-4 py-2 rounded-full transition"
           >
             ✕ Akhiri Kuis
           </button>
        </div>

        {showResult ? (
          /* --- TAMPILAN HASIL AKHIR --- */
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl animate-fade-in-up">
            <h2 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Hasil Akhir</h2>
            
            <div className="relative inline-block mb-8">
              {/* Lingkaran Skor dengan Gradient */}
              <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-red-500 to-blue-500">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                   <span className="text-5xl font-bold text-white mb-1">{finalScore}</span>
                   <span className="text-xs text-gray-500 font-bold uppercase">Poin</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-serif text-white mb-4">
              {finalScore === 100 ? "Sempurna! Raja Adat! 👑" :
               finalScore >= 80 ? "Luar Biasa! 🌟" :
               finalScore >= 60 ? "Cukup Bagus! 👍" : "Jangan Menyerah! 📚"}
            </h3>

            <p className="mb-10 text-gray-400 leading-relaxed max-w-md mx-auto">
              {finalScore >= 80 
                ? "Pengetahuan budayamu sangat mendalam. Kamu layak menjadi pelestari budaya sejati!" 
                : "Masih banyak hal menarik tentang budaya Batak yang bisa kamu pelajari lagi di menu Edukasi."}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={resetKuis} 
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl font-bold transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>↺</span> Ulangi Kuis
              </button>
              <Link 
                href="/edukasi"
                className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-8 py-3 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >
                <span>📖</span> Belajar Lagi
              </Link>
            </div>
          </div>
        ) : (
          /* --- TAMPILAN SOAL --- */
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-1.5">
              <div 
                className="bg-gradient-to-r from-red-600 to-red-400 h-1.5 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(220,38,38,0.7)]" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-red-300 bg-red-900/30 border border-red-800/50 px-3 py-1 rounded-full tracking-wider">
                  QUESTION {currentIndex + 1} / {kuisData.length}
                </span>
                <span className="text-xs text-gray-500 font-mono bg-gray-900 px-2 py-1 rounded border border-gray-800">
                   SCORE: {score}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white font-serif leading-snug">
                {kuisData[currentIndex].question}
              </h2>
              
              <div className="space-y-4">
                {kuisData[currentIndex].options.map((opt, idx) => {
                  // Logika Warna Tombol Gelap
                  let buttonStyle = "w-full text-left p-5 rounded-xl border transition-all duration-300 font-medium text-lg relative group overflow-hidden ";
                  
                  if (isAnswered) {
                    if (opt === kuisData[currentIndex].answer) {
                      // JAWABAN BENAR (Hijau + Glow)
                      buttonStyle += "bg-green-900/30 border-green-500/50 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]"; 
                    } else if (opt === selectedOption) {
                      // JAWABAN SALAH DIPILIH (Merah)
                      buttonStyle += "bg-red-900/30 border-red-500/50 text-red-300"; 
                    } else {
                      // OPSI LAIN (Gelap/Mati)
                      buttonStyle += "bg-gray-800/30 border-gray-800 text-gray-600 opacity-40 blur-[1px]"; 
                    }
                  } else {
                    // BELUM DIJAWAB (Normal)
                    buttonStyle += "bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white"; 
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      disabled={isAnswered}
                      className={buttonStyle}
                    >
                      <div className="relative z-10 flex justify-between items-center">
                         <span>{opt}</span>
                         {isAnswered && opt === kuisData[currentIndex].answer && <span className="text-green-400 font-bold">✓</span>}
                         {isAnswered && opt === selectedOption && opt !== kuisData[currentIndex].answer && <span className="text-red-400 font-bold">✕</span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* PEMBAHASAN & TOMBOL LANJUT */}
              {isAnswered && (
                <div className="mt-10 animate-fade-in-up">
                  <div className={`p-6 rounded-2xl border mb-6 ${
                    selectedOption === kuisData[currentIndex].answer 
                      ? 'bg-green-900/10 border-green-500/30' 
                      : 'bg-red-900/10 border-red-500/30'
                  }`}>
                    <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${
                      selectedOption === kuisData[currentIndex].answer ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {selectedOption === kuisData[currentIndex].answer ? "✅ Benar Sekali!" : "❌ Kurang Tepat"}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="text-white font-bold opacity-80 block mb-1">Penjelasan:</span>
                      {kuisData[currentIndex].explanation}
                    </p>
                  </div>

                  <button 
                    onClick={handleNextQuestion}
                    className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex justify-center items-center gap-2"
                  >
                    {currentIndex + 1 === kuisData.length ? "LIHAT SKOR AKHIR" : "SOAL BERIKUTNYA"}
                    <span className="text-xl">&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}