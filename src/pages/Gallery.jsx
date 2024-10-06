import React, { useState } from 'react';
import '../style/Gallery.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const contributors = [
    {
      name: 'Hariharan S',
      role: 'Event Facilitator & Web Development Team',
      imgSrc: require('../Assets/images/hariharan.jpeg'),
      email: 'hariharan9972@gmail.com',
      instagram: 'https://www.instagram.com/hari._._.2004',
      linkedin: 'https://www.linkedin.com/in/hariharan-s-45b5b0306'
    },
    {
      name: 'Kharthic SJ',
      role: 'Main Co-ordination & Web Development Team',
      imgSrc: require('../Assets/images/kharthic.jpg'),
      email: 'kharthicsj@gmail.com',
      linkedin: 'https://www.linkedin.com/in/kharthic-sj-188235256',
      github: 'https://github.com/Kharthicsj',
      website: 'https://valuable-shower-605264.framer.app'
    },
    {
      name: 'Selva Sriga B',
      role: 'Main Co-ordinator',
      imgSrc: require('../Assets/images/selva.jpeg'),
      email: 'selvasriga.9224@gmail.com',
      linkedin: 'https://www.linkedin.com/in/selvasriga-b-6bb9a3314',
      instagram: 'https://www.instagram.com/_.sri_selva._'
    },
    {
      name: 'Ashmita E',
      role: 'Main Co-ordinator',
      imgSrc: require('../Assets/images/ashmitha.jpeg'),
      email: '727722eumt020@skcet.ac.in',
      linkedin: 'https://www.linkedin.com/in/ashmita-e-597b48257',
      instagram: 'https://www.instagram.com/__ash.mi.ta__'
    },
    {
      name: 'Vishnu L',
      role: 'Main Co-ordinator',
      imgSrc: require('../Assets/images/vishnu.jpeg'),
      email: '727722eumt129@skcet.ac.in',
      linkedin: 'https://www.linkedin.com/in/vishnu-l-3926bb258',
      instagram: 'https://www.instagram.com/sy._.ko'
    },
    {
      name: 'Aman Sanif',
      role: 'Cultural Event Co-ordinator',
      imgSrc: require('../Assets/images/aman.webp'),
      email: 'amansanif@gmail.com',
      linkedin: 'https://www.linkedin.com/in/amansanif',
      instagram: 'https://www.instagram.com/mr.amansanif'
    },
    {
      name: 'Clifford Wesley C',
      role: 'Cultural Event Co-ordinator',
      imgSrc: require('../Assets/images/clifford.jpeg'),
      email: '727722eumt027@skcet.ac.in',
      linkedin: 'https://www.linkedin.com/in/cliffordwesley',
      instagram: 'https://www.instagram.com/clifford.wesley.c'
    }
  ];

  const galleryImages = Array.from({ length: 35 }, (_, index) => 
    require(`../Assets/Gallery/image-${index + 1}.jpeg`)
  );

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const filteredContributors = contributors.filter(contributor =>
    contributor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="parallax">
        <div className="parallax-overlay"></div>
        <div className="container">
          <h1>KRIZEN Gallery</h1>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <center><h2>Gallery</h2></center>
          <div className="scrolling-images">
            {galleryImages.map((image, index) => (
              <div 
                className="card" 
                key={index}
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt=''
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalIsOpen && (
        <div id="imageModal" className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <span className="prev" onClick={prevImage}>&#10094;</span>
          <span className="next" onClick={nextImage}>&#10095;</span>
          <img className="modal-content" src={galleryImages[currentImageIndex]} alt='' />
          <div id="caption">{`Image ${currentImageIndex + 1} of ${galleryImages.length}`}</div>
        </div>
      )}

      <section className="contributors">
        <div className="container">
          <h1>Contributors for KRIZEN - 2024</h1>
          <input 
            type="text" 
            id="search-box" 
            placeholder="Search by name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="contributors-grid">
            {filteredContributors.map((contributor, index) => (
              <div className="contributor-card" key={index}>
                <img src={contributor.imgSrc} alt={`${contributor.name}`} />
                <div className="card-content">
                  <h2 className="contributor-name">{contributor.name}</h2>
                  <p className="contributor-role">{contributor.role}</p>
                  <div className="social-icons">
                    {contributor.email && (
                      <a href={`mailto:${contributor.email}`} className="social-icon">
                        <i className="fa fa-envelope"></i>
                      </a>
                    )}
                    {contributor.instagram && (
                      <a href={contributor.instagram} className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {contributor.linkedin && (
                      <a href={contributor.linkedin} className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {contributor.github && (
                      <a href={contributor.github} className="social-icon">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {contributor.website && (
                      <a href={contributor.website} className="social-icon">
                        <i className="fa fa-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
