"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "GR">("EN");

  const isEnglish = language === "EN";

  return (
    <main className="home">

      {/* HEADER */}

      <header className="home-header">

        <a href="/" className="home-logo">
          UNHEARD VOICES
        </a>

        <nav className="home-nav">

          <a href="/stories">
            {isEnglish ? "Stories" : "Ιστορίες"}
          </a>

          <a href="/about">
            {isEnglish ? "About" : "Σχετικά"}
          </a>

          <button
            className="language-button"
            onClick={() =>
              setLanguage(isEnglish ? "GR" : "EN")
            }
            aria-label="Change language"
          >
            {isEnglish ? "ΕΛ" : "EN"}
          </button>

        </nav>

      </header>


      {/* HERO */}

      <section className="home-hero">

        <div className="hero-inner">

          <h1 className="hero-title">

            <span className="hero-line">
              {isEnglish
                ? "Stories that deserve"
                : "Ιστορίες που αξίζουν"}
            </span>

            <span className="hero-line hero-blue">
              {isEnglish
                ? "to be heard."
                : "να ακουστούν."}
            </span>

          </h1>


          <div className="hero-actions">

            <a
              href="/stories"
              className="read-stories-button"
            >
              {isEnglish
                ? "Read the stories →"
                : "Διάβασε τις ιστορίες →"}
            </a>

            <a
              href="/about"
              className="about-project-link"
            >
              {isEnglish
                ? "About the project"
                : "Σχετικά με το project"}
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="home-footer">

        <div className="home-footer-left">

          <span>
            UNHEARD VOICES
          </span>

          <p>
            {isEnglish
              ? "Every voice deserves to be heard. Use yours."
              : "Κάθε φωνή αξίζει να ακουστεί. Χρησιμοποίησε τη δική σου."}
          </p>

        </div>


        <div className="home-footer-socials">

          <a
            href="https://instagram.com/unheardvoices_project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>


          <a
            href="mailto:ves.asterios@icloud.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M4 7l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </a>


          <a
            href="https://www.tiktok.com/@unheardvoices_project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M14 4v10.2a4.2 4.2 0 1 1-3.2-4.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M14 4c.5 2.3 1.8 3.8 4 4.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>

        </div>

      </footer>

    </main>
  );
}