import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { people } from "../../lib/data";

export const metadata = { title: "People — Perfect Business" };

export default function People() {
  return (
    <>
      <div className="pagehead">
        <Nav />
        <div className="wrap">
          <div className="kicker" style={{ color: "rgba(255,255,255,.75)" }}>People</div>
          <h1>The bench behind the network.</h1>
          <p>
            Advisors, operators, and mentors across our categories. Real, credentialed
            expertise members can draw on — from building to scaling to exit.
          </p>
        </div>
      </div>

      <div className="wrap">
        <section className="blk">
          <div className="people">
            {people.map((p) => (
              <div className="person" key={p.name}>
                <div className="avatar">{p.initials}</div>
                <h3>{p.name}</h3>
                <div className="role">{p.role}</div>
                <p>{p.bio}</p>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 30 }}>
            Membership unlocks direct access to the full bench inside Row Together.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
