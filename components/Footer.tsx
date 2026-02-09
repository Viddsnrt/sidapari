// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 relative border-t-4 border-red-900">
      
      {/* --- DEKORASI ATAS (Warna Tiga Bolit: Merah, Putih, Hitam -> Disini kita pakai gradient Merah Emas) --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-yellow-600 to-black"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* KOLOM 1: BRAND & MISI */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-red-800 rotate-45 rounded-sm flex items-center justify-center">
                  <span className="-rotate-45 text-white font-serif font-bold">A</span>
               </div>
               <span className="text-2xl font-bold text-white tracking-widest font-serif">ARTA BATAK</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Platform revitalisasi budaya Batak Toba berbasis <em>Ethno-Computing</em> dan Gamifikasi. Kami menjembatani tradisi leluhur dengan teknologi Society 5.0.
            </p>
          </div>

          {/* KOLOM 2: FITUR UTAMA */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-gray-800 pb-2 inline-block">
              Fitur Utama
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cek-marga" className="hover:text-red-500 transition flex items-center gap-2">
                  <span>&rsaquo;</span> Cek Relasi Marga
                </Link>
              </li>
              <li>
                <Link href="/pustaka-marga" className="hover:text-red-500 transition flex items-center gap-2">
                  <span>&rsaquo;</span> Pustaka Marga
                </Link>
              </li>
              <li>
                <Link href="/edukasi" className="hover:text-red-500 transition flex items-center gap-2">
                  <span>&rsaquo;</span> Edukasi Budaya
                </Link>
              </li>
              <li>
                <Link href="/kuis" className="hover:text-red-500 transition flex items-center gap-2">
                  <span>&rsaquo;</span> Kuis Interaktif
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK & INSTITUSI */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-gray-800 pb-2 inline-block">
              Kontak Kami
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-700 mt-1">📍</span>
                <span>
                  <strong>Institut Teknologi Del</strong><br/>
                  Jl. Sisingamangaraja, Sitoluama<br/>
                  Laguboti, Toba, Sumatera Utara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-700">📧</span>
                <span className="hover:text-white cursor-pointer">info@del.ac.id</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-700">📞</span>
                <span>+62 632 331234</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: TIM PENGEMBANG */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-gray-800 pb-2 inline-block">
              Tim SIADAPARI
            </h4>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-500 uppercase mb-2">Fakultas Vokasi</p>
              <p className="text-sm font-bold text-white mb-1">Teknologi Rekayasa Perangkat Lunak</p>
              <div className="mt-4 flex gap-2">
                 {/* Social Icons Placeholder */}
                 {/* <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-red-800 transition cursor-pointer text-white text-xs">IG</div>
                 <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-800 transition cursor-pointer text-white text-xs">FB</div>
                 <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer text-white text-xs">YT</div> */}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- COPYRIGHT SECTION --- */}
      <div className="bg-black py-6 border-t border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tim SIADAPARI. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}