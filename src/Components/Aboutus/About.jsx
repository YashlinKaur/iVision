import { useEffect } from "react";
import "./About.css";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const WORDS = ["Innovation", "Simplicity", "Precision", "Elegance", "Vision", "Quality"];

export default function About() {
  useReveal();

  return (
    <div className="ab-root">

      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero__noise" />

        <span className="ab-eyebrow" data-reveal>About iVision</span>

        <h1 className="ab-hero__title" data-reveal>
          Inspired by<br />
          <em>Innovation.</em><br />
          Built for<br />
          Simplicity.
        </h1>

        <p className="ab-hero__sub" data-reveal>
          iVision is more than an online store. It's a modern destination crafted for people who appreciate exceptional design, premium technology, and seamless digital experiences.
        </p>

        <div className="ab-hero__scroll-hint" data-reveal>
          <span />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="ab-marquee" aria-hidden>
        <div className="ab-marquee__track">
          {[...WORDS, ...WORDS, ...WORDS].map((w, i) => (
            <span key={i} className="ab-marquee__word">
              {w} <span className="ab-marquee__dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* VISION */}
      <section className="ab-section ab-vision">
        <div className="ab-vision__text" data-reveal>
          <span className="ab-eyebrow">Our Vision</span>
          <h2 className="ab-h2">Technology should never feel complicated.</h2>
          <p className="ab-body">
            At iVision, our vision is to create a space where innovation meets simplicity.
          </p>
        </div>

        <div className="ab-vision__img-wrap" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80"
            alt="iPhone"
            className="ab-vision__img"
          />
          <div className="ab-vision__img-glow" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="ab-philosophy">
        <div className="ab-philosophy__inner">
          <span className="ab-eyebrow ab-eyebrow--light" data-reveal>
            Philosophy
          </span>

          <h2 className="ab-philosophy__title" data-reveal>
            Great Technology<br />
            Should Feel <em>Invisible.</em>
          </h2>

          <p className="ab-philosophy__body" data-reveal>
            Technology is not specs — it's experience.
          </p>
        </div>

        <div className="ab-philosophy__orb ab-philosophy__orb--1" />
        <div className="ab-philosophy__orb ab-philosophy__orb--2" />
      </section>

      {/* HIGHLIGHTS */}
      <section className="ab-section ab-highlights">
        {[
          { num: "01", title: "Modern Design", body: "Clean layouts and premium experience." },
          { num: "02", title: "Performance First", body: "Fast and optimized interactions." },
          { num: "03", title: "Built with React", body: "Scalable modern frontend system." },
        ].map((item, i) => (
          <div key={i} className="ab-highlight-card" data-reveal>
            <span className="ab-highlight-card__num">{item.num}</span>
            <h3 className="ab-highlight-card__title">{item.title}</h3>
            <p className="ab-highlight-card__body">{item.body}</p>
          </div>
        ))}
      </section>

      {/* WHY */}
      <section className="ab-section ab-why">
        <h2 className="ab-h2 ab-why__heading" data-reveal>
          Why Choose iVision
        </h2>

        <div className="ab-why__grid">
          {[
            { icon: "◈", title: "Curated Experience", body: "Every detail is designed." },
            { icon: "◇", title: "Elegant Simplicity", body: "Clean and intuitive UI." },
            { icon: "◉", title: "Future Ready", body: "Built for modern web." },
          ].map((card, i) => (
            <div key={i} className="ab-why-card" data-reveal>
              <span className="ab-why-card__icon">{card.icon}</span>
              <h3 className="ab-why-card__title">{card.title}</h3>
              <p className="ab-why-card__body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="ab-cta__inner">
          <h2 className="ab-cta__title" data-reveal>
            Discover<br />What's Next
          </h2>

          <p className="ab-cta__sub" data-reveal>
            Explore premium innovation.
          </p>

          <button className="ab-cta__btn" data-reveal>
            Explore Collection <span className="ab-cta__btn-arrow">→</span>
          </button>
        </div>

        <div className="ab-cta__circle" />
      </section>

    </div>
  );
}