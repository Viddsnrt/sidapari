// app/pustaka-marga/[slug]/page.tsx
import Link from 'next/link';
import { dataPustakaMarga } from '../../../data/data'; 
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return dataPustakaMarga.map((marga) => ({
    slug: marga.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const marga = dataPustakaMarga.find((m) => m.slug === params.slug);
  return {
    title: marga ? `Tarombo Marga ${marga.nama} - ARTA BATAK` : 'Marga Tidak Ditemukan',
  };
}

export default async function DetailMarga(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const marga = dataPustakaMarga.find((m) => m.slug === params.slug);

  if (!marga) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-900 selection:text-white">
      
      {/* Hero Banner Section */}
      <div className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-red-900/10 to-[#0a0a0a] pointer-events-none"></div>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/pustaka-marga" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-sm font-medium tracking-wide">
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> KEMBALI KE PUSTAKA
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
                Marga {marga.nama}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  Asal: {marga.asal}
                </span>
                <span className="bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  Sub-Etnis: {marga.subEtnis}
                </span>
              </div>
            </div>
            
            {/* Visual element (Optional Decorative Icon) */}
            <div className="hidden md:block opacity-20">
               <span className="text-9xl font-serif font-bold text-white">
                 {marga.nama.charAt(0)}
               </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content (Kiri) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Sejarah Section */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full"></span>
                Sejarah & Asal Usul
              </h2>
              <div className="text-gray-300 leading-8 text-lg text-justify whitespace-pre-line font-light tracking-wide">
                {marga.sejarah}
              </div>
            </section>

            {/* Tarombo (Lineage) - Glassmorphism Style */}
            <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold font-serif text-white mb-8 flex items-center gap-3 relative z-10">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Struktur Tarombo (Silsilah)
              </h2>
              
              <div className="space-y-5 pl-4 border-l border-gray-700 ml-2 relative z-10">
                {marga.tarombo.map((line, index) => {
                  // Logic styling untuk level kedalaman tarombo
                  const isChild = line.includes('-->');
                  const cleanText = line.replace(/[-+>]/g, '').trim();
                  
                  return (
                    <div key={index} className="relative pl-8 group">
                      {/* Garis konektor visual */}
                      <div className={`absolute top-3.5 left-0 h-[1px] bg-gray-600 transition-all group-hover:bg-red-500 ${isChild ? 'w-6' : 'w-4'}`}></div>
                      {/* Dot connector */}
                      <div className={`absolute top-2.5 left-[-5px] w-2.5 h-2.5 rounded-full border-2 border-[#0a0a0a] transition-colors ${isChild ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                      
                      {isChild ? (
                        <div className="inline-block">
                          <span className="text-red-400 font-medium text-lg group-hover:text-red-300 transition-colors">
                            {cleanText}
                          </span>
                        </div>
                      ) : (
                        <span className="font-bold text-white text-xl tracking-wide">
                          {line}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar (Kanan) */}
          <div className="space-y-8">
            {/* Info Box - Sticky */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl sticky top-28 shadow-2xl">
              <h3 className="font-bold font-serif text-xl mb-6 text-white border-b border-gray-700 pb-4">
                Informasi Adat
              </h3>
              
              <div className="space-y-8">
                {/* Padan Warning */}
                <div>
                  <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                    Padan (Ikatan Janji)
                  </span>
                  <div className="bg-red-900/20 border border-red-800/50 p-4 rounded-xl flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">⚠️</span>
                    <div>
                      <span className="text-red-200 font-semibold block mb-1">
                        {marga.padan.join(", ")}
                      </span>
                      <p className="text-xs text-red-400/70 leading-relaxed">
                        Disarankan untuk menjaga jarak dalam hubungan pernikahan sesuai aturan adat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tokoh Terkenal */}
                <div>
                  <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                    Tokoh Terkenal
                  </span>
                  <ul className="space-y-3">
                    {marga.tokoh.map((t, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 group-hover:bg-red-500 transition-colors"></span>
                        <span className="group-hover:text-white transition-colors">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-700">
                    <Link href="/cek-marga" className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-bold text-sm transition border border-gray-600">
                        Cek Kompatibilitas Adat
                    </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}