// data/data.ts

export const daftarMarga = [
  // A
  "Ambarita", "Angkat", "Aritonang", "Aruan", 
  // B
  "Bako", "Bakkara", "Banjar Nahor", "Baringbing", "Batubara", "Barus", "Baumi", 
  "Berutu", "Bintang", "Bondar", "Bona", "Butarbutar", "Bukit",
  // D
  "Daulay", "Dalimunthe", "Damanik", "Dasopang", "Debataraja", "Doloksaribu", "Dongoran",
  // E - G
  "Gajah", "Ginting", "Girsang", "Gorat", "Gultom", "Gurning",
  // H
  "Habeahan", "Harahap", "Harianja", "Hasibuan", "Hasugion", "Hombing", 
  "Hutabarat", "Hutaean", "Hutagaol", "Hutajulu", "Hutagalung", "Hutakamal", 
  "Hutapea", "Hutasoit", "Hutatoruan", "Hutauruk",
  // K - L
  "Kaban", "Karokaro", "Ketaren", "Kudadiri", 
  "Limbong", "Lingga", "Lubis", "Lumbanbatu", "Lumbangaol", "Lumbanpek", 
  "Lumbanraja", "Lumbansiantar", "Lumbantobing", "Lumbantoruan", "Lumbantungkup",
  // M
  "Mahala", "Malau", "Manalu", "Manarik", "Manik", "Manullang", "Manurung", 
  "Marbun", "Marpaung", "Matanari", "Matondang", "Munte", "Munthe",
  // N
  "Nababan", "Nadapdap", "Nadeak", "Nahampun", "Naibaho", "Naiborhu", 
  "Nainggolan", "Naipospos", "Napitupulu", "Nasution",
  // O - P
  "Ompusunggu", 
  "Padang", "Pakpahan", "Pandan", "Pane", "Pangaribuan", "Panggabean", "Panjaitan", 
  "Parapat", "Pardede", "Pardosi", "Parhusip", "Pasaribu", "Perangin-angin", 
  "Pinayungan", "Pohan", "Pulungan", "Purba",
  // R
  "Rambe", "Rajagukguk", "Ritonga", "Rumahorbo", "Rumapea", "Rumasingap", "Rumasondi",
  // S
  "Sagala", "Samosir", "Saragih", "Sarumpaet", "Sembiring", "Siagian", "Siahaan", 
  "Sianipar", "Sianturi", "Sibagariang", "Sibarani", "Sibuea", "Siburian", 
  "Sidabariba", "Sidabutar", "Sidabalok", "Sigalingging", "Sihaloho", "Sihombing", 
  "Sihite", "Sihotang", "Sijabat", "Silaen", "Silaban", "Silalahi", "Silali", 
  "Silitonga", "Simalango", "Simamora", "Simangunsong", "Simanjuntak", "Simanungkalit", 
  "Simaremare", "Simarmata", "Simatupang", "Simbolon", "Simorangkir", "Sinabutar", 
  "Sinaga", "Sinambela", "Singarimbun", "Sinurat", "Sipahutar", "Sipayung", 
  "Sirait", "Siregar", "Siringoringo", "Sitanggang", "Sitepu", "Sitindaon", 
  "Sitinjak", "Sitohang", "Sitompul", "Sitorus", "Situmeang", "Situmorang", "Situngkir", "Surbakti",
  // T
  "Tambak", "Tambun", "Tambunan", "Tampubolon", "Tanjung", "Tarihoran", "Tarigan", 
  "Togatorop", "Tombak", "Turnip"
].sort();

export const timDeveloper = [
  { nama: "Febri Silaen", peran: "Ketua Tim" },
  { nama: "David Sinurat", peran: "Anggota" },
  { nama: "Ruben Tambunan", peran: "Anggota" }, 
  { nama: "Yohana Nababan", peran: "Anggota" }, 
  { nama: "Tristan Pasaribu", peran: "Anggota" }, 

];

// data/data.ts

// 1. Update Interface (tambahkan slug dan fullContent)
export interface ArtikelDetail {
  id: number;
  slug: string; // Tambahan untuk URL
  title: string;
  category: string;
  image: string;
  content: string; // Ringkasan pendek
  fullContent?: string; // Isi lengkap (HTML string)
}

