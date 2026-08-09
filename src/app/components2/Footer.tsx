export default function Footer() {
  return (
    <footer className="home-footer">

      <div className="home-footer-left">

        <span>
          UNHEARD VOICES
        </span>

        <p>
          Stories that deserve to be heard.
        </p>

      </div>


      <div className="home-footer-socials">

        {/* Instagram */}

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


        {/* Email */}

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


        {/* TikTok */}

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
  );
}