// app/edukasi/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { artikelBudaya } from '../../data/data';

export default function Edukasi() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Decor (Blobs) - Konsisten */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10 pt-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-800 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            Pustaka Digital
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Eksplorasi Budaya Toba
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Pelajari nilai-nilai luhur, filosofi, dan sejarah yang membentuk identitas masyarakat Batak di era modern.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artikelBudaya.map((item) => (
            <div key={item.id} className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              
              {/* Efek Glow Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              {/* --- BAGIAN GAMBAR (IMAGE SECTION) --- */}
              <div className="relative h-64 w-full overflow-hidden">
                {item.image !== '/file.svg' ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
                  </>
                ) : (
                  // Fallback: Tampilkan Huruf Depan dengan Style Gelap
                  <div className="h-full w-full flex items-center justify-center bg-gray-800 relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>
                     <span className="relative z-10 text-7xl font-serif font-bold text-gray-600 group-hover:text-red-500 transition-colors duration-500">
                       {item.title.charAt(0)}
                     </span>
                  </div>
                )}
                
                {/* Badge Kategori di atas gambar */}
                <div className="absolute top-4 left-4 z-20">
                   <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20">
                     {item.category}
                   </span>
                </div>
              </div>

              {/* --- BAGIAN KONTEN --- */}
              <div className="p-8 flex flex-col flex-grow justify-between relative z-10">
                <div>
                  <h2 className="text-2xl font-bold font-serif text-white mb-4 group-hover:text-red-400 transition-colors leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6">
                    {item.content}
                  </p>
                </div>

                <Link 
                  href={`/edukasi/${item.slug}`} 
                  className="inline-flex items-center text-red-400 font-bold text-sm tracking-wide group/link hover:text-white transition-colors"
                >
                  BACA SELENGKAPNYA 
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}