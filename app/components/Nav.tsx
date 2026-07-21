import Link from "next/link";

export default function Nav({ academy = false }: { academy?: boolean }) {
  return (
    <nav className="nav">
      <Link href="/" className="brand">
        <div className="plogo">P</div>
        <b>
          Perfect Business{academy && <span className="acad"> Academy</span>}
        </b>
      </Link>
      <div className="navlinks">
        {academy ? (
          <>
            <Link href="/academy">About</Link>
            <Link href="/academy">Content</Link>
            <Link href="/academy">Programming</Link>
            <Link href="/academy">Events</Link>
            <Link href="/apply" className="navcta gold">Apply</Link>
          </>
        ) : (
          <>
            <Link href="/about">About</Link>
            <Link href="/people">People</Link>
            <Link href="/track-record">Track Record</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/apply" className="navcta">Login / Row Together</Link>
          </>
        )}
      </div>
    </nav>
  );
}
