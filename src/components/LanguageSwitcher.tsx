type Props = {
  language: "EN" | "GR";
  setLanguage: (lang: "EN" | "GR") => void;
};

export default function LanguageSwitcher({
  language,
  setLanguage,
}: Props) {
  return (
    <button
      className="language"
      onClick={() =>
        setLanguage(language === "EN" ? "GR" : "EN")
      }
    >
      {language === "EN" ? "ΕΛ" : "EN"}
    </button>
  );
}