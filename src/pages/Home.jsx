export default function Home() {
  return (
    <div className="card">
      <div className="pill">TRYONYOU · LIVE DEMO BUILD</div>
      <h1 className="h1">Your intelligent fashion mirror.</h1>
      <p className="muted">
        This build is ready to be deployed online. It contains the demo runway
        flow, PAU integration points, and the orchestration skeleton for
        PIAPCOC and future modules.
      </p>
      <div className="chips-row">
        <span className="chip">React + Vite 7.1.2</span>
        <span className="chip">Demo Runway</span>
        <span className="chip">PAU · Voice Intake (placeholder)</span>
        <span className="chip">PIAPCOC Bridge (placeholder)</span>
      </div>
    </div>
  );
}
