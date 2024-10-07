import React from "react";
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Circuittrack = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">CIRCUIT TRACK</div>
            <div className="main_links">
              <a className="register" href="#registration-closed">
                Registration open's soon
              </a>
              <div className="register brochure">
                <a
                  href="/resources/Brochure/PaperPresentation Brochure.pdf"
                  download="Paper Presentation Brochure"
                >
                  Brochure
                </a>
                <img className="download" src={DownloadLogo} alt="download" />
              </div>
            </div>
          </div>
          <div className="about">
            <h2 className="aboutTitle">ABOUT</h2>
            <p className="aboutContent">
              This contest is all about testing the Participant's problem
              solving ability in the field of electronics. This contest is
              surely going to challenge the contestant's error identification
              and rectification skills. Be the fastest and the smartest
              rectifier to shine and grab your place!
            </p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <div className="roundsContent">
                  <div className="listsContent">
                    <ul>
                      <li>
                        This is a one-day event where participants will be
                        provided with a pre-defined track that their
                        line-following robot must navigate.
                      </li>
                      <li>
                        The robots will be judged based on their ability to
                        accurately follow the track, avoid obstacles, and
                        complete the course in the shortest time possible.
                      </li>
                      <li>
                        Participants will need to troubleshoot any performance
                        issues with their robots during the event and ensure
                        that their robots are functioning properly before the
                        competition starts.
                      </li>
                      <li>
                        The competition will consist of a single round. All
                        participants will compete directly on the track, and the
                        top-performing robots will be judged based on speed,
                        accuracy, and the ability to complete the course without
                        errors.
                      </li>
                      <li>
                        If a robot malfunctions or goes off-track, the team will
                        be allowed one reset to bring the robot back to the
                        starting point. However, this will add time to their
                        overall score.
                      </li>
                      <li>
                        The team with the fastest and most accurate robot will
                        be awarded. This event will test the participant's
                        engineering, problem-solving, and robot control skills
                        under time pressure.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1 : Commences on 18.10.2024 @ 10:00 AM</p>
                </div>
                <p className="roundsContent" style={{ marginLeft: 0 }}>
                  Last date for registration is 15.10.2024 within 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h2 className="contactsTitle">CONTACTS</h2>
            <p className="contactsContent">
              Venkatesh R : <a href="tel:8760724575">8760724575</a>
            </p>
            <p className="contactsContent">
              ERIC ALLAN S : <a href="tel:9385524469">9385524469</a>
            </p>
            <p className="contactsContent">
              Girithar Viswanath : <a href="tel:9080492286">9080492286</a>
            </p>
            <p className="contactsContent">
              Vishal R : <a href="tel:8508080853">8508080853</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Circuittrack;
