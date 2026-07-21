import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { companies, verticals } from "../lib/data";

export default function Home() {
  return (
    <>
      <div className="hero green">
        <Nav />
        <div className="wrap">
          <span className="eyebrow">Invitation only · Accelerator + Network</span>
          <h1>We don&apos;t just connect people. We scale them.</h1>
          <div className="equation">
            Network <span>+</span> Consulting <span>+</span> Capital <span>=</span> Scaling
          </div>
          <p className="sub">
            Perfect Business is a private accelerator and network built on relationships,
            hands-on expertise, and real capital — a proven engine for building, growing,
            and exiting businesses across categories.
          </p>
          <div className="herobtns">
            <Link href="/apply" className="btn btn-white">Apply for membership</Link>
            <Link href="/about" className="btn btn-ghost">Explore the ecosystem</Link>
          </div>
          <div className="voice">&quot;It never gets easier — you just get better.&quot;</div>
        </div>
      </div>

      <div className="wrap pillars">
        <div className="pillrow">
          <div className="pill">
            <div className="n">01 — NETWORK</div>
            <h3>Row Together</h3>
            <p>A vetted, invitation-only community of complementary operators, founders, and mentors. Relationships that compound.</p>
          </div>
          <div className="pill">
            <div className="n">02 — CONSULTING</div>
            <h3>Hands-on expertise</h3>
            <p>Advisory that turns strategy into execution — go-to-market, fundraising, operations, brand, and beyond.</p>
          </div>
          <div className="pill">
            <div className="n">03 — CAPITAL</div>
            <h3>Backed, not just advised</h3>
            <p>The strongest ventures get capital behind them. A track record of building and exiting real businesses.</p>
          </div>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="tr-head">
            <div>
              <div className="kicker">Track Record</div>
              <h2>Proven capacity across categories.</h2>
              <p className="lead">
                Not a deal sheet — a demonstration. A portfolio built, operated, and exited
                across hospitality, technology, and consumer brands.
              </p>
            </div>
            <div className="statline">
              <div className="stat"><b>3</b><small>verticals</small></div>
              <div className="stat"><b>2</b><small>exits</small></div>
              <div className="stat"><b>25+</b><small>years building</small></div>
            </div>
          </div>

          {verticals.map((v) => (
            <div className="vert" key={v}>
              <h4>{v}</h4>
              <div className="cos">
                {companies.filter((c) => c.vertical === v).map((c) => (
                  <div className="co" key={c.name}>
                    {c.exited && <span className="exit">Exited</span>}
                    <div className="name">{c.name}</div>
                    <div className="desc">{c.oneLiner}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className="rt">
          <div>
            <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>The Members&apos; Club</div>
            <h2>Row Together</h2>
            <p>Inside the private layer: member matchmaking, community threads, private programming, and direct access to mentors and deal flow.</p>
            <div className="tags">
              <span>Matchmaking</span><span>Community</span><span>Programming</span><span>Advisory</span><span>Deal Flow</span>
            </div>
          </div>
          <Link href="/apply" className="btn btn-white">Request an invitation</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
