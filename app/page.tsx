import business from '../data/business.json';

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, '')}`;
const address = '36 W 15th St, New York, NY 10011';
const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const fieldNotes = [
  {
    label: 'Local conditions',
    title: 'Built around Manhattan buildings',
    body: 'VacRock HVAC works in Manhattan, where access, risers, roof equipment, and occupied spaces all shape the job before any equipment is touched.',
  },
  {
    label: 'Project fit',
    title: 'HVAC work with contractor-level coordination',
    body: 'For building owners, managers, and residents who need HVAC work handled with clear site planning and a direct point of contact.',
  },
  {
    label: 'Next step',
    title: 'Start with a call',
    body: 'Share the address, the building type, and what is happening with the system. VacRock can then point the conversation toward the right visit or scope.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">HVAC contractor serving Manhattan</p>
            <h1 id="hero-title">HVAC work for Manhattan spaces that need a planned approach.</h1>
            <p className="hero-text">
              {business.name} handles HVAC needs in Manhattan with a phone-first path for property teams,
              residents, and businesses that need to discuss the job before scheduling.
            </p>
            <div className="hero-actions" aria-label="Primary contact options">
              <a className="button primary" href={phoneHref}>
                Call {business.phone}
              </a>
              <a className="button secondary" href={business.website}>
                Visit website
              </a>
            </div>
          </div>

          <aside className="dispatch-card" aria-label="Business snapshot">
            <div className="dispatch-top">
              <span className="status-dot" aria-hidden="true" />
              <span>Manhattan HVAC contact</span>
            </div>
            <dl className="dispatch-list">
              <div>
                <dt>Business</dt>
                <dd>{business.name}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>HVAC / general contractor</dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>Manhattan</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={phoneHref}>{business.phone}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="proof-band" aria-label="Available business details">
        <div className="site-shell proof-grid">
          <div>
            <span className="proof-kicker">Google profile notes</span>
            <strong>5.0 rating from 5 Google reviews</strong>
          </div>
          <div>
            <span className="proof-kicker">Listed location</span>
            <a href={mapHref}>{address}</a>
          </div>
          <div>
            <span className="proof-kicker">Direct contact</span>
            <a href={phoneHref}>{business.phone}</a>
          </div>
        </div>
      </section>

      <section className="site-shell section-block" aria-labelledby="field-title">
        <div className="section-heading">
          <p className="eyebrow">Before the appointment</p>
          <h2 id="field-title">The details matter in dense buildings.</h2>
        </div>
        <div className="field-grid">
          {fieldNotes.map((note) => (
            <article className="field-card" key={note.title}>
              <span>{note.label}</span>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell route-section" aria-labelledby="route-title">
        <div className="route-panel">
          <div>
            <p className="eyebrow">How to move forward</p>
            <h2 id="route-title">Call with the address and the HVAC issue.</h2>
          </div>
          <p>
            A short call is the clearest first step. Mention whether the space is residential,
            commercial, or managed property, and describe what changed: no cooling, noise, airflow,
            equipment access, or a planned upgrade.
          </p>
          <a className="button primary dark" href={phoneHref}>
            Start with {business.phone}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell footer-inner">
          <div>
            <strong>{business.name}</strong>
            <span>HVAC services in Manhattan</span>
          </div>
          <nav aria-label="Footer links">
            <a href={phoneHref}>Call</a>
            <a href={business.website}>Website</a>
            <a href={mapHref}>Map</a>
          </nav>
        </div>
      </footer>

      <a className="mobile-call" href={phoneHref}>
        Call {business.phone}
      </a>
    </main>
  );
}
