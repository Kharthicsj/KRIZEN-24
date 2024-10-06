import React from "react";
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Cadfest = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">CADFEST</div>
            <div className="main_links">
              <a className="register" href="#registation-closed">
                Registration closed
              </a>
              <div className="register brochure">
                <a
                  href="\resources\Brochure\PaperPresentation Brochure.pdf"
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
              In this competition, competitors will be tested on various
              competencies that are essential in design aspects for engineers.
              These skills include drafting 2D technical drawings, 3D models in
              software like CAD, CATIA, CREO, SolidWorks, etc. This platform
              will help you enhance your technical skills and boost your
              confidence.
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
                        Cad fest event will have two rounds. In the first round,
                        the participants will be given a 2D diagram and the best
                        15 submissions will be qualified for the final round.
                      </li>
                      <li>
                        In the second round, the participants will be given two
                        views of any diagram, and the participant will have to
                        draft the 3D sketch of the particular diagram. The top
                        two submissions of the final round will be awarded.
                      </li>
                      <li>
                        If the number of participants is large, a screening
                        round before the first round will be held. The screening
                        round is a quiz competition based on the basics of
                        engineering drafting.
                      </li>
                      <li>
                        Link for the competition will be sent 15 minutes prior
                        to the competition in the WhatsApp group. The accuracy
                        and on-time submission of the drawings will be taken
                        into account for assessment. The submissions must be in
                        the format of part file only.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1: Commences on 13.09.2021 @ 12:00 PM</p>
                  <p>Round 2: Commences on 14.09.2021 @ 10:00 AM</p>
                  <p>Round 3: Commences on 15.09.2021 @ 09:00 AM</p>
                </div>
                <p className="roundsContent" style={{ marginLeft: 0 }}>
                  Last date for registration is 10.09.2021 within 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h2 className="contactsTitle">CONTACTS</h2>
            <p className="contactsContent">
              SOWMIYA DEVI S: <a href="tel:9597638372">9597638372</a>
            </p>
            <p className="contactsContent">
              ASIF MUHAMMED A: <a href="tel:9786721143">9786721143</a>
            </p>
            <p className="contactsContent">
              KESHAV B: <a href="tel:8754275064">8754275064</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadfest;
