import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Homepage.css";
import LandingVdo from "../Assets/video/KRIZEN '24.mp4";
import Technical from "../Assets/images/Technical.svg";
import NonTechnical from "../Assets/images/Cultural.svg";
import Workshop from "../Assets/images/workshop-svg.svg";

const Homepage = () => {
  return (
    <div>
      <Header />

      <section className="hero">
        <video loop autoPlay playsInline muted id="vid">
          <source src={LandingVdo} type="video/mp4" />
        </video>
      </section>

      <section></section>

      <section className="events__section fade-in">
        <div className="event">
          <img
            className="event__image"
            id="technical-img"
            src={Technical}
            alt=""
          />
          <div className="event__div">
            <div className="inner__content">
              <h3 className="event__title">TECHNICAL</h3>
              <p className="event__description">
                Technology drives human progress by transforming scientific
                knowledge into practical applications. It addresses challenges
                and creates innovative tools that improve our daily lives.
              </p>
              <Link to="/technical" className="event__overview">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="event second fade-in">
          <div className="event__div second_event">
            <div className="inner__content">
              <h3 className="event__title">Non-Technical</h3>
              <p className="event__description">
                Art, at its core, is a powerful means of expression. It spans a
                wide variety of creative activities, channeling imagination to
                convey emotions and ideas. Its meaning is defined by the
                artist's intent, allowing for limitless interpretation.
              </p>
              <Link to="/non-technical" className="event__overview">
                Explore
              </Link>
            </div>
          </div>
          <img className="event__image second_image" src={NonTechnical} alt="" />
        </div>

        <div className="event fade-in">
          <img className="event__image" src={Workshop} alt="" />
          <div className="event__div">
            <div className="inner__content">
              <h3 className="event__title">WORKSHOPS</h3>
              <p className="event__description">
                The pursuit of knowledge is endless, and curious minds are
                always eager to learn more. Workshops serve as a meeting point
                where inquisitive individuals and vast knowledge come together.
              </p>
              <Link to="/workshop" className="event__overview">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
