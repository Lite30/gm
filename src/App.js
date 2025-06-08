import { useState, useEffect , useRef} from 'react';
import './App.css';

import grannyImage from './images/granny.png';
import lImage from './images/l.png';
import firstSightImage from './images/first sight.png';


export default function GreenMuseum() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isGrowing, setIsGrowing] = useState(false);
  const [activeSection, setActiveSection] = useState('gallery');
  const galleryRef = useRef(null); // Ref for scrolling to gallery

  // Your eco-themed artwork
  const artwork = [
    
    { 
      id: 1, 
      title: "Ocean Memories", 
      category: "Marine", 
      image: grannyImage,
      description: "Celebrating the beauty of marine life while highlighting the fragility of our oceans in the face of climate change."
    },
    { 
      id: 2, 
      title: "Mountain Soul", 
      category: "Landscape", 
      image: lImage,
      description: "Majestic peaks rendered with sustainable digital techniques, reminding us of nature's enduring power and beauty."
    },
    { 
      id: 3, 
      title: "Desert Bloom", 
      category: "Botanical", 
      image: firstSightImage,
      description: "A rare desert flower captured in bloom, symbolizing resilience and the unexpected beauty of arid ecosystems."
    },
  ];

  // Organic gallery rotation
  useEffect(() => {
    if (activeSection === 'gallery') {
      const interval = setInterval(() => {
        setIsGrowing(true);
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % artwork.length);
          setIsGrowing(false);
        }, 500);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [artwork.length, activeSection]);

    const handleNavClick = (section) => {
    setActiveSection(section);
  };
  // Handle art card click: set image and scroll to gallery
  const handleArtCardClick = (index) => {
    setIsGrowing(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsGrowing(false);
      
      // Switch to gallery if not already there
      if (activeSection !== 'gallery') {
        setActiveSection('gallery');
      }
      
      // Scroll to gallery with smooth animation
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 300);
  };

  return (
    <div className="green-museum">
      <header className="museum-header">
        <div className="logo">
          <LeafIcon />
          <h1>Green Museum</h1>
        </div>
        <nav>
          <button 
            className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => handleNavClick('gallery')}
          >
            Gallery
          </button>
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      <main>
        {activeSection === 'gallery' && (
          <>
            <section className="organic-gallery" ref={galleryRef}>
              <div className={`gallery-container ${isGrowing ? 'growing' : ''}`}>
                <div className="image-wrapper">
                  <img 
                    src={artwork[currentImage].image} 
                    alt={artwork[currentImage].title}
                    loading="lazy"
                    className="organic-image"
                  />
                </div>
                <div className="vine-animation"></div>
              </div>
              <div className="gallery-info">
                <h2 className="art-title">{artwork[currentImage].title}</h2>
                <p className="art-category">{artwork[currentImage].category}</p>
                <div className="eco-badge">
                  <RecycleIcon />
                  <span>Sustainably Created</span>
                </div>
                <p className="art-description">{artwork[currentImage].description}</p>
              </div>
            </section>
            <section className="art-grid">
              {artwork.map((art, index) => (
                <div 
                  key={art.id} 
                  className={`art-card ${index === currentImage ? 'active' : ''}`}
                  onClick={() => handleArtCardClick(index)}
                >
                  <div className="card-overlay"></div>
                  <img
                    src={art.image}
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
          </>
        )}

        {activeSection === 'about' && (
  <section className="about-section">
    <div className="about-content">
      <h2>
        Green Museum currently will add people's art and showcase it for them. 
        It is a museum that is interested in showcasing art and all that. 
        Add this story for me, blah blah blah, we hope to be awesome and last long.
      </h2>
    </div>
  </section>
)}

        {activeSection === 'contact' && (
          <section className="contact-section">
            <div className="contact-content">
              <h2>Get in Touch</h2>
              <div className="contact-grid">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>📧 info@greenmuseum.art</p>
                  <p>📞 +1 (555) 123-4567</p>
                </div>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your eco-thoughts"></textarea>
                  </div>
                  <button type="submit" className="eco-button">
                    <RecycleIcon /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="eco-footer">
        <p>© {new Date().getFullYear()} Green Museum</p>
        <p>
          Created by{' '}
          <a
            href="https://github.com/lite30"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            Liteboho Maseli
          </a>
        </p>
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