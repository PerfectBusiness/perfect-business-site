import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap cols">
        <div>
          <b>Perfect Business <span className="acad">Academy</span></b>
          <div style={{ fontSize: 12, marginTop: 8, maxWidth: "32ch", color: "rgba(255,255,255,.5)" }}>
            An invitation-only accelerator and network.
          </div>
        </div>
        <div>
          <b style={{ fontSize: 13 }}>Explore</b>
          <Link href="/about">About</Link>
          <Link href="/people">People</Link>
          <Link href="/track-record">Track Record</Link>
        </div>
        <div>
          <b style={{ fontSize: 13 }}>Engage</b>
          <Link href="/apply">Apply</Link>
          <Link href="/apply">Inquire</Link>
          <Link href="/academy">Programming</Link>
        </div>
        <div>
          <b style={{ fontSize: 13 }}>Members</b>
          <Link href="/apply">Login</Link>
          <Link href="/apply">Row Together</Link>
        </div>
      </div>
    </footer>
  );
}
