// app/cek-marga/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { daftarMarga } from '../../data/data';

// --- SEARCHABLE DROPDOWN (COMPONENT) ---
interface SearchableSelectProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
}

const SearchableSelect = ({ label, value, onChange, options, placeholder }: SearchableSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    if (!value) setSearchTerm('');
    else setSearchTerm(value);
  }, [value]);

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition font-medium"
          placeholder={placeholder}
          value={searchTerm}
          onClick={() => setIsOpen(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            onChange('');
          }}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar animate-fade-in-up">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <div
                key={opt}
                className="px-4 py-3 hover:bg-red-900/30 hover:text-red-400 cursor-pointer text-gray-300 transition border-b border-gray-700/50 last:border-0"
                onClick={() => {
                  onChange(opt);
                  setSearchTerm(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500 text-sm text-center">Marga tidak ditemukan</div>
          )}
        </div>
      )}
    </div>
  );
};

// --- LOGIKA UTAMA (PAGE) ---
export default function CekMarga() {
  const [margaSaya, setMargaSaya] = useState('');
  const [margaPasangan, setMargaPasangan] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasil, setHasil] = useState<null | { status: string; pesan: string; type: 'success' | 'warning' | 'danger' }>(null);

  const prosesCek = () => {
    if (!margaSaya || !margaPasangan) return;
    setLoading(true);
    setHasil(null);

    // =========================================================================
    // DATABASE ATURAN ADAT (RULES) - DIPERBARUI & LENGKAP
    // =========================================================================
    
    // 1. KELOMPOK DONGAN TUBU (Satu Garis Keturunan) -> MUTLAK DILARANG
    const lineageRules = [
      {
        group: "Keturunan Silahisabungan",
        margas: ["Sinurat", "Tambunan", "Tambun", "Doloksaribu", "Nadapdap", "Naiborhu", "Pintubatu", "Silalahi", "Rumasingap", "Daulay"],
        pesan: "Kedua marga ini adalah satu darah (Dongan Tubu) dari Raja Silahisabungan. Dilarang keras saling menikah (Marito)."
      },
      {
        group: "Parna (Raja Nai Ambaton)",
        margas: [
            "Simbolon", "Tambamedang", "Situmorang", "Siringoringo", "Rumapea", "Pande", "Nahor", "Suutnihuta", 
            "Saragih", "Ginting", "Munte", "Simalango", "Saing", "Rumahorbo", "Napitu", "Sidauruk", "Turnip", 
            "Sitiotio", "Gurning", "Raja Putra", "Lumbannahor", "Siadari", "Sidabariba", "Siambaton", "Nadeak", "Sihaloho",
            "Tendang", "Banurea", "Manik", "Baringin", "Berutu", "Bancin", "Kombih", "Boangmanalu", "Tumanggor", 
            "Mahulae", "Tinambunan", "Tumanggor", "Turutan", "Pinayungan", "Nahampun"
        ],
        pesan: "Keduanya termasuk marga Parna (Parsadaan Toga Sepuluh Dua). Parna memiliki hukum 'Paso' yang melarang keras pernikahan sesama Parna."
      },
      {
        group: "Toga Naipospos",
        margas: ["Sitompul", "Sibagariang", "Hutauruk", "Simanungkalit", "Marbun", "Lumbanbatu", "Banjar Nahor", "Lumbangaol"],
        pesan: "Kedua marga ini bersaudara dalam ikatan Naipospos. Dilarang menikah karena satu ayah (Dongan Tubu)."
      },
      {
        group: "Si Opat Pisoran (Guru Mangaloksa)",
        margas: ["Hutabarat", "Panggabean", "Hutagalung", "Lumbantobing", "Tobing", "Hasibuan"], // Hasibuan adalah ayah/kakeknya
        pesan: "Kedua marga ini adalah kakak-beradik kandung dari Guru Mangaloksa (Si Opat Pisoran). Dilarang menikah."
      },
      {
        group: "Tuan Dibangarna",
        margas: ["Panjaitan", "Silitonga", "Siagian", "Sianipar"],
        pesan: "Kedua marga ini adalah kakak-beradik kandung (Tuan Dibangarna). Dilarang menikah."
      },
      {
        group: "Sonak Malela",
        margas: ["Simanjuntak", "Siahaan", "Hutagaol"],
        pesan: "Kedua marga ini adalah kakak-beradik kandung (Sonak Malela). Dilarang menikah."
      },
      {
        group: "Toga Sihombing",
        margas: ["Silaban", "Lumbantoruan", "Nababan", "Hutasoit"],
        pesan: "Kedua marga ini adalah saudara kandung dari Toga Sihombing (Si Opat Borsak). Dilarang menikah."
      },
      {
         group: "Toga Sipaettua",
         margas: ["Pangaribuan", "Hutapea", "Silaen", "Tampubolon", "Baringbing"],
         pesan: "Kedua marga ini adalah keturunan Toga Sipaettua. Sangat dekat hubungannya, dilarang menikah."
      },
      {
         group: "Nairasaon",
         margas: ["Manurung", "Sitorus", "Sirait", "Butarbutar"],
         pesan: "Kedua marga ini adalah keturunan Nairasaon. Memiliki ikatan saudara yang kuat."
      },
      {
        group: "Toga Simatupang",
        margas: ["Togatorop", "Sianturi", "Siburian"],
        pesan: "Kedua marga ini adalah kakak beradik dari Toga Simatupang. Dilarang menikah."
      },
      {
        group: "Toga Aritonang",
        margas: ["Ompusunggu", "Rajagukguk", "Simaremare"],
        pesan: "Kedua marga ini adalah kakak beradik dari Toga Aritonang. Dilarang menikah."
      },
       {
        group: "Toga Marpaung",
        margas: ["Marpaung", "Pardede"],
        pesan: "Marpaung dan Pardede adalah abang-adik (Sonak Malela ke anak-anaknya). Dilarang menikah."
      },
      {
          group: "Toga Pandiangan",
          margas: ["Pandiangan", "Gultom", "Samosir", "Pakpahan", "Sitinjak", "Harianja"],
          pesan: "Masuk dalam kelompok Toga Pandiangan (Lontung). Dilarang menikah."
      }
    ];

    // 2. KASUS KHUSUS & PADAN (Lintas Marga/Sumpah) -> DILARANG / PERINGATAN KERAS
    const specificPadanRules = [
        // Silaen & Sitompul (Sesuai Request: Dianggap Padan/Marito di beberapa adat)
        {
            marga1: "Silaen", marga2: "Sitompul",
            pesan: "Terdapat Padan (Ikatan Janji) atau sejarah Marito antara Silaen dan Sitompul yang melarang pernikahan ini."
        },
        // Hutabarat & Silaban (Padan Bona Ni Ari)
        {
            marga1: "Hutabarat", marga2: "Silaban",
            pesan: "Hutabarat dan Silaban memiliki Padan 'Bona Ni Ari'. Dilarang keras menikah karena dianggap saudara kandung."
        },
        // Panjaitan & Simanjuntak (Padan)
        {
            marga1: "Panjaitan", marga2: "Simanjuntak",
            pesan: "Panjaitan dan Simanjuntak terikat Padan. Seringkali dilarang menikah (tergantung wilayah, namun umumnya dihindari)."
        },
        // Nainggolan & Siregar
        {
            marga1: "Nainggolan", marga2: "Siregar",
            pesan: "Padan Lontung: Nainggolan dan Siregar sering dianggap marpadan (terutama Siregar Sormin)."
        },
        // Sinaga & Pandangan
        {
            marga1: "Sinaga", marga2: "Pandangan",
            pesan: "Sinaga dan Pandangan memiliki Padan (Suwut)."
        },
        // Pasaribu & Damanik (Borima)
        {
            marga1: "Pasaribu", marga2: "Damanik",
            pesan: "Dalam beberapa adat Simalungun/Toba, Pasaribu dan Damanik dianggap Borima (bersaudara/padan)."
        },
        // Purba & Manalu
        {
             marga1: "Purba", marga2: "Manalu",
             pesan: "Terdapat Padan antara Purba dan Manalu (Toga Simamora)."
        }
    ];


    setTimeout(() => {
      setLoading(false);
      let foundConflict = null;

      // STEP 1: Cek Marga Sama Persis (Misal: Sinaga & Sinaga)
      if (margaSaya === margaPasangan) {
        setHasil({
          status: "DILARANG KERAS (Satu Marga)",
          pesan: `Marga ${margaSaya} dan ${margaPasangan} adalah satu marga. Dalam adat Batak, menikah satu marga dianggap incest (sumbang) dan dilarang keras.`,
          type: 'danger'
        });
        return;
      }

      // STEP 2: Cek Berdasarkan Kelompok Garis Keturunan (Dongan Tubu)
      for (const rule of lineageRules) {
        // Cek apakah margaSaya DAN margaPasangan ada di dalam list marga kelompok tsb
        const isSayaInGroup = rule.margas.some(m => m.toLowerCase() === margaSaya.toLowerCase());
        const isPasanganInGroup = rule.margas.some(m => m.toLowerCase() === margaPasangan.toLowerCase());

        if (isSayaInGroup && isPasanganInGroup) {
          setHasil({
            status: `DILARANG / MARITO (${rule.group})`,
            pesan: rule.pesan,
            type: 'danger'
          });
          return; // Langsung return agar tidak tertimpa
        }
      }

      // STEP 3: Cek Padan Spesifik (Lintas Marga)
      for (const padan of specificPadanRules) {
        // Cek bolak-balik (A vs B atau B vs A)
        if (
            (margaSaya.toLowerCase() === padan.marga1.toLowerCase() && margaPasangan.toLowerCase() === padan.marga2.toLowerCase()) ||
            (margaSaya.toLowerCase() === padan.marga2.toLowerCase() && margaPasangan.toLowerCase() === padan.marga1.toLowerCase())
        ) {
            setHasil({
                status: "TERLARANG / PADAN",
                pesan: padan.pesan,
                type: 'danger' // Padan biasanya dianggap 'Danger' dalam konteks larangan
            });
            return;
        }
      }

      // STEP 4: Lolos Validasi (Diperbolehkan)
      setHasil({
        status: "DIPERBOLEHKAN (Marhusip)",
        pesan: "Secara aturan kelompok marga dan padan umum, tidak ditemukan larangan. Silakan lanjutkan menelusuri Tarombo untuk memastikan tidak ada hubungan darah dekat (Bona Ni Ari / Pariban Kandung).",
        type: 'success'
      });

    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"></div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 border border-red-800 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            Ethno-Computing Engine v3.0
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Cek Validasi Adat
          </h1>
          <p className="text-gray-400 text-lg">
            Algoritma sistem cerdas untuk memvalidasi hubungan kekerabatan <br className="hidden md:block"/> berdasarkan aturan Dalihan Na Tolu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CARD UTAMA */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Grid Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
              
              {/* KOLOM PRIA */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 border border-blue-800">♂</div>
                   <h3 className="font-bold text-lg text-blue-100">Pihak Laki-Laki</h3>
                </div>
                <SearchableSelect 
                   label="Cari Marga Pria"
                   placeholder="Ketik marga..."
                   options={daftarMarga}
                   value={margaSaya}
                   onChange={setMargaSaya}
                />
              </div>

              {/* VS Divider */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full items-center justify-center font-bold text-white shadow-lg border-4 border-[#0a0a0a] z-20">
                VS
              </div>

              {/* KOLOM WANITA */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-400 border border-pink-800">♀</div>
                   <h3 className="font-bold text-lg text-pink-100">Pihak Perempuan</h3>
                </div>
                <SearchableSelect 
                   label="Cari Marga Wanita"
                   placeholder="Ketik marga..."
                   options={daftarMarga}
                   value={margaPasangan}
                   onChange={setMargaPasangan}
                />
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-12">
              <button 
                onClick={prosesCek}
                disabled={loading || !margaSaya || !margaPasangan}
                className={`w-full py-5 rounded-xl font-bold text-lg tracking-widest shadow-xl transition-all duration-300 relative overflow-hidden group ${
                  loading || !margaSaya || !margaPasangan
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-700 to-red-900 text-white hover:shadow-red-900/40 hover:-translate-y-1'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    MENGANALISIS TAROMBO...
                  </span>
                ) : (
                  "CEK KOMPATIBILITAS ADAT"
                )}
              </button>
            </div>

            {/* HASIL */}
            {hasil && (
              <div className={`mt-10 rounded-xl overflow-hidden animate-fade-in-up border ${
                 hasil.type === 'danger' ? 'bg-red-900/20 border-red-500/50' : 
                 hasil.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500/50' :
                 'bg-green-900/20 border-green-500/50'
              }`}>
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  
                  <div className={`w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-4xl border-4 ${
                     hasil.type === 'danger' ? 'bg-red-500 text-white border-red-700' : 
                     hasil.type === 'warning' ? 'bg-yellow-500 text-white border-yellow-700' :
                     'bg-green-500 text-white border-green-700'
                  }`}>
                      {hasil.type === 'danger' ? '✕' : hasil.type === 'warning' ? '!' : '✓'}
                  </div>

                  <div>
                      <h3 className={`text-2xl font-bold font-serif mb-2 ${
                        hasil.type === 'danger' ? 'text-red-400' : 
                        hasil.type === 'warning' ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {hasil.status}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {hasil.pesan}
                      </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            *Hasil ini berdasarkan aturan umum kelompok marga besar dan padan yang tercatat. Selalu validasi ulang dengan orang tua atau tulang.
          </p>
        </div>
      </div>
    </div>
  );
}