import React from "react";
import "../../style/events.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import DownloadLogo from "../../Assets/images/download.png";

const WebDevelopment = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">WEB/APP DEVELOPMENT</div>
            <div className="main_links">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6w__E1wwMYu3ZTHBsgegm8K2cX6x-KD4Ad0sCyHDqakkxDw/viewform?usp=sf_link" className="register">
                Register
              </a>
              {/* <div className="register brochure">
                <a href={"#brochure"} download="Paper Presentation Brochure">
                  Brochure
                </a>
                <img className="download" src={DownloadLogo} alt="download" />
              </div> */}
            </div>
          </div>
          <div className="about">
            <h2 className="aboutTitle">ABOUT</h2>
            <p className="aboutContent">
              Experience a fresh and modern Web/App Development event where
              attendees can show-off their coding and design skills. This event
              is organized for developers by developers, and strives to foster
              the ideal social and learning experience. Featured topics include
              languages and clean code, database, team performance, devops and
              much more. Expand your network, connect and collaborate with peers
              from around the world, and discover new ways to take your code and
              application architecture to the next level.
            </p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <div className="roundsContent">
                  <p>
                    A specific topic will be provided to the participants on
                    18.10.2024. Participants will have to build a Website
                    or an application based on the theme provided. Participants
                    cannot build both. This is an Individual Event.
                  </p>
                  <br />
                  <div className="listsContent webListContent">
                    <ul>
                      <li>
                        All design elements, code, etc. for your project must be
                        created during the event. This will be a Proctored Round
                      </li>
                      <li>
                        Third party tools and frameworks are allowed as well as
                        your normal tooling.
                      </li>
                      <li>
                        There are no restrictions as of the coding language you
                        are using.
                      </li>
                      <li>Participants can submit only one entry.</li>
                      <li>
                        Participants should also give a brief description about
                        their website or application.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">Judging Criteria</h3>
                <div className="roundsContent">
                  <p style={{ marginBottom: "1rem" }}>
                    Participants will be judged based on the following criteria.
                  </p>
                  <div className="listsContent webListContent">
                    <ul>
                      <li>Realistic Capability</li>
                      <li>Level of Innovation</li>
                      <li>Design</li>
                      <li>Bugginess</li>
                    </ul>
                  </div>
                </div>
                <h3 className="roundsTitle">Topic</h3>
                <div className="roundsContent">
                  <p style={{ marginBottom: "1rem" }}>
                    Topic Will be Given During the Event Time.
                  </p>
                </div>
                <h3 className="roundsTitle">WhtasApp Group Link</h3>
                <div className="roundsContent">
                    <a href="https://chat.whatsapp.com/FcflF8hLmlt89uIyQwVHV3">https://chat.whatsapp.com/FcflF8hLmlt89uIyQwVHV3</a>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Submission within 1:00 PM on 18.10.2024</p>
                </div>
                <p
                  className="roundsContent"
                  style={{ marginLeft: "0 !important" }}
                >
                  Last date for registration is 15.10.2024 within 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h2 className="contactsTitle">CONTACTS</h2>
            <p className="contactsContent">
              Mohammed Suhail M K : <a href="tel:7667664600">7667664600</a>
            </p>
            <p className="contactsContent">
              Sathiyan A : <a href="tel:7708095780">7708095780</a>
            </p>
            <p className="contactsContent">
              sharukeshan s : <a href="tel:6382172515">96382172515</a>
            </p>
            <p className="contactsContent">
              Raghul S : <a href="tel:6383613348">6383613348</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
