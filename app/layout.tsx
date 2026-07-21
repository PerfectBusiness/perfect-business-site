import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfect Business — Accelerator + Network",
  description:
    "An invitation-only accelerator and network. Network + Consulting + Capital = Scaling.",
  openGraph: {
    title: "Perfect Business — Accelerator + Network",
    description: "Network + Consulting + Capital = Scaling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
