"use client";

import Footer from "../components2/Footer";

const stories = [
  {
    id: "3",
    title: "The Poet Behind the Words",
    author: "Shivaanshi, Young Poetry Author",
    category: "Writing & Poetry",
    image: "/stories/shivaanshi.jpg",
  },
  {
    id: "1",
    title: "What It Feels Like to Start Over Again and Again",
    author: "Diana, High-school Student",
    category: "Identity",
    image: "/stories/diana.jpg",
  },
  {
    id: "2",
    title: "More Than Just Grammar: A Teacher's Perspective",
    author: "Evi, English Teacher",
    category: "Education",
    image: "/stories/evi.jpg",
  },
];
export default function Stories() {
  return (
    <main>

      {/* HEADER */}

      <header className="stories-top">

        <a href="/" className="stories-logo">
          UNHEARD VOICES
        </a>

        <nav>
          <a href="/stories">Stories</a>
          <a href="/about">About</a>
          <a href="/">Home</a>
        </nav>

      </header>


      {/* INTRO */}

      <section className="stories-intro">

        <p className="section-label">
          THE STORIES
        </p>

        <h1>
          Voices from the margins.
        </h1>

        <p className="stories-description">
          Real experiences, real people. Each story is shared with
          permission and care.
        </p>

      </section>


      {/* STORIES */}

      <section className="story-grid">

        {stories.map((story) => (

          <article
            className="card"
            key={story.id}
          >

            <img
              src={story.image}
              alt={story.title}
              className="story-card-image"
            />

            <div className="card-content">
  <p className="card-category">{story.category}</p>

  <p className="card-description">{story.author}</p>

  <h2>{story.title}</h2>

  <a
    href={`/stories/${story.id}`}
    className="story-link"
  >
    Read story →
  </a>
</div>

          </article>

        ))}

      </section>


      {/* FOOTER */}

      <Footer />

    </main>
  );
}