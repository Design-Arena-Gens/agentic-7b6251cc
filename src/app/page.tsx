import { YFactExplorer } from './components/YFactExplorer';

const timeline = [
  {
    heading: 'A letter with many voices',
    body:
      'Y glides effortlessly between consonant and vowel sounds, adapting to the rhythm of each language it touches.'
  },
  {
    heading: 'A symbol for solutions',
    body:
      'From algebra to analytics, the vertical axis labeled y helps us visualize change, growth, and every unknown in between.'
  },
  {
    heading: 'A cue for curiosity',
    body:
      'Why, spelled with Y, invites us to question everything—fueling innovation, empathy, and deeper understanding.'
  }
];

export default function HomePage() {
  return (
    <main>
      <div className="wrapper">
        <section className="hero">
          <div>
            <span className="hero__letter" aria-hidden>
              Y
            </span>
          </div>
          <div>
            <h1 className="hero__heading">Celebrating the most versatile letter in the alphabet</h1>
            <p className="hero__description">
              Y bridges vowels and consonants, curiosity and certainty. Explore how this single letter shapes language,
              science, and the way we make sense of the world.
            </p>
          </div>
        </section>

        <div className="facts-grid">
          {timeline.map((item) => (
            <article key={item.heading} className="fact-card">
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <YFactExplorer />
      </div>
    </main>
  );
}
