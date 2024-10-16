import React from "react";
import "../style/events.css";
import LandingVdo from "../Assets/images/WORKSHOP.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import downloadIcon from "../Assets/images/download.png";

const Workshop = () => {
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

      <div className="main">
        <div className="mainContent">
          <div className="iot">
            <div className="title">
              <div className="heading">
                Recent Trends and Challenges in Robotics
              </div>
              <div className="main_links">
              <a
                className="register"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZYPpxxDJ8VFcb-OS9tIxD86J-2JnGgIXdCl9nLNJB3nFDKA/viewform?usp=sf_link"
              >
                Register
              </a>
              {/* <div className="register brochure">
                <a
                  href="../../resources/Brochure/Workshop Brochure.pdf"
                  download="Paper Presentation Brochure"
                >
                  Brochure
                </a>
                <img className="download" src={DownloadLogo} alt="download" />
              </div> */}
            </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                The main objective of this event is to introduce participants to
                the recent trends and challenges in robotics. Robotics involves
                the design, construction, operation, and use of robots to
                perform tasks traditionally done by humans. With advancements in
                AI, machine learning, and automation, robotics is evolving
                rapidly, bringing new opportunities and obstacles in areas such
                as autonomous systems, human-robot interaction, and real-world
                applications across various industries.
              </p>
            </div>
            <div className="details">
              <h2 className="detailsTitle">DETAILS</h2>
              <div className="detailsContent">
                <div className="rounds">
                  <div className="roundsContent">
                    <p>
                      In this event, participants will gain insights into the
                      recent trends and challenges in robotics and explore its
                      diverse applications in various industries. The seminar
                      will cover topics such as autonomous systems, human-robot
                      interaction, robotics in manufacturing, healthcare, and AI
                      integration. This session is designed for attendees who
                      are eager to learn about the cutting-edge advancements in
                      robotics and the obstacles faced in real-world
                      implementation.
                    </p>
                    <p>Resource Person : Dr.D.Pritima, M.E, Ph.D</p>
                  </div>
                  <h3 className="roundsTitle">WhtasApp Group Link</h3>
                  <div className="roundsContent">
                    <a href="https://chat.whatsapp.com/Ev1qfSY80fzGNNhggQljT1">
                      https://chat.whatsapp.com/Ev1qfSY80fzGNNhggQljT1
                    </a>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Commences on 18.10.2024 @ 9:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts">
              <h2 className="contactsTitle">CONTACTS</h2>
              <p className="contactsContent">
                Ganesh S : <a href="tel:6374557399">6374557399</a>
              </p>
              <p className="contactsContent">
                Harshitha C : <a href="tel:9566478055">9566478055</a>
              </p>
              <p className="contactsContent">
                Vignesh k : <a href="tel:9943224606">9943224606</a>
              </p>
              <p className="contactsContent">
                Madhesh B : <a href="tel:9042023001">9042023001</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workshop;
