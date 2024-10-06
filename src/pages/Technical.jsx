import React from "react";
import "../style/events.css";
import LandingVdo from "../Assets/images/TECHNICAL.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaperPresentation from "../Assets/images/Paper Presentation.jpg";
import ProjectPresentation from "../Assets/images/Project presentation.jpg";
import Web from "../Assets/images/web.jpg";
import ElectroQuiz from "../Assets/images/electrioQuiz.jpg";
import circuitTrack from "../Assets/images/CircuitTrack.jpeg";
import cadfest from "../Assets/images/cadfest.jpg";
import OldTownRoad from "../Assets/images/OldTownRoad.jpg";
import { Link } from 'react-router-dom';

const Technical = () => {
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
              <img src={PaperPresentation} alt="" />
            </div>
            <div className="card-details">
              <h4>PAPER PRESENTATION</h4>
              <p>
                Showcasing groundbreaking concepts, this event highlights the
                inventive presentations of participants, driving curiosity and
                enhancing expertise in the technical domain.
              </p>
              <Link to="/paper-presentation">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={ProjectPresentation} alt="" />
            </div>
            <div className="card-details">
              <h4>PROJECT PRESENTATION</h4>
              <p>
                Join us in showcasing groundbreaking projects that push the
                boundaries of technology! This event is dedicated to unveiling
                the brilliance of participants' ideas, inspiring innovation, and
                cultivating a thirst for knowledge in the ever-evolving world of
                technology.
              </p>
              <Link to="/project-presentation">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={Web} alt="" />
            </div>
            <div className="card-details">
              <h4>WEB/APP</h4>
              <p>
                Experience a fresh and modern Web/App Development event where
                attendees can show off their coding and design skills. This
                event is organized for developers by developers.
              </p>
              <Link to="/web-app-development">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={ElectroQuiz} alt="" />
            </div>
            <div className="card-details">
              <h4>ELECTRIO QUIZ</h4>
              <p>
                This is an exciting quiz contest that will challenge
                participants' knowledge in the dynamic world of electrical and
                electronics field. Join us for a unique opportunity to test your
                skills and deepen your understanding of innovative advancements
                in the field!
              </p>
              <Link to="/electrio-quiz">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={circuitTrack} alt="" />
            </div>
            <div className="card-details">
              <h4>CIRCUIT TRACK</h4>
              <p>
                Prepare to engineer and operate a line-following mobile robot
                that expertly navigates along a designated path. Showcase your
                technical skills and precision as you race to be the first to
                cross the finish line!
              </p>
              <Link to="/circuit-track">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={cadfest} alt="" />
            </div>
            <div className="card-details">
              <h4>CAD FEST</h4>
              <p>
                Competitors will engage in challenges that assess essential
                competencies in design using Computer-Aided Design (CAD) tools.
                This platform offers a unique opportunity to refine your skills,
                explore innovative design techniques, and significantly boost
                your confidence in engineering design.
              </p>
              <Link to="/cadfest">Explore</Link>
            </div>
          </div>
          <div className="event-card">
            <div className="event-img">
              <img src={OldTownRoad} alt="" />
            </div>
            <div className="card-details">
              <h4>Old Town Road</h4>
              <p>
                This event challenges participants to design and operate a
                human-controlled mobile robot that can navigate uneven terrain.
                Participants will showcase their engineering and driving skills
                while addressing obstacles in a dynamic environment.
              </p>
              <Link to="/old-town-road">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technical;
