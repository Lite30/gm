import { useState, useRef } from 'react';
import './App.css';

import grannyImage from './images/granny.png';
import lImage from './images/l.png';
import firstSightImage from './images/first sight.png';
import asset1Jpg from './images/Asset 1xxxhdpi.jpg';
import asset1Png from './images/Asset 1xxxhdpi.png';
import facey2 from './images/facey2.jpg';
import faceyRed from './images/FACEYRED.jpg';
import grandpa from './images/grandpa.jpg';
import moonsat from './images/moonsat.jpg';
import newWay from './images/new way.jpg';
import notAuthentic from './images/not authentic.png';
import piece1 from './images/piece1.jpg';
import theArchOfTime from './images/THEARCHOFTIIME.jpg';
import whoKni from './images/WHOKNI.jpg';

export default function GreenMuseum() {
  const [activeSection, setActiveSection] = useState('gallery');
  const galleryRef = useRef(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Your eco-themed artwork
  const artwork = [
    { 
      id: 1, 
      title: "Grans", 
      category: "Liteboho Maseli", 
      image: grannyImage,
      description: "Beauty of GRANS blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, i dont know what to say"
    },
    { 
      id: 2, 
      title: "Skeleton Soul", 
      category: "Liteboho Maseli", 
      image: lImage,
      description: "Majestic peaks rendered with sustainable digital techniques, reminding us of nature's enduring power and beauty."
    },
    { 
      id: 3, 
      title: "Skulpture", 
      category: "Liteboho Maseli", 
      image: firstSightImage,
      description: "MEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACEMEAN FACE.MEAN FACE"
    },
    { 
      id: 4, 
      title: "Asset 1", 
      category: "Liteboho Maseli", 
      image: asset1Jpg,
      description: "An abstract representation of ecological balance using geometric patterns and vibrant colors."
    },
    { 
      id: 5, 
      title: "Asset 1 Variation", 
      category: "Liteboho Maseli", 
      image: asset1Png,
      description: "Digital reinterpretation of natural forms exploring the relationship between technology and ecology."
    },
    { 
      id: 6, 
      title: "Facey", 
      category: "Liteboho Maseli", 
      image: facey2,
      description: "Portrait study capturing human connection with nature through expressive brushwork."
    },
    { 
      id: 7, 
      title: "Red Portrait", 
      category: "Liteboho Maseli", 
      image: faceyRed,
      description: "Bold chromatic exploration of identity and environmental consciousness."
    },
    { 
      id: 8, 
      title: "Grandpa", 
      category: "Liteboho Maseli", 
      image: grandpa,
      description: "Intergenerational wisdom and the passing down of ecological stewardship traditions."
    },
    { 
      id: 9, 
      title: "Moon Satellite", 
      category: "Liteboho Maseli", 
      image: moonsat,
      description: "Celestial exploration piece examining humanity's place in the cosmic ecosystem."
    },
    { 
      id: 10, 
      title: "New Way", 
      category: "Liteboho Maseli", 
      image: newWay,
      description: "Visionary approach to sustainable living through innovative design principles."
    },
    { 
      id: 11, 
      title: "Authenticity", 
      category: "Liteboho Maseli", 
      image: notAuthentic,
      description: "Critical examination of genuine versus artificial in contemporary environmental discourse."
    },
    { 
      id: 12, 
      title: "Fragment", 
      category: "Liteboho Maseli", 
      image: piece1,
      description: "Deconstructed landscape highlighting the fragmentation of natural habitats."
    },
    { 
      id: 13, 
      title: "Arch of Time", 
      category: "Liteboho Maseli", 
      image: theArchOfTime,
      description: "Geological time scales represented through monumental digital architecture."
    },
    { 
      id: 14, 
      title: "Unknown Connections", 
      category: "Liteboho Maseli", 
      image: whoKni,
      description: "Exploration of invisible ecological networks that sustain life on Earth."
    }
  ];

  const handleImageClick = (art) => {
    setSelectedImage(art);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
    
    setTimeout(() => {
      setShowComingSoon(false);
    }, 3000);
  };

  return (
    <div className="green-museum">
      <header className="museum-header">
        <div className="logo">
          <h1>Green Museum</h1>
        </div>
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <nav className={`${isMobileMenuOpen ? 'open' : ''}`}>
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
          <section className="vertical-gallery" ref={galleryRef}>
            {artwork.map((art, index) => (
              <div key={art.id} className="gallery-post">
                <div className="gallery-container">
                  <div className="image-wrapper">
                    <img 
                      src={art.image} 
                      alt={art.title}
                      loading="lazy"
                      className="organic-image"
                      onClick={() => handleImageClick(art)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="vine-animation"></div>
                </div>
                <div className="gallery-info">
                  <h2 className="art-title">{art.title}</h2>
                  <p className="art-category">{art.category}</p>
                  <p className="art-description">{art.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about-section">
            <div className="about-content">
              <h2>
                We are Green Museum — a living canvas, a shared altar for modern expression.

                This is more than a gallery. It's a space where soul meets form, where brushstrokes carry stories, and where light, color, and texture speak what words cannot. We gather the visions of many — artists from different paths, backgrounds, and rhythms — into one collective heartbeat of modern art.

                Here, we believe creation is sacred. Every piece is a portal. Every artist, a vessel. Whether it's bold, quiet, wild, or still — if it speaks truth, it belongs.

                We are here to hold space for that truth.
                To uplift. To connect. To remember beauty in all its raw, evolving shapes.

                Wander through. Feel what calls you.
                This is a place for seekers, for creators, for anyone listening with their eyes open.
              </h2>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact-section">
            <div className="contact-content">
              <h2>Get in Touch</h2>
              {showComingSoon ? (
                <div className="coming-soon-message">
                  <div className="leaf-spinner">
                    <LeafIcon />
                  </div>
                  <h3>Coming Soon!</h3>
                  <p>We're working on our messaging system. Stay tuned!</p>
                </div>
              ) : (
                <div className="contact-grid">
                  <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>📧 litebohomaseli3@gmail.com</p>
                    <p>📞 +266 5855 9628</p>
                  </div>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" rows="5" placeholder="Your thoughts" required></textarea>
                    </div>
                    <button type="submit" className="eco-button">
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <CloseIcon />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

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

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}