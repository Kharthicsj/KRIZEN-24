import React from 'react';
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NarrativePulse = () => {
  return (
    <div>
        <Header />
        <div className="main">
          <div className="mainContent">
            <div className="background"></div>
            <div className="title">
              <div className="heading">Narrative Pulse</div>
              <div className="main_links">
                <a className="register" href="#Registration-Closed">Registration open's soon</a>
                <div className="register brochure">
                  <a
                    href="/resources/Brochure/PaperPresentation Brochure.pdf"
                    download="Paper Presentation Brochure"
                  >
                    Brochure
                  </a>
                  <img
                    className="download"
                    src={DownloadLogo}
                    alt="download"
                  />
                </div>
              </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                Participants will create their own stories using words selected on
                the spot, showcasing their creativity and story crafting skills.
                This round encourages improvisation and quick thinking while
                crafting engaging narratives.
              </p>
            </div>
            <div className="details">
              <h2 className="detailsTitle">DETAILS</h2>
              <div className="detailsContent">
                <div className="rounds">
                  <div className="roundsContent">
                    <p>
                      In the Storycraft Challenge, participants will have the
                      opportunity to unleash their creativity by crafting unique
                      narratives using a selection of words revealed at the event.
                      Each participant will draw a set of words randomly, which they
                      must incorporate into their stories, fostering a spirit of
                      improvisation and quick thinking.
                    </p>
                    <br />
                    <p>
                      The challenge will not only test their storytelling abilities
                      but also encourage them to think on their feet and adapt their
                      ideas in real-time. Participants will be judged on creativity,
                      coherence, and engagement, making this a dynamic and exciting
                      event that celebrates the art of storytelling in a
                      collaborative environment.
                    </p>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Round 1 - Submission within 11:59 PM on 16.10.2024</p>
                    <p>Round 2 - Held on 18.10.2024</p>
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
              KarthickRaja S : <a href="tel:7010639597">7010639597</a>
              </p>
              <p className="contactsContent">
              Aarthi.A : <a href="tel:7338885701">7338885701</a>
              </p>
              <p className="contactsContent">
              Varun S : <a href="tel:9842224919">9842224919</a>
              </p>
              <p className="contactsContent">
              Santhosh Kumar R : <a href="tel:9344023613">9344023613</a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default NarrativePulse;