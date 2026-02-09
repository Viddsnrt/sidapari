import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import komponen UI
// Catatan: Jika folder 'components' ada di dalam folder 'app', ubah path menjadi './components/Navbar'
// Jika folder 'components' sejajar dengan folder 'app', gunakan '../components/Navbar'
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARTA BATAK - Revitalisasi Budaya Toba",
  description: "Platform edukasi dan cek relasi marga berbasis Ethno-Computing dan Gamifikasi.",
  icons: {
    icon: "/favicon.ico", // Pastikan ada favicon jika ingin custom
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar akan selalu ada di atas */}
        <Navbar />

        {/* Main Content akan mengisi ruang kosong (flex-grow) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer akan selalu ada di bawah */}
        <Footer />
      </body>
    </html>
  );
}