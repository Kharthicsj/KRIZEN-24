import React from 'react';
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Fotohunt = () => {
  return (
    <div>
        <Header />
        <div className="main">
          <div className="mainContent">
            <div className="background"></div>
            <div className="title">
              <div className="heading">FOTO HUNT</div>
              <div className="main_links">
                <a className="register" href="#Registration-Closed">Registration closed</a>
                <div className="register brochure">
                  <a href="/resources/Brochure/PaperPresentation Brochure.pdf" download="Paper Presentation Brochure">Brochure</a>
                  <img className="download" src={DownloadLogo} alt="download" />
                </div>
              </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                As by the name, Fotohunt lets you explore the vastness of creativity in photography. The frames you love, the different angles you create, and the lighting that creates a fantastic ambiance for a wholesome feel. Not just your capturing ability, but your editing skills as well is being encompassed. Add that light touch to your photography with some FX. Time is the only thing that we can't hold, but it can be frozen. Capture the moment in time!
              </p>
            </div>
            <div className="details">
              <h2 className="detailsTitle">DETAILS</h2>
              <div className="detailsContent">
                <div className="rounds">
                  <div className="roundsContent">
                    <p>This event consists of a single round. The participants are asked to use their mobile to capture the photograph. The participants will be given a set of themes, one day before the event. Any sort of daylight or night theme images can be uploaded. The file to be uploaded should be in .JPG format. The participants are asked to add their name and access number given to them, on the top right corner of the photo. Participants can submit their photographs through google forms that are shared with them via WhatsApp. The submission date and time will be announced shortly after registration. The results of the event will be published on the next day of submission. The participants submitting their photograph before the deadline will be given a participation certificate and the best of two will be recognised.</p>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Submission within 11:59 AM on 18.10.2024</p>
                  </div>
                  <p className="roundsContent" style={{ marginLeft: 0 }}>Last date for registration is 15.10.2024 within 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contacts">
              <h2 className="contactsTitle">CONTACTS</h2>
              <p className="contactsContent">
                AMANULLA Z: <a href="tel:8637426850">8637426850</a>
              </p>
              <p className="contactsContent">
                KANDHAROOPAN J: <a href="tel:9629059976">9629059976</a>
              </p>
              <p className="contactsContent">
              Asmitaa S : <a href="tel:7418399003">7418399003</a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Fotohunt;