// 2. Update Data Artikel (Contoh Dalihan Na Tolu diisi lengkap)
export const artikelBudaya: ArtikelDetail[] = [
  {
    id: 1,
    slug: "dalihan-na-tolu",
    title: "Dalihan Na Tolu: Fondasi Sosial",
    category: "Filosofi",
    image: "/dalihan.jpeg",
    content: "Falsafah hidup Batak Toba yang menjunjung keseimbangan. Terdiri dari tiga pilar utama: Somba Marhula-hula, Elek Marboru, dan Manat Mardongan Tubu.",
    fullContent: `
      <p class="mb-4"><strong>Dalihan Na Tolu</strong> (Tungku Nan Tiga) adalah kerangka hubungan sosial yang menjadi dasar kehidupan masyarakat Batak Toba. Filosofi ini mengajarkan bahwa keseimbangan sosial hanya dapat dicapai jika setiap individu memahami posisinya dalam struktur adat.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-2 text-red-800">1. Somba Marhula-hula</h3>
      <p class="mb-4">Artinya <em>Hormat kepada Hula-hula</em> (pihak keluarga istri). Dalam adat Batak, Hula-hula dianggap sebagai sumber berkat (Mata Ni Ari). Sikap hormat ini mutlak diperlukan karena doa restu dari Hula-hula diyakini membawa kesejahteraan bagi keluarga boru (pihak penerima istri).</p>

      <h3 class="text-xl font-bold mt-6 mb-2 text-red-800">2. Elek Marboru</h3>
      <p class="mb-4">Artinya <em>Mengayomi pihak Boru</em> (pihak keluarga suami/saudara perempuan). Pihak Hula-hula harus bersikap lemah lembut dan mengayomi pihak Boru. Jika Boru melakukan kesalahan, Hula-hula diharapkan dapat memaafkan dan membimbing, bukan menghukum dengan keras.</p>

      <h3 class="text-xl font-bold mt-6 mb-2 text-red-800">3. Manat Mardongan Tubu</h3>
      <p class="mb-4">Artinya <em>Hati-hati dengan teman semarga</em> (saudara laki-laki). Hubungan dengan saudara semarga seringkali sensitif karena potensi persaingan. Oleh karena itu, diperlukan sikap "Manat" (hati-hati, bijaksana, dan diplomatis) agar persaudaraan tetap erat dan tidak terjadi konflik internal.</p>

      <div class="bg-gray-100 p-4 border-l-4 border-red-800 mt-6 italic">
        "Tanpa Dalihan Na Tolu, orang Batak kehilangan identitas sosialnya. Ini bukan sekadar aturan, tapi cara hidup untuk menciptakan harmoni."
      </div>
    `
  },
  {
    id: 2,
    slug: "ulos-batak",
    title: "Ulos: Hangatnya Doa Leluhur",
    category: "Seni & Busana",
    image: "/ulos.jpeg", // JANGAN LUPA: Masukkan foto ulos.jpg ke folder public
    content: "Ulos bukan sekadar kain tenun, melainkan simbol ikatan kasih sayang (holong). Dalam kosmologi Batak, Ulos adalah sumber kehangatan ketiga setelah Matahari dan Api.",
    fullContent: `
      <p class="mb-4 text-lg">Bagi masyarakat Batak, Ulos memiliki makna spiritual yang sangat dalam. Leluhur Batak meyakini ada tiga sumber kehangatan bagi manusia: <strong>Matahari</strong>, <strong>Api</strong>, dan <strong>Ulos</strong>. Matahari terbit dan terbenam, api bisa padam, namun Ulos memberikan kehangatan yang abadi berupa kasih sayang dan doa restu.</p>
      
      <div class="bg-red-50 p-4 border-l-4 border-red-800 my-6 italic text-gray-700">
        "Ijuk pangihot ni hodong, Ulos pangihot ni holong."<br>
        (Ijuk pengikat pelepah, Ulos pengikat kasih sayang.)
      </div>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-red-800 border-b pb-2">Aturan "Mangulosi"</h3>
      <p class="mb-4">Pemberian Ulos (Mangulosi) memiliki aturan ketat. Ulos hanya boleh diberikan oleh mereka yang posisinya lebih tinggi (Hula-hula/Orang Tua) kepada mereka yang posisinya lebih rendah (Boru/Anak). <strong>Anak tidak boleh memberikan Ulos kepada orang tuanya</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-red-800 border-b pb-2">Jenis-Jenis Ulos Populer</h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="text-xl font-bold text-gray-900">1. Ulos Ragi Hotang</h4>
          <p class="text-gray-700">Secara harfiah berarti "Corak Rotan". Rotan dikenal kuat dan tidak mudah putus. Ulos ini biasanya diberikan kepada <strong>Sepasang Pengantin</strong> dengan harapan ikatan pernikahan mereka kuat seperti rotan.</p>
        </div>

        <div>
          <h4 class="text-xl font-bold text-gray-900">2. Ulos Mangiring</h4>
          <p class="text-gray-700">Ulos ini memiliki corak saling beriringan. Biasanya diberikan orang tua kepada cucu pertama atau anak agar kelak memiliki adik-adik (beriringan) dan menjadi panutan bagi keturunan selanjutnya.</p>
        </div>

        <div>
          <h4 class="text-xl font-bold text-gray-900">3. Ulos Sadum</h4>
          <p class="text-gray-700">Identik dengan warna-warna cerah dan motif bunga yang meriah. Ulos ini adalah simbol <strong>sukacita</strong> dan motivasi. Sering dipakai sebagai selendang fashion dalam pesta adat maupun acara modern.</p>
        </div>

        <div>
          <h4 class="text-xl font-bold text-gray-900">4. Ulos Ragi Hidup</h4>
          <p class="text-gray-700">Dianggap sebagai "Raja"-nya Ulos. Proses pembuatannya paling rumit dan sakral. Ulos ini melambangkan kehidupan dan biasanya hanya dikenakan oleh tokoh adat atau orang tua yang sudah memiliki banyak keturunan (Saur Matua).</p>
        </div>
      </div>
    `
  },

 {
    id: 3,
    slug: "aksara-batak",
    title: "Aksara Batak (Surat Batak)",
    category: "Sejarah",
    image: "/aksara_batak.jpeg", 
    content: "Sistem tulisan kuno yang disebut 'Surat Batak', terdiri dari Induk Huruf (Ina Ni Surat) dan Anak Huruf. Digunakan leluhur untuk menuliskan pengobatan, kalender (parhalaan), dan hukum.",
    fullContent: `
      <p class="mb-6 text-lg text-gray-300 leading-relaxed">
        <strong>Surat Batak</strong> adalah salah satu kekayaan intelektual leluhur Batak yang diperkirakan berasal dari rumpun tulisan Pallawa (India) dan Kawi. Uniknya, aksara ini secara tradisional tidak ditulis menggunakan tinta di atas kertas, melainkan digoreskan menggunakan pisau pada bambu, tulang kerbau, atau kulit kayu alim yang dilipat-lipat (disebut <em>Pustaha Laklak</em>).
      </p>

      <h3 class="text-2xl font-bold font-serif mt-10 mb-6 text-red-400 border-b border-gray-700 pb-2">1. Ina Ni Surat (Induk Huruf)</h3>
      <p class="mb-6 text-gray-300">
        Berikut adalah 19 Induk Huruf (Ina Ni Surat) dalam aksara Batak Toba. Setiap huruf secara otomatis mengandung bunyi vokal "a".
      </p>
      
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
        
        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯀ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">A</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯂ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ha</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯔ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ma</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯉ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Na</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯒ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ra</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯖ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ta</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯘ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Sa</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯇ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Pa</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯞ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">La</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯎ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ga</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯐ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ja</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯑ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Da</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯝ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Nga</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯅ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ba</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯋ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Wa</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯛ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Ya</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">᯳</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">Nya</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯤ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">I</span>
        </div>

        <div class="bg-gray-800/60 border border-gray-700 p-4 rounded-xl text-center hover:border-red-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 transition group cursor-default">
          <span class="block text-red-500 font-bold text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">ᯥ</span>
          <span class="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-white">U</span>
        </div>

      </div>

      <h3 class="text-2xl font-bold font-serif mt-10 mb-6 text-red-400 border-b border-gray-700 pb-2">2. Anak Ni Surat (Diakritik)</h3>
      <p class="mb-6 text-gray-300">
        Selain induk huruf, terdapat tanda baca (diakritik) yang berfungsi mengubah vokal atau mematikan bunyi.
      </p>

      <ul class="space-y-4 mb-8">
        <li class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-red-500/50 transition">
          <div class="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 font-bold border border-red-900/50">i</div>
          <div>
            <span class="block text-white font-bold text-lg">Haluan</span>
            <span class="text-sm text-gray-400">Mengubah bunyi 'a' menjadi <strong>'i'</strong> (Contoh: Sa → Si).</span>
          </div>
        </li>
        <li class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-red-500/50 transition">
          <div class="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 font-bold border border-red-900/50">u</div>
          <div>
            <span class="block text-white font-bold text-lg">Haboritan</span>
            <span class="text-sm text-gray-400">Mengubah bunyi 'a' menjadi <strong>'u'</strong> (Contoh: Ma → Mu).</span>
          </div>
        </li>
        <li class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-red-500/50 transition">
          <div class="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 font-bold border border-red-900/50">o</div>
          <div>
            <span class="block text-white font-bold text-lg">Sihora</span>
            <span class="text-sm text-gray-400">Mengubah bunyi 'a' menjadi <strong>'o'</strong> (Contoh: Ba → Bo).</span>
          </div>
        </li>
        <li class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-red-500/50 transition">
          <div class="h-12 w-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 font-bold border border-red-900/50">e</div>
          <div>
            <span class="block text-white font-bold text-lg">Hatedingan</span>
            <span class="text-sm text-gray-400">Mengubah bunyi 'a' menjadi <strong>'e'</strong> (pepet).</span>
          </div>
        </li>
        <li class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-red-600 hover:bg-red-900/10 transition shadow-lg shadow-red-900/10">
          <div class="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">X</div>
          <div>
            <span class="block text-red-400 font-bold text-lg">Pangolat</span>
            <span class="text-sm text-gray-300">Tanda <strong>penutup/pemati</strong> vokal (Contoh: Ka + Pangolat = K).</span>
          </div>
        </li>
      </ul>
    `
  },
  
  {
    id: 4,
    slug: "rumah-bolon",
    title: "Rumah Bolon (Jabu Bolon)",
    category: "Arsitektur",
    image: "/rumah_bolon.jpeg", // JANGAN LUPA: Simpan gambar rumah-bolon.jpg di folder public
    content: "Rumah adat berbentuk panggung dengan atap melengkung tajam. Filosofi tiang penyangga dan ornamen Gorga melambangkan kekuatan, perlindungan, dan kesuburan.",
    fullContent: `
      <p class="mb-4 text-lg"><strong>Rumah Bolon</strong> adalah rumah panggung tradisional masyarakat Batak Toba. Disebut "Bolon" (Besar) karena dahulu satu rumah ini dihuni oleh keluarga besar (hingga 5-6 keluarga) secara komunal tanpa sekat kamar, melambangkan kebersamaan yang erat.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-red-800 border-b pb-2">Filosofi Tiga Dunia (Tri Loka)</h3>
      <p class="mb-4">Struktur Rumah Bolon mencerminkan kosmologi Batak tentang alam semesta:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-gray-100 p-4 rounded-lg text-center">
          <h4 class="font-bold text-red-800">Banua Ginjang</h4>
          <p class="text-sm text-gray-600">(Dunia Atas)</p>
          <p class="text-xs mt-2">Atap rumah yang melengkung seperti punggung kerbau, tempat menyimpan benda pusaka.</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg text-center">
          <h4 class="font-bold text-red-800">Banua Tonga</h4>
          <p class="text-sm text-gray-600">(Dunia Tengah)</p>
          <p class="text-xs mt-2">Lantai rumah tempat manusia beraktivitas, bermusyawarah, dan tidur.</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg text-center">
          <h4 class="font-bold text-red-800">Banua Toru</h4>
          <p class="text-sm text-gray-600">(Dunia Bawah)</p>
          <p class="text-xs mt-2">Kolong rumah (bara) tempat ternak seperti babi atau kerbau, simbol penyangga kehidupan.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-red-800 border-b pb-2">Seni Ukir Gorga</h3>
      <p class="mb-4">Dinding Rumah Bolon dihiasi ukiran <strong>Gorga</strong> yang didominasi tiga warna (Tiga Bolit):</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-700">
        <li><span class="text-red-600 font-bold">Merah:</span> Melambangkan keberanian dan darah kehidupan.</li>
        <li><span class="text-black font-bold">Hitam:</span> Melambangkan kewibawaan dan kepemimpinan.</li>
        <li><span class="bg-gray-200 px-1 text-gray-600 font-bold">Putih:</span> Melambangkan kesucian dan kejujuran.</li>
      </ul>
      <p class="mt-4">Salah satu ornamen penting adalah <strong>Ulu Paung</strong> (kepala raksasa) di depan atap yang berfungsi menolak bala dan roh jahat.</p>
    `
  }
];

