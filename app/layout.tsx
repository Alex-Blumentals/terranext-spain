import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraNext - Programa de Gestión Regenerativa Pizarroso-I",
  description: "Propuesta Fase 1: Diagnóstico y Evaluación con Puntos de Decisión GO/NO-GO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
