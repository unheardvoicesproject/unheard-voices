import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  language: "EN" | "GR";
  setLanguage: (lang: "EN" | "GR") => void;
};

export default function Header({
  language,
  setLanguage,
}: Props) {
  return (
    <header className="header">

      <a href="/" className="logo">
        UNHEARD VOICES
      </a>

      <nav>

        <a href="/stories">
          {language === "EN" ? "Stories" : "Ιστορίες"}
        </a>

        <a href="/about">
          {language === "EN" ? "About" : "Σχετικά"}
        </a>

        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
        />

      </nav>

    </header>
  );
}