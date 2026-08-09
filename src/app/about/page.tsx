"use client";

import { useState } from "react";
import Footer from "../components2/Footer";

export default function About() {
  const [language, setLanguage] = useState<"EN" | "GR">("EN");

  const isEnglish = language === "EN";

  return (
    <main>

      {/* HEADER */}

      <header className="about-header">

        <a href="/" className="about-logo">
          UNHEARD VOICES
        </a>

        <nav>

          <a href="/stories">
            {isEnglish ? "Stories" : "Ιστορίες"}
          </a>

          <a href="/about">
            {isEnglish ? "About" : "Σχετικά"}
          </a>

          <button
            className="about-language"
            onClick={() =>
              setLanguage(isEnglish ? "GR" : "EN")
            }
          >
            {isEnglish ? "ΕΛ" : "EN"}
          </button>

        </nav>

      </header>


      {/* HERO */}

      <section className="about-content">


        {/* 01 */}

        <div className="about-number">
          01
        </div>

        <div className="about-text">

          <h2>
            {isEnglish
              ? "Who I am"
              : "Ποιος είμαι"}
          </h2>

          <p>
            {isEnglish
              ? "I'm Asterios Vesirόpoulos, a Greek student who believes everyone carries a story worth telling. When someone's truth inspires you, that's a kind of luck, and that luck shouldn't be reserved for the few. I believe."
              : "Είμαι ο Αστέριος Βεσιρόπουλος, ένας Έλληνας μαθητής που πιστεύει ότι κάθε άνθρωπος κουβαλά μια ιστορία που αξίζει να ειπωθεί. Όταν η αλήθεια κάποιου σε εμπνέει, αυτό είναι ένα είδος τύχης και αυτή η τύχη δεν θα έπρεπε να ανήκει μόνο σε λίγους. Αυτό πιστεύω."}
          </p>

        </div>


        {/* 02 */}

        <div className="about-number">
          02
        </div>

        <div className="about-text">

          <h2>
            {isEnglish
              ? "The mission"
              : "Η αποστολή"}
          </h2>

          <p>
            {isEnglish
              ? "The Unheard Voices Project exists to seek out every voice that society has silenced. Too often, entire communities carry stories that never reach us — not because they aren't important, but because no one thought to listen. We're here to listen, and to make sure those stories endure."
              : "Το Unheard Voices Project υπάρχει για να αναζητήσει κάθε φωνή που η κοινωνία έχει αφήσει να σιωπήσει. Πολύ συχνά, ολόκληρες κοινότητες κουβαλούν ιστορίες που δεν φτάνουν ποτέ σε εμάς — όχι επειδή δεν είναι σημαντικές, αλλά επειδή κανείς δεν σκέφτηκε να ακούσει. Είμαστε εδώ για να ακούσουμε και να φροντίσουμε ώστε αυτές οι ιστορίες να μείνουν."}
          </p>

        </div>


        {/* 03 */}

        <div className="about-number">
          03
        </div>

        <div className="about-text">

          <h2>
            {isEnglish
              ? "How stories are collected"
              : "Πώς συλλέγονται οι ιστορίες"}
          </h2>

          <p>
            {isEnglish
              ? "Every story is gathered through guided interviews: personal, unhurried conversations conducted with care. If you have a story to share, or know someone who does, I'd love to hear from you."
              : "Κάθε ιστορία συγκεντρώνεται μέσα από καθοδηγούμενες συνεντεύξεις: προσωπικές, ήρεμες συζητήσεις που πραγματοποιούνται με φροντίδα. Αν έχεις μια ιστορία να μοιραστείς ή γνωρίζεις κάποιον που έχει, θα χαρώ να σε ακούσω."}
          </p>


          {/* PROCESS BULLETS */}

          <ul className="process-list">

            <li>
              {isEnglish
                ? "Stories can be shared under your name or anonymously — your comfort comes first."
                : "Οι ιστορίες μπορούν να δημοσιευτούν με το όνομά σου ή ανώνυμα — η άνεσή σου έρχεται πρώτη."}
            </li>

            <li>
              {isEnglish
                ? "Interviews can be conducted in Greek or English."
                : "Οι συνεντεύξεις μπορούν να πραγματοποιηθούν στα ελληνικά ή στα αγγλικά."}
            </li>

            <li>
              {isEnglish
                ? "Conversations can happen in person or online, wherever you feel most at ease."
                : "Οι συζητήσεις μπορούν να γίνουν από κοντά ή διαδικτυακά, όπου αισθάνεσαι πιο άνετα."}
            </li>

            <li>
              {isEnglish
                ? "Every story is written and shared with care, respect, and permission."
                : "Κάθε ιστορία γράφεται και μοιράζεται με φροντίδα, σεβασμό και την άδεια του ανθρώπου που τη μοιράστηκε."}
            </li>

          </ul>

        </div>


        {/* SOCIAL BUTTONS */}

        <div className="about-buttons">

          <a
            href="https://instagram.com/unheardvoices_project"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-button"
          >
            Instagram →
          </a>

          <a
            href="mailto:ves.asterios@icloud.com"
            className="about-social-button"
          >
            Email →
          </a>

          <a
            href="https://www.tiktok.com/@unheardvoices_project"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-button"
          >
            TikTok →
          </a>

        </div>


        {/* GET IN TOUCH */}

        <section className="get-in-touch">

          <div>

            <p className="about-label">
              {isEnglish
                ? "GET IN TOUCH"
                : "ΕΠΙΚΟΙΝΩΝΙΑ"}
            </p>

            <h2>
              {isEnglish
                ? "Have a story to share?"
                : "Έχεις μια ιστορία να μοιραστείς;"}
            </h2>

          </div>

        </section>


      </section>


      {/* FOOTER */}

      <Footer />

    </main>
  );
}