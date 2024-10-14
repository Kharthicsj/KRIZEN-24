import React from "react";
import "../../style/events.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import DownloadLogo from "../../Assets/images/download.png";

const Paperpresentation = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">PAPER PRESENTATION</div>
            <div className="main_links">
              <a
                className="register"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeX2DpxP6Cksxq5dlu-zy20an9sftIx-qQElmALojFIHjfNzg/viewform?usp=sf_link"
              >
                Register
              </a>
              {/* <div className="register brochure">
                <a
                  href="../../resources/Brochure/PaperPresentation Brochure.pdf"
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
              Showcasing groundbreaking concepts, this event highlights the
              inventive presentations of participants, driving curiosity and
              enhancing expertise in the technical domain. The main aim of this
              event is to enhance the participant's ability in writing or making
              papers as well as to present it, and also to broaden the mind of
              the participants. And to encourage their desire to enhance their
              knowledge towards technical aspects. A paper presentation is an
              idea by itself.
            </p>
            <p className="aboutContent">Participants can form a team of two members and Individual Participant's are also Welcomed.</p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <h3 className="roundsTitle">Themes</h3>
                <div className="roundsContent themes">
                  <ol>
                    <li>Robotics and Automation</li>
                    <li>Smart Agriculture</li>
                    <li>Blockchain</li>
                    <li>Alternate energy and fuel</li>
                    <li>Micro factories</li>
                    <li>IoT home</li>
                  </ol>
                </div>
                <h3 className="roundsTitle">Round 1</h3>
                <div className="roundsContent">
                  <p>
                    The first round will be abstract selection. The
                    participating teams should submit the abstract of their
                    paper one week before the event, via Google Forms that will
                    be provided. This will be an elimination round, thus the
                    teams will be screened based on the quality and content of
                    their abstract. The best 20 – 25 abstracts will be qualified
                    for the next round. The teams to qualify for the second
                    round will be receiving a participation certificate.
                  </p>
                </div>
                <h3 className="roundsTitle">Round 2</h3>
                <div className="roundsContent">
                  <p>
                    In the second round, the selected teams will gather in
                    person to present their papers. Each team will have 5
                    minutes to deliver their presentation. Participants will
                    also submit their papers on-site. Judges will assess the
                    technical content, quality of the paper, and the clarity of
                    expression. Based on the judges' scores, the top two papers
                    will be awarded.
                  </p>
                </div>
                <h3 className="roundsTitle">WhtasApp Group Link</h3>
                <div className="roundsContent">
                    <a href="https://chat.whatsapp.com/KOA2oPhzrZy1gBMvgF9l8M">https://chat.whatsapp.com/KOA2oPhzrZy1gBMvgF9l8M</a>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Final Round: Commences on 18.10.2024 @ 10:00 AM</p>
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
              KARTHIKEYAN P : <a href="tel:9080719270">9080719270</a>
            </p>
            <p className="contactsContent">
              Varun S : <a href="tel:9597196167">9597196167</a>
            </p>
            <p className="contactsContent">
              Sandhya G : <a href="tel:9363458890">9363458890</a>
            </p>
            <p className="contactsContent">
              Amrish.S : <a href="tel:9487628551">9487628551</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Paperpresentation;
