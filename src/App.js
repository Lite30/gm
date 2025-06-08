import { useState, useEffect } from 'react';
import './App.css';

export default function GreenMuseum() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);

  // Your eco-themed artwork
  const artwork = [
    { id: 1, title: "Forest Whispers", category: "Nature", image: "forest.jpg" },
    { id: 2, title: "Ocean Memories", category: "Marine", image: "granny.png" },
    { id: 3, title: "Mountain Soul", category: "Landscape", image: "l.png" },
    { id: 4, title: "Desert Bloom", category: "Botanical", image: "first sight.png" },
  ];

  // Organic gallery rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGrowing(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % artwork.length);
        setIsGrowing(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, [artwork.length]);

  return (
    <div className="green-museum">
      <header className="museum-header">
        <div className="logo">
          <LeafIcon />
          <h1>Green Museum</h1>
        </div>
        <nav>
          <button className="nav-link">Gallery</button>
          <button className="nav-link">About</button>
          <button className="nav-link">Eco-Statement</button>
        </nav>
      </header>

      <main>
        <section className="organic-gallery">
          <div className={`gallery-container ${isGrowing ? 'growing' : ''}`}>
            <img 
              src={`/images/${artwork[currentImage].image}`} 
              alt={artwork[currentImage].title}
              loading="lazy"
              className="organic-image"
            />
            <div className="vine-animation"></div>
          </div>
          <div className="gallery-info">
            <h2 className="art-title">{artwork[currentImage].title}</h2>
            <p className="art-category">{artwork[currentImage].category}</p>
            <div className="eco-badge">
              <RecycleIcon />
              <span>Sustainably Created</span>
            </div>
          </div>
        </section>

        <section className="art-grid">
          {artwork.map((art, index) => (
            <div 
              key={art.id} 
              className={`art-card ${index === currentImage ? 'active' : ''}`}
              onClick={() => {
                setIsGrowing(true);
                setTimeout(() => {
                  setCurrentImage(index);
                  setIsGrowing(false);
                }, 300);
              }}
            >
              <div className="card-overlay"></div>
              <img
                src={`/images/${art.image}`}
                alt={art.title}
                loading="lazy"
              />
              <div className="card-info">
                <h3>{art.title}</h3>
                <p>{art.category}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="eco-footer">
        <p>🌎 Committed to sustainable digital art presentation</p>
        <p>© {new Date().getFullYear()} Green Museum - Carbon Neutral Hosting</p>
      </footer>
    </div>
  );
}

// Simple SVG components
function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M17 8C8 10 5.9 16.8 4 18c3 0 5-1 7-3 3 3 6 4 9 2-2-5 .5-11-6-12-3 0-5 1-7 3-1-1-3-3-5-2 5 4 7 8 3 14z" fill="#4CAF50"/>
    </svg>
  );
}

function RecycleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M5 6h14l-1.6 4H6.6zm13 12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-5h12zm2-14l-3-4H7L4 4H1v2h3l1.6 4h12.8L20 6h3V4z" fill="#8BC34A"/>
    </svg>
  );
}