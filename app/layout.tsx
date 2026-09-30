import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Batista Kottwitz | Desenvolvedor Full Stack",
  description: "Portfólio Web de Rafael Batista Kottwitz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#0B0F19] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}