import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = { title: "Apply — Perfect Business" };

const doors = [
  { h: "Membership", p: "Apply to join Row Together — the invitation-only members' club." },
  { h: "Advisory", p: "Engage the network's expertise for a specific challenge." },
  { h: "Capital", p: "Pitch a venture for potential backing." },
  { h: "Partnership / Speaking", p: "Explore collaborations, programming, and speaking." },
];

export default function Apply() {
  return (
    <>
      <div className="pagehead">
        <Nav />
        <div className="wrap">
          <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>Apply / Inquire</div>
          <h1>Four doors. One ecosystem.</h1>
          <p>Tell us how you&apos;d like to engage. Membership is invitation only, and every inquiry is read.</p>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="pillrow" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {doors.map((d) => (
              <div className="pill" key={d.h}>
                <h3 style={{ fontSize: 19 }}>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}
          </div>

          <form className="pill" style={{ marginTop: 26, boxShadow: "none" }}>
            <h3 style={{ fontSize: 20, marginBottom: 16 }}>Start a conversation</h3>
            <div style={{ display: "grid", gap: 12, maxWidth: 520 }}>
              <input placeholder="Name" style={inp} />
              <input placeholder="Email" type="email" style={inp} />
              <input placeholder="Company" style={inp} />
              <textarea placeholder="What are you building, and how can the ecosystem help?" rows={4} style={inp} />
              <button type="button" className="btn btn-white" style={{ background: "var(--green)", color: "#fff", border: "none", cursor: "pointer" }}>
                Submit inquiry
              </button>
              <small style={{ color: "var(--muted)" }}>Form is a placeholder — wire to your CRM/email on launch.</small>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

const inp: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid var(--line)",
  fontSize: 14,
  fontFamily: "inherit",
};
