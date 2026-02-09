// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <--- IMPORT INI
import { timDeveloper } from '../data/data'; // Pastikan path ini benar

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDev, setShowDev] = useState(false);
  
  const pathname = usePathname(); // <--- DAPATKAN PATH SAAT INI

  // Efek transparan saat di atas, solid saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Daftar Menu
  const menuItems = [
    { label: 'Cek Marga', href: '/cek-marga' },
    { label: 'Pustaka Marga', href: '/pustaka-marga' },
    { label: 'Edukasi', href: '/edukasi' },
    { label: 'Kuis', href: '/kuis' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-700 to-red-900 rounded-lg transform rotate-3 group-hover:rotate-0 transition duration-300 shadow-red-900/50 shadow-lg">
            <span className="text-white font-bold text-xl font-serif">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-widest leading-none font-serif">ARTA</span>
            <span className="text-red-500 font-bold text-xs tracking-[0.3em] leading-none">BATAK</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            // Cek apakah path saat ini berawalan dengan href menu (untuk support sub-halaman seperti /edukasi/detail)
            const isActive = pathname.startsWith(item.href);

            return (
              <Link 
                key={item.label}
                href={item.href} 
                className={`text-sm font-medium uppercase tracking-wider relative group transition ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {/* Garis Merah Aktif / Hover */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                   isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          
          {/* Developer Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowDev(!showDev)}
              onBlur={() => setTimeout(() => setShowDev(false), 200)} // Tutup saat klik luar
              className="px-5 py-2 rounded-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition text-xs font-bold uppercase tracking-widest"
            >
              Tim Sidapari
            </button>
            
            {showDev && (
              <div className="absolute right-0 mt-4 w-64 bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up border border-gray-100 z-50">
                <div className="bg-gradient-to-r from-red-800 to-black p-4">
                  <h4 className="text-white font-bold text-sm">Pengembang</h4>
                  <p className="text-red-200 text-xs">Institut Teknologi Del</p>
                </div>
                <div className="p-2 bg-white">
                  {timDeveloper && timDeveloper.length > 0 ? (
                      timDeveloper.map((dev, idx) => (
                        <div key={idx} className="p-3 hover:bg-gray-50 rounded-lg transition border-b last:border-0 border-gray-100">
                          <p className="text-gray-900 font-bold text-sm">{dev.nama}</p>
                          <p className="text-gray-500 text-xs">{dev.peran}</p>
                        </div>
                      ))
                  ) : (
                      <div className="p-3 text-center text-gray-400 text-xs">Data tim belum tersedia</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? (
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN (FULL SCREEN OVERLAY) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-gray-800 z-40 h-[calc(100vh-70px)]">
          <div className="flex flex-col p-8 space-y-6 text-center h-full justify-center">
            {menuItems.map((item) => {
               const isActive = pathname.startsWith(item.href);
               return (
                <Link 
                  key={item.label}
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold transition ${
                    isActive ? 'text-red-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
               );
            })}
             <div className="pt-8 border-t border-gray-800 w-full">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Developed By</p>
                <div className="text-white font-bold text-sm">TIM SIDAPARI - IT DEL</div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}