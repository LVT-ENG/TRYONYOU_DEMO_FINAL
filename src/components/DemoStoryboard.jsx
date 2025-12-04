const steps = [
  {
    id: "01",
    title: "Fashion classroom · The question",
    text:
      "A fashion class. The professor asks: “Can someone tell me what TRYONYOU is?” The room goes silent for a second."
  },
  {
    id: "02",
    title: "Pau appears · First snap",
    text:
      "A soft diffusion effect. Pau appears floating, snaps his wing, and the model appears in the center with Look #1."
  },
  {
    id: "03",
    title: "Second snap · New outfit",
    text:
      "Pau snaps again. The outfit changes completely: new fabric, new color, same body, same confidence."
  },
  {
    id: "04",
    title: "Third snap · Third look",
    text:
      "Third snap. Third outfit. The students realise it is not magic, it is fit logic and emotional styling."
  },
  {
    id: "05",
    title: "Claims carousel",
    text:
      "Below the scene, a clean carousel shows claims + images: fit accuracy, emotional comfort, wardrobe re-use, and more."
  },
  {
    id: "06",
    title: "Pau collects data by voice",
    text:
      "Scene narrows. Pau asks for height, sizes, event type and mood — only by voice. The mirror starts to build."
  }
];

export default function DemoStoryboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
      {steps.map((step) => (
        <div key={step.id} className="demo-step">
          <strong>{step.id} · {step.title}</strong>
          <span>{step.text}</span>
        </div>
      ))}
    </div>
  );
}
