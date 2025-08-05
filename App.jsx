import React, { useState } from "react";

const curtainImages = [
  "https://res.cloudinary.com/db2yievod/image/upload/v1754163281/curtains%20samples/u6dtrabjuouzhcy7zqi4.jpg",
  "https://res.cloudinary.com/db2yievod/image/upload/v1754149339/IMG-20250802-WA0004_f0t1wl.jpg",
  "https://res.cloudinary.com/db2yievod/image/upload/v1754149339/IMG-20250802-WA0004_f0t1wl.jpg", // (duplicated, you can change this later)
];

export default function CurtainVisualizer() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🪟 Curtain Visualizer</h1>

      {/* Thumbnail list */}
      <div style={{ display: "flex", marginBottom: 20 }}>
        {curtainImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Curtain ${index + 1}`}
            style={{
              width: 120,
              height: 120,
              objectFit: "cover",
              marginRight: 10,
              border: selectedImage === url ? "3px solid #00f" : "1px solid #ccc",
              cursor: "pointer",
            }}
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>

      {/* Main room display */}
      <div style={{ position: "relative", width: 600, height: 400, border: "1px solid #ddd" }}>
        <img
          src="/room.jpg" // Replace with your local placeholder or room background image
          alt="Room"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Curtain"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}
