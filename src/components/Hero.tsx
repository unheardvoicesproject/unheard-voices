type Props = {
  language: "EN" | "GR";
};

export default function Hero({ language }: Props) {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          {language === "EN"
            ? "Stories that deserve"
            : "Ιστορίες που αξίζουν"}

          <br />

          <span>
            {language === "EN"
              ? "to be heard."
              : "να ακουστούν."}
          </span>
        </h1>

        <div className="hero-actions">

          <a
            href="/stories"
            className="read-button"
          >
            {language === "EN"
              ? "Read the stories"
              : "Διάβασε τις ιστορίες"}
          </a>

          <a
            href="/about"
            className="about-link"
          >
            {language === "EN"
              ? "About the project"
              : "Σχετικά με το project"}
          </a>

        </div>

      </div>
    </section>
  );
}