// data/data.ts (Update bagian kuisData)

export const kuisData = [
  {
    question: "Apa prinsip dasar sistem kekerabatan masyarakat Batak Toba?",
    options: ["Bhinneka Tunggal Ika", "Dalihan Na Tolu", "Gotong Royong", "Tut Wuri Handayani"],
    answer: "Dalihan Na Tolu",
    explanation: "Dalihan Na Tolu (Tungku Nan Tiga) adalah kerangka hubungan sosial yang terdiri dari Somba Marhula-hula, Elek Marboru, dan Manat Mardongan Tubu."
  },
  {
    question: "Dalam Dalihan Na Tolu, pihak keluarga dari istri disebut?",
    options: ["Dongan Tubu", "Boru", "Hula-hula", "Ale-ale"],
    answer: "Hula-hula",
    explanation: "Hula-hula adalah kelompok marga dari pihak istri (pemberi anak gadis). Posisi mereka sangat dihormati sebagai sumber berkat ('mata ni ari')."
  },
  {
    question: "Apa nama kain tenun tradisional yang wajib ada dalam upacara adat Batak?",
    options: ["Batik", "Songket", "Ulos", "Kebaya"],
    answer: "Ulos",
    explanation: "Ulos adalah kain tenun khas Batak yang melambangkan ikatan kasih sayang, restu, dan kehangatan dari leluhur kepada keturunannya."
  },
  {
    question: "Rumah adat Batak Toba dengan atap melengkung tajam disebut?",
    options: ["Rumah Gadang", "Rumah Bolon", "Tongkonan", "Joglo"],
    answer: "Rumah Bolon",
    explanation: "Rumah Bolon (Rumah Gorga) adalah rumah panggung tradisional Batak Toba. Bentuknya menyerupai kerbau berdiri dan penuh dengan ukiran Gorga."
  },
  {
    question: "Apa sebutan untuk ukiran tradisional yang biasanya berwarna Merah, Hitam, dan Putih?",
    options: ["Relief", "Gorga", "Batik", "Kaligrafi"],
    answer: "Gorga",
    explanation: "Gorga adalah seni ukir atau pahat tradisional Batak Toba yang biasanya menggunakan tiga warna (Tiga Bolit): Merah (darah/berani), Putih (suci), dan Hitam (kewibawaan)."
  },
  {
    question: "Boneka kayu yang dapat menari dalam upacara kematian Batak Toba disebut?",
    options: ["Ondel-ondel", "Wayang Golek", "Sigale-gale", "Tor-tor"],
    answer: "Sigale-gale",
    explanation: "Sigale-gale adalah patung kayu yang digerakkan dengan tali, biasanya dimainkan saat upacara kematian (papurpur sapata) bagi orang yang meninggal tanpa keturunan."
  },
  {
    question: "Pulau vulkanik yang berada di tengah Danau Toba adalah?",
    options: ["Pulau Nias", "Pulau Samosir", "Pulau Weh", "Pulau Batam"],
    answer: "Pulau Samosir",
    explanation: "Pulau Samosir adalah pulau besar yang terletak di tengah Danau Toba, yang menjadi pusat kebudayaan Batak Toba."
  },
  {
    question: "Apa salam khas masyarakat Batak Toba yang bermakna 'Sehat' atau 'Selamat'?",
    options: ["Mejuah-juah", "Horas", "Njuah-njuah", "Tabik Pun"],
    answer: "Horas",
    explanation: "Horas adalah salam khas Batak Toba yang diucapkan saat berjumpa maupun berpisah, bermakna harapan akan keselamatan, kesehatan, dan kebahagiaan."
  },
  {
    question: "Alat musik gendang yang dimainkan secara ansambel dalam musik Batak disebut?",
    options: ["Gamelan", "Angklung", "Gondang Sabangunan", "Kolintang"],
    answer: "Gondang Sabangunan",
    explanation: "Gondang Sabangunan adalah seperangkat alat musik tradisional Batak Toba (termasuk Taganing, Ogung, Sarune) yang digunakan dalam upacara ritual dan pesta adat."
  },
  {
    question: "Ikat kepala yang sering dipakai oleh wanita Batak saat pesta adat disebut?",
    options: ["Tanjak", "Sortali", "Blangkon", "Suntiang"],
    answer: "Sortali",
    explanation: "Sortali adalah ikat kepala tenun (biasanya berwarna merah dengan sepuhan emas) yang melambangkan kemakmuran dan kehormatan bagi pengantin atau penari."
  },
  {
    question: "Siapakah pahlawan nasional dari Tanah Batak yang juga merupakan raja pejuang?",
    options: ["Sisingamangaraja XII", "Pattimura", "Imam Bonjol", "Diponegoro"],
    answer: "Sisingamangaraja XII",
    explanation: "Sisingamangaraja XII adalah Raja sekaligus pemimpin agama (Malim) yang berjuang melawan kolonial Belanda hingga gugur pada tahun 1907."
  },
  {
    question: "Apa nama tarian tradisional Batak yang gerakannya menghentak kaki dan menggerakkan jari tangan?",
    options: ["Tari Piring", "Tari Saman", "Tari Tor-tor", "Tari Pendet"],
    answer: "Tari Tor-tor",
    explanation: "Tor-tor adalah tarian seremonial Batak. Gerakannya seirama dengan bunyi gondang, digunakan untuk penyambutan, penghormatan, hingga ritual sakral."
  },
  {
    question: "Minuman khas Batak yang terbuat dari fermentasi air nira disebut?",
    options: ["Tuak", "Sopi", "Arak", "Jamu"],
    answer: "Tuak",
    explanation: "Tuak (khususnya Tuak Nias atau Batak) terbuat dari air nira pohon aren/kelapa. Dalam takaran wajar, tuak sering disajikan sebagai minuman penghangat dalam pertemuan sosial (Lapo)."
  },
  {
    question: "Marga 'Nasution' dan 'Lubis' umumnya berasal dari sub-etnis Batak apa?",
    options: ["Toba", "Karo", "Mandailing", "Pakpak"],
    answer: "Mandailing",
    explanation: "Nasution dan Lubis adalah marga utama dalam masyarakat Batak Mandailing (wilayah Tapanuli Selatan), berbeda dengan Toba yang berpusat di sekitar Danau Toba."
  },
  {
    question: "Apa istilah untuk 'kampung halaman' dalam bahasa Batak?",
    options: ["Bona Pasogit", "Rantau", "Kota", "Desa"],
    answer: "Bona Pasogit",
    explanation: "Bona Pasogit secara harfiah berarti 'Pangkal/Asal'. Bagi orang Batak perantau, Bona Pasogit adalah tanah kelahiran leluhur yang harus diingat dan dibangun kembali."
  }
];

