import DemoStoryboard from "../components/DemoStoryboard";

export default function Demo() {
  return (
    <div className="layout-grid">
      <div className="card">
        <div className="pill">DEMO · CLASSROOM RUNWAY</div>
        <h1 className="h1">“What is TRYONYOU?”</h1>
        <p className="muted">
          A fashion class. A question. A pause. Pau snaps his wing and the model
          changes outfits in seconds. Then Pau collects data by voice and builds
          the user&apos;s mirror.
        </p>
        <DemoStoryboard />
      </div>
      <div className="card">
        <div className="badge">
          <span className="badge-dot" />
          LIVE DEMO READY
        </div>
        <p className="muted" style={{ marginTop: 10 }}>
          This page is the entry point for the online demo. Developers can plug
          in real 3D, voice and API logic later without breaking the layout.
        </p>
        <ul className="muted" style={{ fontSize: 13, paddingLeft: 18 }}>
          <li>Step 1 — Classroom question &amp; Pau entrance.</li>
          <li>Step 2 — Three outfit changes (snap, snap, snap).</li>
          <li>Step 3 — Claims carousel explains what TRYONYOU does.</li>
          <li>Step 4 — Pau switches to voice mode and collects data.</li>
          <li>Step 5 — Avatar (PIAPCOC) placeholder appears.</li>
        </ul>
      </div>
    </div>
  );
}
