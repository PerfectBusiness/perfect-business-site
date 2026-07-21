import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { companies, verticals } from "../../lib/data";

export const metadata = { title: "Track Record — Perfect Business" };

export default function TrackRecord() {
  return (
    <>
      <div className="pagehead">
        <Nav />
        <div className="wrap">
          <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>Track Record</div>
          <h1>Proven capacity, across categories.</h1>
          <p>
            A demonstration of what the ecosystem can build, operate, and exit — not a deal sheet.
            Across hospitality, technology &amp; marketplaces, and consumer brands.
          </p>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="statline" style={{ marginBottom: 8 }}>
            <div className="stat"><b>3</b><small>verticals</small></div>
            <div className="stat"><b>2</b><small>exits</small></div>
            <div className="stat"><b>25+</b><small>years building</small></div>
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

        <div className="cta">
          <div>
            <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>Join the ecosystem</div>
            <h2>Build with people who&apos;ve done it.</h2>
            <p>Membership is invitation only. Tell us about your business.</p>
          </div>
          <Link href="/apply" className="btn btn-white">Apply for membership</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
