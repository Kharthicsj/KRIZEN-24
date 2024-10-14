import React from "react";
import "../style/events.css";
import LandingVdo from "../Assets/images/WORKSHOP.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";
import downloadIcon from "../Assets/images/download.png";

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
          <div className="3d-printing">
            <div className="title">
              <div className="heading">3D PRINTING</div>
              <div className="main_links">
                <button className="register">Registration open's soon</button>
                {/* <div className="register brochure">
                  <a
                    href="../../resources/Brochure/3DPrinting Brochure.pdf"
                    download="3D Printing Brochure"
                  >
                    Brochure
                  </a>
                  <img className="download" src={downloadIcon} alt="download" />
                </div> */}
              </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                The main objective of this session is to give the participants
                an idea about 3D printing technology, its history, and various
                methods of making a 3D printer. After this session, the
                participants will be able to convert a CAD file into a physical
                part using a 3D printer.
              </p>
            </div>
            <div className="details">
              <h2 className="detailsTitle">DETAILS</h2>
              <div className="detailsContent">
                <div className="rounds">
                  <div className="roundsContent">
                    <p>
                      In this event, the participants will gain knowledge about
                      the basics and the operations of a 3D printer and the
                      products which could be printed using it. This will be a
                      productive session for the attendees and will enable them
                      with the knowledge regarding the Foundation of 3D
                      printing, 3D Printing and Reverse Engineering. This will
                      be a fruitful session for the participants who wish to
                      seek expertise in 3D Printers.
                    </p>
                    <p>
                      Resource Person: Mr. Metha T, Managing Partner, Technojinn
                      Solutions.
                    </p>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Commences on 15.09.2021 @ 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts">
              <h2 className="contactsTitle">CONTACTS</h2>
              <p className="contactsContent">
                JAHATH PRANAV R: <a href="tel:9150570384">9150570384</a>
              </p>
              <p className="contactsContent">
                ARVIND M: <a href="tel:7904452430">7904452430</a>
              </p>
            </div>
          </div>
          <div className="iot">
            <div className="title">
              <div className="heading">INTERNET OF THINGS</div>
              <div className="main_links">
                <button className="register">Registration open's soon</button>
                <div className="register brochure">
                  <a
                    href="../../resources/Brochure/IoT Brochure.pdf"
                    download="IoT Brochure"
                  >
                    Brochure
                  </a>
                  <img className="download" src={downloadIcon} alt="download" />
                </div>
              </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                The main objective of this event is to give the participants an
                introduction to IoT and various types and methods in creating an
                IoT product. The Internet of things describes the network of
                physical objects that are embedded with sensors, software, and
                other technologies to connect and exchange data with other
                devices and systems over the Internet.
              </p>
            </div>
            <div className="details">
              <h2 className="detailsTitle">DETAILS</h2>
              <div className="detailsContent">
                <div className="rounds">
                  <div className="roundsContent">
                    <p>
                      In this event, the participants will equip themselves with
                      a brief introduction to the technology IoT and various
                      applications of it that we use in our daily life. This
                      seminar will cover topics like Data Acquisition,
                      Processing and Management, Data Visualization and
                      Analytics, Business Software Integration. This will be a
                      fulfilled session for the attendees who aspire to learn
                      IoT.
                    </p>
                    <p>
                      Resource Person: Mr. Mughil A, Member technical staff, IoT
                      division, Zoho.
                    </p>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Commences on 15.09.2021 @ 2:00 PM</p>
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
