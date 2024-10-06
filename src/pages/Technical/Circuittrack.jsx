import React from 'react';
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

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
                <a className="register" href="#registration-closed">Registration closed</a>
                <div className="register brochure">
                  <a href="/resources/Brochure/PaperPresentation Brochure.pdf" download="Paper Presentation Brochure">Brochure</a>
                  <img className="download" src={DownloadLogo} alt="download" />
                </div>
              </div>
            </div>
            <div className="about">
              <h2 className="aboutTitle">ABOUT</h2>
              <p className="aboutContent">
                This contest is all about testing the Participant's problem solving ability in the field of electronics. This contest is surely going to challenge the contestant's error identification and rectification skills. Be the fastest and the smartest rectifier to shine and grab your place!
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
                          This will be a two round event, where the participant will be given a circuit design with not more than 4 errors in it, which restricts the purpose or output of the circuit.
                        </li>
                        <li>
                          The participant will have to track the solution to rectify the circuit errors and type them in a document before submitting it in a google form provided to them. The participant will have to solve 4 and 2 errors to clear each of the rounds respectively. The top 15 participants will be shortlisted to the second round (final).
                        </li>
                        <li>
                          The problems for the first round will be provided through a Google Docs link. The participants who are selected for the second round will be invited to a GMeet, where they will be solving the problems that are presented.
                        </li>
                        <li>
                          If the number of participants is large a screening round before the first round will be held. The screening round is a quiz competition based on the basics of electronic circuits.
                        </li>
                        <li>
                          The quickest and the precisely delivered solution will be awarded. This event is definitely going to challenge the participant’s problem solving skills with time complexity around.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="roundsTitle">Date & Timings</h3>
                  <div className="roundsContent">
                    <p>Round 1 : Commences on 14.09.2021 @ 10:00 AM</p>
                    <p>Round 2 : Commences on 15.09.2021 @ 12:00 PM</p>
                  </div>
                  <p className="roundsContent" style={{ marginLeft: 0 }}>Last date for registration is 10.09.2021 within 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contacts">
              <h2 className="contactsTitle">CONTACTS</h2>
              <p className="contactsContent">
                AJAY R : <a href="tel:6382423343">6382423343</a>
              </p>
              <p className="contactsContent">
                ASIF MUHAMMED A : <a href="tel:9786721143">9786721143</a>
              </p>
              <p className="contactsContent">
                KESHAV B : <a href="tel:8754275064">8754275064</a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default Circuittrack;
