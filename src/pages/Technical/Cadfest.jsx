import React from "react";
import "../../style/events.css";
// import DownloadLogo from "../../Assets/images/download.png";
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
              <a
                className="register"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd58NVb3sjwI_yt4IYDHa-I_p_PiMwAAgLCgw5H-M3eGv7xKA/viewform?usp=sf_link"
              >
                Registration Closed
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
                      <ul>
                        <ul>
                          <li>
                            The Cad Fest event will consist of two rounds. The
                            first round will be held online, where participants
                            will be given a 2D diagram to draft. The best 15
                            submissions from this round will qualify for the
                            final round.
                          </li>
                          <li>
                            In the second (final) round, participants will be
                            required to attend the event in person. They will be
                            given a topic on the spot and must they must draft a
                            3D sketch of the particular diagram using CAD
                            software's. This round will be proctored on-site,
                            and the top two submissions will be awarded.
                          </li>
                          <li>
                            The first-round online competition will be held on
                            16.10.2024 at 6:00 PM, and the link for that will be
                            shared in the event's WhatsApp group. The
                            submissions for this round must be in the format of
                            part files only, and both accuracy and timely
                            submission will be assessed.
                          </li>
                        </ul>
                      </ul>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">WhtasApp Group Link</h3>
                <div className="roundsContent">
                  <a href="https://chat.whatsapp.com/LsEU7zFRk1mHu9Xilgrdh2">
                    https://chat.whatsapp.com/LsEU7zFRk1mHu9Xilgrdh2
                  </a>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1: Commences on 16.10.2024 @ 7:00 PM</p>
                  <p>Round 2: Commences on 18.10.2024 @ 10:00 AM</p>
                </div>
                <p className="roundsContent" style={{ marginLeft: 0 }}>
                  Last date for registration is 17.10.2024 within 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h2 className="contactsTitle">CONTACTS</h2>
            <p className="contactsContent">
              Deepak. A : <a href="tel:8220337154">8220337154</a>
            </p>
            <p className="contactsContent">
              Anishyanandh : <a href="tel:8220751069">8220751069</a>
            </p>
            <p className="contactsContent">
              Krittika S M : <a href="tel:9976145070">9976145070</a>
            </p>
            <p className="contactsContent">
              Naveen Ragavendra B : <a href="tel:7708697213">7708697213</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadfest;
