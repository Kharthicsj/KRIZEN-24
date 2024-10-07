import React from "react";
import "../style/events.css";
import LandingVdo from "../Assets/images/Non-Technical.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BeyondInks from "../Assets/images/Drawing.jpg";
import FotoHunt from "../Assets/images/fotoHunt.jpg";
import NarrativePulse from "../Assets/images/NarrativePulse.jpg";
import { Link } from 'react-router-dom';

const NonTechnical = () => {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero">
          <video loop autoPlay playsInline muted id="vid">
            <source src={LandingVdo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="cards">
        <div className="cards-content">
          <div className="event-card">
            <div className="event-img">
              <img src={BeyondInks} alt="Drawing" />
            </div>
            <div className="card-details">
              <h4>BEYOND INKS</h4>
              <p>
                A contest that provides a means to express imagination in a
                non-grammatical way. This competition tests the narrative,
                artistic, persuasive, and creative abilities of participants.
              </p>
              <Link to="/beyondinks">Explore</Link> 
            </div>
          </div>

          <div className="event-card">
            <div className="event-img">
              <img src={FotoHunt} alt="Foto Hunt" />
            </div>
            <div className="card-details">
              <h4>FOTO HUNT</h4>
              <p>
                A contest that lets you explore the vast creativity in
                photography. This contest explores and captures the moment in
                time. This contest also encourages your editing skills in your
                photography.
              </p>
              <Link to="/foto-hunt">Explore</Link>
            </div>
          </div>

          <div className="event-card">
            <div className="event-img">
              <img src={NarrativePulse} alt="Narrative Pulse" />
            </div>
            <div className="card-details">
              <h4>NARRATIVE PULSE</h4>
              <p>
                A contest that allows you to explore the vast creativity of
                photography. This competition captures moments in time and
                encourages you to enhance your editing skills.
              </p>
              <Link to="/narrative-pulse">Explore</Link> 
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NonTechnical;
