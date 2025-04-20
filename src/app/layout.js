import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

export const metadata = {
  title: "Calm - The #1 App for Meditation and Sleep",
  description: "Calm is the #1 app for sleep and meditation. Join the millions experiencing better sleep, lower stress, and less anxiety."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={metadata.description} />
        <meta name="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title}></meta>
        <title>{metadata.title}</title>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
