// app/pustaka-marga/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { dataPustakaMarga } from '../../data/data';

export default function PustakaMarga() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter marga berdasarkan input search
  const filteredMarga = dataPustakaMarga.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Decor (Blobs) - Konsisten dengan Cek Marga */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl px-6 pt-32 pb-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-800 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            Ensiklopedia Adat
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Pustaka Marga Batak
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Telusuri jejak leluhur, silsilah (tarombo), dan sejarah marga Anda dalam basis data digital yang terstruktur rapi.
          </p>
        </div>

        {/* Search Bar - Style disamakan dengan Input Cek Marga */}
        <div className="max-w-xl mx-auto mb-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari marga kamu di sini (contoh: Sinaga)..."
              className="w-full p-5 pl-14 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none shadow-2xl transition text-lg font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-6 h-6 text-gray-500 absolute left-5 top-1/2 transform -translate-y-1/2 group-focus-within:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Grid Hasil Pencarian */}
        {filteredMarga.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarga.map((marga) => (
              <Link 
                href={`/pustaka-marga/${marga.slug}`} 
                key={marga.slug}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-900/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {marga.nama.charAt(0)}
                    </div>
                    <span className="bg-gray-800 border border-gray-700 text-gray-300 text-[10px] uppercase tracking-wider px-2 py-1 rounded font-bold">
                      {marga.subEtnis}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-red-400 transition-colors">
                    {marga.nama}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {marga.sejarah}
                  </p>
                  
                  <div className="flex items-center text-red-400 font-semibold text-sm tracking-wide group-hover:text-red-300">
                    Lihat Detail Tarombo 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-gray-800/50 mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <p className="text-xl font-semibold text-gray-300">Marga "{searchQuery}" belum ada di database.</p>
            <p className="text-sm text-gray-500 mt-2">Coba cari "Sinaga" atau "Simatupang".</p>
          </div>
        )}

      </div>
    </div>
  );
}