import React from "react";
import "../../style/events.css";
// import DownloadLogo from "../../Assets/images/download.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Oldtownroad = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">OLD TOWN ROAD</div>
            <div className="main_links">
              <a className="register" href="#registation-closed">
                Registration open's soon
              </a>
              {/* <div className="register brochure">
                <a
                  href="\resources\Brochure\PaperPresentation Brochure.pdf"
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
              This event challenges participants to design and operate a
              human-controlled mobile robot that can navigate uneven terrain.
              Participants will showcase their engineering and driving skills
              while addressing obstacles in a dynamic environment.
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
                        Participants will design their mobile robots in advance
                        and test their performance by navigating them through an
                        uneven surface during the event. This round will
                        evaluate engineering skills and real-time
                        problem-solving in a dynamic environment.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1: Commences on 18.10.2024 @ 10:00 AM</p>
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
              Prajesh Rodrico A : <a href="tel:9080001557">9080001557</a>
            </p>
            <p className="contactsContent">
            Thamaraiselvi S : <a href="tel:8015644159">8015644159</a>
            </p>
            <p className="contactsContent">
            santhoshkumar E : <a href="tel:9047811140">9047811140</a>
            </p>
            <p className="contactsContent">
            AATHYANDHAPRABHU P : <a href="tel:8668134412">8668134412</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Oldtownroad;