export interface MargaDetail {
  slug: string;
  nama: string;
  subEtnis: string;
  asal: string;
  sejarah: string;
  tarombo: string[]; 
  padan: string[]; 
  tokoh: string[];
}

export const dataPustakaMarga: MargaDetail[] = [

  {
    slug: "sinaga",
    nama: "Sinaga (ᯘᯪᯉᯎ)",
    subEtnis: "Toba",
    asal: "Samosir (Urat)",
    sejarah: "Sinaga adalah marga yang berasal dari keturunan Raja Lontung. Sinaga merupakan anak pertama (sulung) dari Raja Lontung dengan ibunya si Boru Pareme. Dalam perkembangannya, keturunan Sinaga menyebar ke berbagai daerah hingga ke Simalungun.",
    tarombo: [
      "Raja Lontung",
      "--> Sinaga (Anak ke-1)",
      "----> Sinaga Bonor",
      "----> Sinaga Ratus",
      "----> Sinaga Uruk"
    ],
    padan: ["Pandangan", "Situmorang (dalam konteks tertentu)"],
    tokoh: ["Anicetus Bongsu Antonius Sinaga (Uskup)", "Restu Sinaga (Aktor)"]
  },
  {
    slug: "simatupang",
    nama: "Simatupang (ᯘᯪᯔᯖᯮᯇᯰ)",
    subEtnis: "Toba",
    asal: "Muara, Tapanuli Utara",
    sejarah: "Simatupang adalah anak dari Raja Sobu. Simatupang memiliki tiga orang anak laki-laki yaitu Togatorop, Sianturi, dan Siburian. Hingga kini, persatuan ketiga marga ini sangat kuat (Toga Simatupang).",
    tarombo: [
      "Raja Sobu",
      "--> Simatupang",
      "----> Togatorop (Anak ke-1)",
      "----> Sianturi (Anak ke-2)",
      "----> Siburian (Anak ke-3)"
    ],
    padan: ["Nainggolan (Padan sesama keturunan Raja Sobu/Lontung sering terjadi)"],
    tokoh: ["T.B. Simatupang (Pahlawan Nasional)", "Iwan Simatupang (Sastrawan)"]
  },
  {
    slug: "sinurat",
    nama: "Sinurat (ᯘᯪᯉᯮᯒᯖ᯲)",
    subEtnis: "Toba",
    asal: "Harangan Parik Sionggang Tengah, Lumban Julu",
    sejarah: "Sinurat adalah keturunan dari Silahisabungan melalui jalur Sondi Raja -> Rumasondi -> Raja Parmahan (Raja Bungabunga). Raja Bungabunga diadopsi oleh Tuan Sihubil di Balige dan memiliki putra bernama Sinabutar. Sinurat merupakan anak dari Sinabutar. Leluhur marga ini menikah dengan Tapian Nauli Boru Manurung dan membuka kampung di Harangan Parik Sionggang. Keturunannya menyebar ke Lumban Julu, Laguboti, Simalungun, hingga Samosir (melalui Ompu Gumbok Nabolon).",
    tarombo: [
      "Silahisabungan",
      "--> Sondi Raja",
      "----> Rumasondi",
      "------> Raja Parmahan (Raja Bungabunga)",
      "--------> Sinabutar",
      "----------> Sinurat (Anak ke-1 menurut klaim Sinurat)",
      "------------> Raja Tano (Lumban Pea)",
      "------------> Raja Pagi (Lumban Lobu)",
      "------------> Ompu Gumbok Nabolon (Samosir)",
      "------------> Raja Muha/Manorus (Tanah Jawa/Simalungun)"
    ],
    padan: [
      "Sesama Keturunan Sinabutar (Nadapdap, Doloksaribu)",
      "Padan Silahisabungan (secara umum)"
    ],
    tokoh: [
      "Raja Tano (Leluhur)",
      "Raja Pagi (Leluhur)",
      "Ompu Gumbok Nabolon (Leluhur)"
    ]
  },
  {
    slug: "tambunan",
    nama: "Tambunan (ᯖᯔ᯲ᯅᯮᯉᯉ᯲)",
    subEtnis: "Toba",
    asal: "Balige & Silalahi",
    sejarah: "Tambunan adalah keturunan dari Raja Silahisabungan (salah satu anak Raja Nai Ambaton/Parna). Raja Tambunan (Tambun Raja) adalah anak bungsu dari 8 bersaudara. Dalam perkembangannya, keturunan Tambunan menyebar luas dari Balige hingga ke seluruh tanah Batak. Mereka dikenal sebagai 'Tambunan Pagar Aji'.",
    tarombo: [
      "Raja Silahisabungan",
      "--> Tambun Raja (Tambunan)",
      "----> Tambun Mulia",
      "----> Tambun Saribu",
      "----> Tambun Marbun"
    ],
    padan: [
      "Sesama Keturunan Silahisabungan (8 Marga Utama)",
      "Khususnya sangat dekat dengan marga Daulay (Mandailing)"
    ],
    tokoh: [
      "E.W.P. Tambunan (Mantan Gubernur Sumut)",
      "Gayus Lumbuun (Hakim Agung)",
      "Amara (Artis/Penyanyi)"
    ]
  },
  {
    slug: "pasaribu",
    nama: "Pasaribu (ᯇᯘᯒᯪᯅᯮ)",
    subEtnis: "Toba",
    asal: "Silindung (Tarutung)",
    sejarah: "Pasaribu adalah keturunan dari Guru Mangaloksa (anak dari Raja Hasibuan). Pasaribu bersaudara kandung dengan Hutagalung, Lubis, dan Tanjung. Persatuan keempat marga ini sering disebut 'Si Opat Pisoran'. Pasaribu kemudian terbagi menjadi tiga sub-induk utama: Habeahan, Bondar, dan Gorat.",
    tarombo: [
      "Raja Sobu",
      "--> Raja Hasibuan",
      "----> Guru Mangaloksa",
      "------> Pasaribu (Anak Sulung)",
      "--------> Pasaribu Habeahan",
      "--------> Pasaribu Bondar",
      "--------> Pasaribu Gorat"
    ],
    padan: [
      "Hutagalung (Adik Kandung)",
      "Lubis (Adik Kandung)",
      "Tanjung (Adik Kandung)",
      "Marga Damanik (Borima) dalam konteks Simalungun"
    ],
    tokoh: [
      "Gus Irawan Pasaribu (Politisi)",
      "Norman Pasaribu (Sastrawan)",
      "Marah Halim Harahap (Garis Ibu Pasaribu)"
    ]
  },
  {
    slug: "nababan",
    nama: "Nababan (ᯉᯅᯅᯉ᯲)",
    subEtnis: "Toba",
    asal: "Tipang - Humbang Hasundutan",
    sejarah: "Nababan adalah keturunan dari Toga Sihombing. Dalam silsilah, Nababan memakai gelar 'Borsak Mangatasi'. Nababan adalah anak ketiga dari empat bersaudara Toga Sihombing (Silaban, Lumbantoruan, Nababan, Hutasoit). Mereka dikenal kompak dalam ikatan 'Borsak Mangatasi'.",
    tarombo: [
      "Raja Lontung",
      "--> Toga Sihombing",
      "----> Silaban (Borsak Jungjungan)",
      "----> Lumbantoruan (Borsak Sirumonggur)",
      "----> Nababan (Borsak Mangatasi)",
      "----> Hutasoit (Borsak Bimbinan)"
    ],
    padan: [
      "Silaban",
      "Lumbantoruan",
      "Hutasoit",
      "(Dilarang menikah dengan sesama keturunan Toga Sihombing)"
    ],
    tokoh: [
      "S.A.E. Nababan (Ephorus HKBP)",
      "Panda Nababan (Politisi)",
      "Putra Nababan (Jurnalis/Politisi)"
    ]
  },
  {
    slug: "silaen",
    nama: "Silaen (ᯘᯪᯞᯀᯩᯉ᯲)",
    subEtnis: "Toba",
    asal: "Balige (Toba Samosir)",
    sejarah: "Silaen adalah keturunan dari Toga Sipaettua. Silaen merupakan bagian dari persatuan 'Si Tolu Tali' bersama saudara-saudaranya yaitu Pangaribuan dan Hutapea (Laguboti). Silaen dikenal dengan leluhurnya yang membuka kampung di sekitar Balige.",
    tarombo: [
      "Raja Sobu",
      "--> Toga Sipaettua",
      "----> Pangaribuan (Anak ke-1)",
      "----> Hutapea (Anak ke-2)",
      "----> Silaen (Anak ke-3 / Bungsu)",
      "------> Raja Bunga-bunga",
      "------> Raja Natanggang"
    ],
    padan: [
      "Pangaribuan",
      "Hutapea",
      "(Ikatan kuat sesama Toga Sipaettua)"
    ],
    tokoh: [
      "Rio Silaen (Musisi/Komposer)",
      "Victor Silaen (Akademisi)",
      "Hisar Silaen (Tokoh Adat)"
    ]
  },
  {
    slug: "hutabarat",
    nama: "Hutabarat (ᯂᯮᯖᯅᯒᯖ᯲)",
    subEtnis: "Toba",
    asal: "Tarutung (Silindung)",
    sejarah: "Hutabarat adalah anak sulung dari Guru Mangaloksa (Raja Hasibuan). Hutabarat dikenal sebagai pembuka kampung di wilayah Silindung. Bersama adik-adiknya (Panggabean, Hutagalung, Hutatoruan/Lumbantobing), mereka membentuk persatuan Si Opat Pisoran.",
    tarombo: ["Raja Hasibuan", "--> Guru Mangaloksa", "----> Hutabarat (Anak Ke-1)"],
    padan: ["Panggabean", "Hutagalung", "Lumbantobing", "(Sesama Si Opat Pisoran)"],
    tokoh: ["Irma Hutabarat (Aktivis)", "Felix Hutabarat (Musisi)"]
  },
  {
    slug: "panggabean",
    nama: "Panggabean (ᯇᯰᯎᯅᯩᯀᯉ᯲)",
    subEtnis: "Toba",
    asal: "Tarutung (Silindung)",
    sejarah: "Panggabean adalah anak kedua dari Guru Mangaloksa. Keturunannya kemudian pecah menjadi Panggabean Lumban Ratus, Simorangkir, dan Lumban Siagian. Mereka sangat dominan di wilayah Tarutung.",
    tarombo: ["Raja Hasibuan", "--> Guru Mangaloksa", "----> Panggabean (Anak Ke-2)"],
    padan: ["Hutabarat", "Hutagalung", "Lumbantobing"],
    tokoh: ["M. Panggabean (Jenderal TNI)", "Tika Panggabean (Artis)"]
  },
  {
    slug: "hutagalung",
    nama: "Hutagalung (ᯂᯮᯖᯎᯞᯮᯰ)",
    subEtnis: "Toba",
    asal: "Tarutung (Silindung)",
    sejarah: "Hutagalung adalah anak ketiga dari Guru Mangaloksa. Mereka menempati wilayah yang sekarang dikenal sebagai Desa Hutagalung di Tarutung.",
    tarombo: ["Raja Hasibuan", "--> Guru Mangaloksa", "----> Hutagalung (Anak Ke-3)"],
    padan: ["Hutabarat", "Panggabean", "Lumbantobing"],
    tokoh: ["Syarwan Hamid (Marga Hutagalung - TNI)", "Jesse Hutagalung (Desainer)"]
  },
  {
    slug: "lumbantobing",
    nama: "Lumbantobing (ᯞᯮᯔ᯲ᯅᯉ᯲ᯖᯬᯅᯪᯰ)",
    subEtnis: "Toba",
    asal: "Tarutung (Silindung)",
    sejarah: "Lumbantobing (sering disebut Tobing) adalah keturunan bungsu Guru Mangaloksa (Hutatoruan). Marga ini sangat besar dan menyebar luas, memegang peranan penting dalam sejarah HKBP dan pemerintahan.",
    tarombo: ["Raja Hasibuan", "--> Guru Mangaloksa", "----> Hutatoruan", "------> Lumbantobing"],
    padan: ["Hutabarat", "Panggabean", "Hutagalung"],
    tokoh: ["Ferdinand Lumbantobing (Pahlawan Nasional)", "Joy Tobing (Penyanyi)"]
  },
  {
    slug: "simanjuntak",
    nama: "Simanjuntak (ᯘᯪᯔᯉ᯲ᯐᯮᯉ᯲ᯖᯂ᯲)",
    subEtnis: "Toba",
    asal: "Balige",
    sejarah: "Simanjuntak adalah salah satu marga dengan populasi terbesar. Mereka adalah keturunan Raja Marsundung (Simanjuntak) dari istri boru Hasibuan. Terbagi menjadi dua kelompok besar: Simanjuntak Mardaup dan Simanjuntak Sitombuk.",
    tarombo: ["Raja Sobu", "--> Tuan Somanimbil", "----> Raja Marsundung (Simanjuntak)"],
    padan: ["Hutabarat (karena janji lama)", "Sesama keturunan Raja Marsundung"],
    tokoh: ["Lea Simanjuntak (Penyanyi)", "Marsillam Simanjuntak (Mantan Jaksa Agung)"]
  },
  {
    slug: "siahaan",
    nama: "Siahaan (ᯘᯪᯀᯂᯀᯉ᯲)",
    subEtnis: "Toba",
    asal: "Balige",
    sejarah: "Siahaan adalah anak dari Tuan Somanimbil dan merupakan abang dari Simanjuntak dan Hutagaol. Siahaan dikenal dengan leluhurnya Somba Debata.",
    tarombo: ["Raja Sobu", "--> Tuan Somanimbil", "----> Siahaan (Anak Ke-1)"],
    padan: ["Simanjuntak", "Hutagaol"],
    tokoh: ["Nico Siahaan (Presenter/Politisi)", "Rico Siahaan (Aktor)"]
  },
  {
    slug: "hutagaol",
    nama: "Hutagaol (ᯂᯮᯖᯎᯀᯞᯬ᯲)",
    subEtnis: "Toba",
    asal: "Balige",
    sejarah: "Hutagaol adalah adik bungsu dari Siahaan dan Simanjuntak. Ketiga marga ini (Siahaan, Simanjuntak, Hutagaol) sangat erat hubungannya.",
    tarombo: ["Raja Sobu", "--> Tuan Somanimbil", "----> Hutagaol (Anak Ke-3)"],
    padan: ["Siahaan", "Simanjuntak"],
    tokoh: ["Ria Hutagaol (Artis)"]
  },
  {
    slug: "manurung",
    nama: "Manurung (ᯔᯉᯮᯒᯮᯰ)",
    subEtnis: "Toba",
    asal: "Porsea / Uluan",
    sejarah: "Manurung adalah anak sulung dari Raja Nairasaon. Keturunannya menyebar di daerah Uluan, Porsea, hingga ke Sigura-gura. Dikenal dengan Patik Manurung.",
    tarombo: ["Raja Nairasaon", "--> Manurung"],
    padan: ["Sitorus", "Sirait", "Butarbutar (Sesama Nairasaon)"],
    tokoh: ["El Manik (Manurung)", "Tiopan Manurung"]
  },
  {
    slug: "sitorus",
    nama: "Sitorus (ᯘᯪᯖᯬᯒᯮᯘ᯲)",
    subEtnis: "Toba",
    asal: "Porsea / Lumban Nabolon",
    sejarah: "Sitorus adalah anak kedua dari Raja Nairasaon. Terbagi menjadi Sitorus Pane, Sitorus Dori, dan Sitorus Boltok.",
    tarombo: ["Raja Nairasaon", "--> Sitorus"],
    padan: ["Manurung", "Sirait", "Butarbutar"],
    tokoh: ["Poltak Sitorus (Bupati Toba)", "Eros Djarot (Garis Ibu Sitorus)"]
  },
  {
    slug: "sirait",
    nama: "Sirait (ᯘᯪᯒᯤᯖ᯲)",
    subEtnis: "Toba",
    asal: "Porsea / Ajibata",
    sejarah: "Sirait adalah keturunan Nairasaon yang menyebar hingga ke Ajibata dan Simalungun (Sirait Holbung).",
    tarombo: ["Raja Nairasaon", "--> Sirait"],
    padan: ["Manurung", "Sitorus", "Butarbutar"],
    tokoh: ["Arist Merdeka Sirait (Aktivis Anak)", "Charles Sirait"]
  },
  {
    slug: "butarbutar",
    nama: "Butarbutar (ᯅᯮᯖᯒ᯲ᯅᯮᯖᯒ᯲)",
    subEtnis: "Toba",
    asal: "Porsea / Sibisa",
    sejarah: "Butarbutar adalah anak bungsu dari Raja Nairasaon. Dikenal dengan julukan 'Simanoroni'.",
    tarombo: ["Raja Nairasaon", "--> Butarbutar"],
    padan: ["Manurung", "Sitorus", "Sirait"],
    tokoh: ["Stanley Butarbutar (Akademisi)"]
  },
  {
    slug: "sitompul",
    nama: "Sitompul (ᯘᯪᯖᯔᯬ᯲ᯇᯮᯞ᯲)",
    subEtnis: "Toba",
    asal: "Pahae",
    sejarah: "Sitompul adalah keturunan dari Raja Naipospos. Mereka banyak bermukim di daerah Pahae, Tapanuli Utara.",
    tarombo: ["Raja Naipospos", "--> Sitompul"],
    padan: ["Sibagariang", "Hutauruk", "Simanungkalit", "Marbun (Toga Sipoholon)"],
    tokoh: ["Ruhut Sitompul (Pengacara/Politisi)", "Latief Sitompul"]
  },
  {
    slug: "marbun",
    nama: "Marbun (ᯔᯒ᯲ᯅᯮᯉ᯲)",
    subEtnis: "Toba",
    asal: "Bakkara / Humbang",
    sejarah: "Marbun adalah bagian dari Naipospos yang terdiri dari tiga sub-marga: Lumban Batu, Banjar Nahor, dan Lumban Gaol.",
    tarombo: ["Raja Naipospos", "--> Marbun"],
    padan: ["Sitompul", "Sibagariang", "Hutauruk", "Simanungkalit"],
    tokoh: ["Mahfud MD (Garis Ibu Marbun)", "Lumban Gaol (Tokoh Birokrat)"]
  },
  {
    slug: "simbolon",
    nama: "Simbolon (ᯘᯪᯔ᯲ᯅᯬᯞᯬᯉ᯲)",
    subEtnis: "Toba",
    asal: "Samosir (Pangururan)",
    sejarah: "Simbolon adalah anak sulung dari Raja Nai Ambaton (Parna). Sebagai 'Hula-hula' tertua di Parna, posisi Simbolon sangat dihormati.",
    tarombo: ["Raja Nai Ambaton", "--> Simbolon Tua"],
    padan: ["SELURUH MARGA PARNA (Situmorang, Saragih, Ginting, dll)"],
    tokoh: ["Rapidin Simbolon", "Effendi Simbolon (Politisi)"]
  },
  {
    slug: "situmorang",
    nama: "Situmorang (ᯘᯪᯖᯮᯔᯬᯒᯰ)",
    subEtnis: "Toba",
    asal: "Samosir (Lontung)",
    sejarah: "Situmorang adalah salah satu marga besar Parna. Terdiri dari Situmorang Lumban Pande, Lumban Nahor, Suhut Nihuta, dan Siringoringo.",
    tarombo: ["Raja Nai Ambaton", "--> Situmorang"],
    padan: ["SELURUH MARGA PARNA"],
    tokoh: ["Sitor Situmorang (Sastrawan)", "Mario Marcella (Gitaris Kotak)"]
  },
  {
    slug: "saragih",
    nama: "Saragih (ᯘᯒᯎᯪᯂ᯲)",
    subEtnis: "Simalungun",
    asal: "Simalungun",
    sejarah: "Saragih adalah marga utama di Simalungun yang masuk dalam kelompok Parna (Saragih Garingging, Sumbayak, dll).",
    tarombo: ["Raja Nai Ambaton (Parna)", "--> Cabang Simalungun"],
    padan: ["SELURUH MARGA PARNA"],
    tokoh: ["E.R. Saragih", "Bill Saragih (Musisi)"]
  },
  {
    slug: "gultom",
    nama: "Gultom (ᯎᯮᯞ᯲ᯖᯔᯬ᯲)",
    subEtnis: "Toba",
    asal: "Samosir (Onan Runggu)",
    sejarah: "Gultom adalah keturunan Parna dari garis Sonak Malela (Tuan Ringo). Banyak bermukim di Onan Runggu, Samosir.",
    tarombo: ["Raja Nai Ambaton", "--> Tuan Ringo", "----> Gultom"],
    padan: ["SELURUH MARGA PARNA"],
    tokoh: ["Ivan Gultom", "Potler Gultom"]
  },
  {
    slug: "siregar",
    nama: "Siregar (ᯘᯪᯒᯩᯎᯒ᯲)",
    subEtnis: "Toba/Angkola",
    asal: "Muara -> Sipirok",
    sejarah: "Siregar adalah anak bungsu Raja Lontung. Karena populasi yang sangat besar, Siregar menyebar ke Tapanuli Selatan (Sipirok) dan menjadi marga utama di Angkola/Mandailing. Terdiri dari: Silo, Dongoran, Silali, Siagian.",
    tarombo: ["Raja Lontung", "--> Siregar"],
    padan: ["Nainggolan (Padan Lontung)"],
    tokoh: ["Merari Siregar (Sastrawan)", "Aldi Taher (Cucu Siregar)"]
  },
  {
    slug: "nainggolan",
    nama: "Nainggolan (ᯉᯤᯰᯎᯬᯞᯉ᯲)",
    subEtnis: "Toba",
    asal: "Samosir (Nainggolan)",
    sejarah: "Nainggolan adalah keturunan Raja Lontung. Dikenal dengan Tugu Nainggolan di Samosir. Terbagi menjadi Sibatuara dan Parhusip.",
    tarombo: ["Raja Lontung", "--> Nainggolan"],
    padan: ["Siregar (Padan Lontung)"],
    tokoh: ["Cassandra Nainggolan", "Framly Nainggolan"]
  },
  {
    slug: "aritonang",
    nama: "Aritonang (ᯀᯒᯪᯖᯬᯉᯰ)",
    subEtnis: "Toba",
    asal: "Muara",
    sejarah: "Aritonang adalah anak Raja Lontung yang terdiri dari Ompusunggu, Rajagukguk, dan Simaremare.",
    tarombo: ["Raja Lontung", "--> Aritonang"],
    padan: ["Sesama Lontung"],
    tokoh: ["Tiopan Aritonang (TNI)"]
  },
  {
    slug: "lubis",
    nama: "Lubis (ᯞᯮᯅᯪᯘ᯲)",
    subEtnis: "Mandailing",
    asal: "Mandailing Natal",
    sejarah: "Lubis adalah salah satu marga terbesar di Mandailing. Keturunan Namora Pande Bosi. Terbagi menjadi Lubis Singasoro dan Lubis Si Langkitang.",
    tarombo: ["Bugis/Borbor", "--> Namora Pande Bosi", "----> Lubis"],
    padan: ["Nasution (Sering berbesan/Mora-Anak Boru)"],
    tokoh: ["Mochtar Lubis (Jurnalis)", "Fatin Shidqia Lubis (Penyanyi)"]
  },
  {
    slug: "nasution",
    nama: "Nasution (ᯉᯘᯮᯖᯪᯀᯬᯉ᯲)",
    subEtnis: "Mandailing",
    asal: "Mandailing Natal",
    sejarah: "Nasution adalah marga bangsawan di Mandailing (Penyabungan). Keturunan Si Baroar Nan Sakti.",
    tarombo: ["Batara Sinomba", "--> Si Baroar", "----> Nasution"],
    padan: ["Lubis (Pasangan tradisional Mandailing)"],
    tokoh: ["A.H. Nasution (Jenderal Besar)", "Raditya Dika Nasution"]
  },
  {
    slug: "harahap",
    nama: "Harahap (ᯂᯒᯂᯇ᯲)",
    subEtnis: "Angkola/Padang Lawas",
    asal: "Tapanuli Selatan",
    sejarah: "Harahap dominan di Padang Sidempuan dan Padang Lawas. Berkerabat dekat dengan Siregar.",
    tarombo: ["Raja Lontung (versi Angkola)", "--> Harahap"],
    padan: ["Siregar"],
    tokoh: ["Rinto Harahap (Musisi)", "Syahrul Mamma Harahap"]
  },
  {
    slug: "hasibuan",
    nama: "Hasibuan (ᯂᯘᯪᯅᯮᯀᯉ᯲)",
    subEtnis: "Toba/Padang Lawas",
    asal: "Laguboti -> Padang Lawas",
    sejarah: "Hasibuan berasal dari Toba (Raja Sobu) namun migrasi besar-besaran ke Padang Lawas dan Riau. Di Toba mereka adalah 'Hula-hula' dari Simanjuntak.",
    tarombo: ["Raja Sobu", "--> Raja Hasibuan"],
    padan: ["Keluarga Raja Sobu"],
    tokoh: ["Otto Hasibuan (Pengacara)", "Albert Hasibuan"]
  },
  {
    slug: "batubara",
    nama: "Batubara (ᯅᯖᯮᯅᯒ)",
    subEtnis: "Mandailing/Melayu",
    asal: "Pesisir Timur / Asahan",
    sejarah: "Batubara adalah marga yang terbentuk dari migrasi orang Batak ke pesisir (Tanah Datar/Asahan).",
    tarombo: ["Keturunan Ompu Tuan Binur"],
    padan: ["-"],
    tokoh: ["Juliari Batubara", "Ucok Baba (Batubara)"]
  },
  {
    slug: "ginting",
    nama: "Ginting (ᯎᯪᯉ᯲ᯖᯪᯰ)",
    subEtnis: "Karo",
    asal: "Tanah Karo",
    sejarah: "Ginting adalah salah satu dari Merga Silima (5 Marga Utama Karo). Ginting memiliki banyak sub-marga seperti Ginting Suka, Ginting Munte, dll. Sebagian Ginting Munte masuk ke Toba menjadi Munte dan Dalimunthe.",
    tarombo: ["Merga Silima", "--> Ginting"],
    padan: ["Tergantung sub-marga (bisa Parna)"],
    tokoh: ["Anthony Sinisuka Ginting (Badminton)", "Tanta Ginting (Aktor)"]
  },
  {
    slug: "tarigan",
    nama: "Tarigan (ᯖᯒᯪᯎᯉ᯲)",
    subEtnis: "Karo",
    asal: "Tanah Karo",
    sejarah: "Tarigan adalah bagian dari Merga Silima. Memiliki sub seperti Tarigan Sibero, Tarigan Tua.",
    tarombo: ["Merga Silima", "--> Tarigan"],
    padan: ["-"],
    tokoh: ["Likumahuwa Tarigan"]
  },
  {
    slug: "purba",
    nama: "Purba (ᯇᯮᯒ᯲ᯅ)",
    subEtnis: "Simalungun/Karo",
    asal: "Simalungun",
    sejarah: "Purba adalah penguasa kerajaan purba di Simalungun (Partuanan Purba). Di Karo juga terdapat marga Tarigan Purba.",
    tarombo: ["Raja Maropats", "--> Purba"],
    padan: ["-"],
    tokoh: ["Simalungun City (Klub Bola milik Purba?)", "Dedi Purba"]
  },
  {
    slug: "damanik",
    nama: "Damanik (ᯑᯔᯉᯪᯂ᯲)",
    subEtnis: "Simalungun",
    asal: "Simalungun",
    sejarah: "Damanik berarti 'Simada Manik' (Pemilik Manik). Damanik adalah marga raja-raja Siantar dulu.",
    tarombo: ["Raja Maropats", "--> Damanik"],
    padan: ["-"],
    tokoh: ["Auman Damanik"]
  },
  {
    slug: "panjaitan",
    nama: "Panjaitan (ᯇᯉ᯲ᯐᯤᯖᯉ᯲)",
    subEtnis: "Toba",
    asal: "Balige",
    sejarah: "Panjaitan adalah anak dari Tuan Somanimbil (Raja Sobu). Panjaitan dikenal sebagai marga 'Raja' yang disegani.",
    tarombo: ["Raja Sobu", "--> Tuan Somanimbil", "----> Panjaitan"],
    padan: ["Siahaan", "Simanjuntak"],
    tokoh: ["Luhut Binsar Panjaitan (Menteri)", "D.I. Panjaitan (Pahlawan Revolusi)"]
  },
  {
    slug: "tampubolon",
    nama: "Tampubolon (ᯖᯔ᯲ᯇᯮᯅᯬᯞᯬᯉ᯲)",
    subEtnis: "Toba",
    asal: "Balige",
    sejarah: "Tampubolon adalah keturunan Tuan Sihubil. Saudara dari Silaen (menurut beberapa versi Toga Sipaettua).",
    tarombo: ["Raja Sobu", "--> Toga Sipaettua", "----> Tampubolon"],
    padan: ["Silaen", "Pangaribuan", "Hutapea"],
    tokoh: ["Bara Tampubolon (Aktor)", "Sheila Marcia (Garis Ibu Tampubolon)"]
  }
];