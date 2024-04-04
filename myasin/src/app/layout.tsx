import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Yasin's Profile",
  description: "Highly motivated and results-oriented IT professional with 20+ years of experience in diverse fields, including project management, quality assurance, and IT support. Proven ability to learn new skills quickly, as demonstrated by recent certifications in Certified Artificial Intelligence Developer and Certified Cloud Native Developer. Currently pursuing a Certified Cloud Applied Generative AI Engineer program, specializing in GenAI for Cyber Security. Passionate about leveraging AI to address security challenges in the Internet of Things (IoT) landscape. Seeking a [designation] role to contribute my technical expertise and AI knowledge to safeguarding connected devices and systems."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
