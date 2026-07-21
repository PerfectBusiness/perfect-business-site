import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = { title: "About — Perfect Business" };

const steps = [
  { n: "01", h: "Selective admission", p: "Invitation only, by application. Exclusivity is the product — not everyone gets in." },
  { n: "02", h: "The network", p: "Admitted members join Row Together and plug into vetted, complementary peers and operators." },
  { n: "03", h: "The expertise", p: "Hands-on advisory turns strategy into execution across every discipline that matters." },
  { n: "04", h: "The capital", p: "The strongest ventures get backed — not just advised — with real capital behind them." },
];

export default function About() {
  return (
    <>
      <div className="pagehead">
        <Nav />
        <div className="wrap">
          <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>About</div>
          <h1>An accelerator built by operators.</h1>
          <p>
            Perfect Business scales businesses through three compounding assets — relationships,
            expertise, and capital. Not a classroom. An engine, run by people who build, scale, and exit real companies.
          </p>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="kicker">How it works</div>
          <h2>Network + Consulting + Capital = Scaling</h2>
          <div className="pillrow" style={{ marginTop: 26, gridTemplateColumns: "repeat(4,1fr)" }}>
            {steps.map((s) => (
              <div className="pill" key={s.n}>
                <div className="n">{s.n}</div>
                <h3 style={{ fontSize: 18 }}>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 34 }}>
            Network finds it. Consulting de-risks and builds it. Capital scales it. Winners
            re-enter the network as proof and mentors. That loop is the accelerator.
          </p>
        </section>

        <div className="rt">
          <div>
            <h2>Two layers, one ecosystem.</h2>
            <p>A public layer to learn and engage (Perfect Business Academy), and a private members&apos; club — Row Together — where the real relationships, deal flow, and advisory live.</p>
          </div>
          <Link href="/apply" className="btn btn-white">Apply for membership</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
