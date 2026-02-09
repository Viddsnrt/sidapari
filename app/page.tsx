// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-900 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-red-950 opacity-90"></div>
          {/* Animated Blob */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-800 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 rounded-full blur-[150px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-900/30 border border-red-800 text-red-400 text-xs font-bold tracking-widest uppercase mb-2">
              Ethno-Computing Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
              Revitalisasi <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                Budaya Toba
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Arta Batak hadir menjembatani warisan leluhur dengan teknologi Society 5.0. 
              Temukan identitas margamu, validasi hubungan adat (Partuturon), dan lestarikan budaya lewat cara yang modern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/cek-marga" className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold rounded-xl transition transform hover:-translate-y-1 shadow-lg shadow-red-900/30 text-center">
                Mulai Cek Marga
              </Link>
              <Link href="/edukasi" className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-bold rounded-xl transition hover:bg-white/5 text-center">
                Pelajari Budaya
              </Link>
            </div>
            
            {/* Mini Stats */}
            <div className="pt-8 flex gap-12 border-t border-gray-800 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">50</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Marga Terdaftar</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Validasi Dalihan Na Tolu</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Phone Mockup */}
          <div className="hidden lg:flex justify-center relative">
             <div className="relative w-80 h-[600px] bg-[#1a1a1a] rounded-[3rem] border-8 border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-700 z-20 overflow-hidden">
                {/* Screen Content */}
                <div className="relative w-full h-full">
                    <Image 
                      src="/ulos.jpeg" // Pastikan ada file ulos.jpeg di public
                      alt="Aplikasi Arta Batak"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* UI Mockup Overlay */}
                    <div className="absolute bottom-10 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">S</div>
                                <div className="text-xs font-bold">Sinurat</div>
                            </div>
                            <div className="h-1 w-full bg-gray-600 rounded-full mb-2">
                                <div className="h-1 w-3/4 bg-green-500 rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-gray-300">Menganalisis Tarombo...</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute top-20 -right-10 w-24 h-24 bg-red-600 rounded-2xl rotate-12 blur-2xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS (Bento Grid Style) --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
             <h2 className="text-red-500 font-bold tracking-widest text-xs uppercase mb-3">Ekosistem Digital</h2>
             <h3 className="text-4xl md:text-5xl font-bold font-serif text-white">Fitur Unggulan Arta Batak</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-500/30 hover:bg-white/10 transition duration-500 overflow-hidden">
              <div className="w-14 h-14 bg-red-900/40 rounded-2xl flex items-center justify-center text-2xl mb-6 text-red-400 border border-red-500/20">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">Cek Relasi Marga</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Validasi hubungan kekerabatan (Partuturon) apakah Marhusip (Boleh), Marito (Dilarang), atau Padan.
              </p>
              <Link href="/cek-marga" className="text-red-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Coba Sekarang <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-b from-red-900/20 to-red-900/5 p-8 rounded-3xl border border-red-500/20 hover:shadow-2xl hover:shadow-red-900/20 transition duration-500 overflow-hidden md:-translate-y-4">
               <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6 text-white shadow-lg shadow-red-600/30">
                📚
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">Pustaka Budaya</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Ensiklopedia digital terlengkap mengenai Sejarah, Aksara Batak, Ulos, dan filosofi rumah adat Bolon.
              </p>
              <Link href="/pustaka-marga" className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Jelajahi Pustaka <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition duration-500 overflow-hidden">
              <div className="w-14 h-14 bg-yellow-900/20 rounded-2xl flex items-center justify-center text-2xl mb-6 text-yellow-500 border border-yellow-500/20">
                🎮
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">Kuis Interaktif</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Uji wawasan budayamu melalui gamifikasi yang seru. Kumpulkan skor dan buktikan kamu penjaga budaya.
              </p>
              <Link href="/kuis" className="text-yellow-500 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Mainkan Kuis <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
         {/* Dekorasi Background */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Image Section */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-br from-red-600 to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="/gorga.jpg" // Pastikan ada file gorga.jpg di public
                    alt="Seni Ukir Gorga"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6">
                     <h4 className="text-white font-serif font-bold text-xl">Filosofi Gorga</h4>
                     <p className="text-gray-400 text-xs mt-1">Simbol identitas dan perlindungan.</p>
                  </div>
               </div>
            </div>

            {/* Content Section */}
            <div>
               <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                 Mengapa <span className="text-red-500">Arta Batak?</span>
               </h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed text-justify">
                 Di era modern, banyak generasi muda yang kehilangan jejak leluhurnya. Arta Batak hadir sebagai solusi cerdas untuk memvalidasi adat tanpa harus bertanya ke banyak orang tua secara manual. Cepat, Tepat, dan Berbudaya.
               </p>
               
               <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold text-sm mt-1">1</div>
                     <div>
                        <h5 className="font-bold text-white">Database Marga Terlengkap</h5>
                        <p className="text-sm text-gray-500">Mencakup Toba, Karo, Simalungun, Mandailing, dan Pakpak.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold text-sm mt-1">2</div>
                     <div>
                        <h5 className="font-bold text-white">Algoritma Adat Presisi</h5>
                        <p className="text-sm text-gray-500">Mendeteksi Padan, Marito, dan Bona Ni Ari secara otomatis.</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-[#0a0a0a] border-t border-white/5">
         <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold font-serif text-white mb-6">Siap Menelusuri Jejak Leluhur?</h2>
            <p className="text-gray-400 mb-10 text-lg">Bergabunglah dengan ribuan generasi muda Batak lainnya dalam melestarikan budaya.</p>
            <Link href="/cek-marga" className="inline-block bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)] transform hover:-translate-y-1">
               Mulai Sekarang
            </Link>
         </div>
      </section>

    </main>
  );
}