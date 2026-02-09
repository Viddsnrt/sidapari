// app/edukasi/[slug]/page.tsx
import Link from 'next/link';
import { artikelBudaya } from '../../../data/data';
import { notFound } from 'next/navigation';

// 1. Generate Static Params
export async function generateStaticParams() {
  return artikelBudaya.map((artikel) => ({
    slug: artikel.slug,
  }));
}

// 2. Generate Metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const artikel = artikelBudaya.find((a) => a.slug === params.slug);
  return {
    title: artikel ? `${artikel.title} - ARTA BATAK` : 'Artikel Tidak Ditemukan',
  };
}

// 3. Komponen Halaman Detail
export default async function DetailArtikel(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const artikel = artikelBudaya.find((a) => a.slug === params.slug);

  if (!artikel) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-900 selection:text-white">
      
      {/* Header Banner - Full Dark Theme */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
         {/* Background Effects */}
         <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-red-900/10 to-[#0a0a0a] pointer-events-none"></div>
         <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <Link href="/edukasi" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-sm font-medium tracking-wide">
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> KEMBALI KE PUSTAKA
            </Link>
            
            <span className="inline-block px-4 py-1.5 mb-6 bg-red-900/20 border border-red-800/50 text-red-300 rounded-full text-xs font-bold tracking-widest uppercase">
              {artikel.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
              {artikel.title}
            </h1>
         </div>
      </div>

      {/* Konten Artikel */}
      <div className="container mx-auto max-w-3xl px-6 py-12 relative z-20">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Dekorasi dalam kartu */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Render HTML String - Disesuaikan dengan Tailwind Typography Dark Mode */}
          <div 
            className="prose prose-lg prose-invert max-w-none text-gray-300 leading-loose prose-headings:font-serif prose-headings:text-white prose-a:text-red-400 prose-strong:text-white prose-blockquote:border-l-red-600 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: artikel.fullContent || artikel.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-700">
             <h4 className="font-bold text-gray-400 mb-6 text-sm tracking-widest uppercase">Bagikan Artikel Ini</h4>
             <div className="flex gap-4">
               <button className="flex-1 bg-[#1877F2] hover:bg-[#166fe5] text-white py-3 rounded-xl text-sm font-bold transition shadow-lg hover:shadow-blue-900/20 flex items-center justify-center gap-2">
                 <span>Facebook</span>
               </button>
               <button className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl text-sm font-bold transition shadow-lg hover:shadow-green-900/20 flex items-center justify-center gap-2">
                 <span>WhatsApp</span>
               </button>
               <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl text-sm font-bold transition shadow-lg border border-gray-600 flex items-center justify-center gap-2">
                 <span>Salin Link</span>
               </button>
             </div>
          </div>
        </div>
      </div>
    </article>
  );
}