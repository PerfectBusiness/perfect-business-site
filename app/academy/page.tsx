import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { content, programming } from "../../lib/data";

export const metadata = { title: "Perfect Business Academy" };

export default function Academy() {
  return (
    <>
      <div className="hero gold">
        <Nav academy />
        <div className="wrap">
          <span className="eyebrow">Perfect Business Academy</span>
          <h1>Learn from people who <em>build, scale, and exit.</em></h1>
          <p className="sub">
            The public education layer of Perfect Business — real operator insight through
            content, workshops, and programming. Open to the world; a doorway to the network.
          </p>
          <div className="herobtns">
            <Link href="/academy" className="btn btn-gold">Explore the content</Link>
            <Link href="/academy" className="btn btn-ghost">See upcoming programming</Link>
          </div>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="kicker gold">Featured Content</div>
          <h2>Ideas worth scaling.</h2>
          <p className="lead">
            Interviews, playbooks, and stories from operators who&apos;ve done it — curated, not crowd-sourced.
          </p>
          <div className="cards">
            {content.map((c) => (
              <div className="ccard" key={c.title}>
                <div className={`thumb ${c.thumb}`}><span className="ptag">{c.type}</span></div>
                <div className="cc">
                  <h3>{c.title}</h3>
                  <p>{c.excerpt}</p>
                  <div className="meta">{c.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="prog">
          <div className="row">
            <div>
              <div className="kicker gold">Programming</div>
              <h2 style={{ fontSize: 30 }}>Workshops &amp; live sessions</h2>
              <p className="lead">Practical, operator-led programming — open to the public, and a first taste of the network.</p>
            </div>
            <Link href="/academy" className="btn btn-gold">View all programming</Link>
          </div>
          <div className="events">
            {programming.map((e) => (
              <div className="ev" key={e.title}>
                <div className="date"><b>{e.day}</b><small>{e.month}</small></div>
                <div className="ei"><h4>{e.title}</h4><small>{e.detail}</small></div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta">
          <div>
            <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>From Academy to Network</div>
            <h2>Ready for more than content?</h2>
            <p>The Academy is the public doorway. The private engine — Row Together — is invitation only.</p>
          </div>
          <Link href="/apply" className="btn btn-gold">Apply for membership</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
