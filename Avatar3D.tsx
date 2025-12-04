import React, { useState, CSSProperties } from "react";
import { useLocation } from "wouter";
import HoloScene from "../components/HoloScene";

interface Outfit {
  id: number;
  name: string;
  color: string;
}

export default function Avatar3D() {
  const [, setLocation] = useLocation();
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit>({
    id: 1,
    name: "Classic Black",
    color: "#1a1a1a",
  });

  const outfits: Outfit[] = [
    { id: 1, name: "Classic Black", color: "#1a1a1a" },
    { id: 2, name: "Navy Blue", color: "#001f3f" },
    { id: 3, name: "Charcoal Grey", color: "#36454f" },
    { id: 4, name: "Deep Burgundy", color: "#800020" },
  ];

  const handleOutfitChange = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
  };

  const handleContinue = () => {
    setLocation("/wardrobe");
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Your Avatar</h1>
        <p style={styles.subtitle}>
          Explore your personal style in 360°. Rotate, zoom, and select your
          preferred outfit.
        </p>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* 3D Viewer */}
        <div style={styles.viewerSection}>
          <HoloScene selectedOutfit={selectedOutfit} />
          <p style={styles.viewerHint}>💡 Drag to rotate • Scroll to zoom</p>
        </div>

        {/* Outfit Selector */}
        <div style={styles.sidePanel}>
          <div style={styles.outfitSection}>
            <h2 style={styles.sectionTitle}>Select Outfit</h2>
            <div style={styles.outfitGrid}>
              {outfits.map((outfit) => (
                <button
                  key={outfit.id}
                  style={{
                    ...styles.outfitButton,
                    ...(selectedOutfit.id === outfit.id
                      ? styles.outfitButtonActive
                      : {}),
                  }}
                  onClick={() => handleOutfitChange(outfit)}
                >
                  <div
                    style={{
                      ...styles.outfitColor,
                      backgroundColor: outfit.color,
                    }}
                  />
                  <span style={styles.outfitName}>{outfit.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Outfit Details */}
          <div style={styles.detailsSection}>
            <h3 style={styles.detailsTitle}>Current Selection</h3>
            <p style={styles.detailsText}>
              <strong>{selectedOutfit.name}</strong>
            </p>
            <p style={styles.detailsDescription}>
              A timeless choice that exudes elegance and sophistication. Perfect
              for any occasion.
            </p>
          </div>

          {/* CTA Button */}
          <button style={styles.ctaButton} onClick={handleContinue}>
            Continue to Wardrobe
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fafafa",
    padding: "2rem",
    fontFamily: "'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "300",
    letterSpacing: "0.5px",
    color: "#000",
    margin: "0 0 0.5rem 0",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    margin: "0",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "3rem",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  } as CSSProperties,
  viewerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  } as CSSProperties,
  viewerHint: {
    fontSize: "0.875rem",
    color: "#999",
    textAlign: "center",
    margin: "0",
  },
  sidePanel: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  } as CSSProperties,
  outfitSection: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    margin: "0 0 1rem 0",
    color: "#000",
  },
  outfitGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  } as CSSProperties,
  outfitButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem",
    backgroundColor: "#f5f5f5",
    border: "2px solid transparent",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
    fontSize: "0.875rem",
  } as CSSProperties,
  outfitButtonActive: {
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  outfitColor: {
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    flexShrink: 0,
  } as CSSProperties,
  outfitName: {
    color: "#333",
    fontWeight: "500",
  },
  detailsSection: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  detailsTitle: {
    fontSize: "0.875rem",
    fontWeight: "600",
    margin: "0 0 0.75rem 0",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  } as CSSProperties,
  detailsText: {
    fontSize: "1rem",
    color: "#000",
    margin: "0 0 0.5rem 0",
  },
  detailsDescription: {
    fontSize: "0.875rem",
    color: "#666",
    lineHeight: "1.5",
    margin: "0",
  },
  ctaButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
  } as CSSProperties,
};

// Agregar hover effect al CTA button
const style = document.createElement("style");
style.textContent = `
  button[style*="background-color: rgb(0, 0, 0)"]:hover {
    background-color: #222 !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
if (typeof document !== "undefined") {
  document.head.appendChild(style);
}
