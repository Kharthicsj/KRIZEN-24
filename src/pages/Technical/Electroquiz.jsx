import React from "react";
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Electroquiz = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">ELECTRIOQUIZ</div>
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
              The main Objective of this Quiz Contest is to test the knowledge
              of the participants in the field of Electrical and Electronics
              Engineering. There will be Two rounds of Multiple Choice
              Questions. The Questions will be based on the topics Electrical
              and Electronic Devices, Electric Circuits, Electromagnetic Fields,
              Signals and Systems, Electrical Machines and Power Systems,
              Control Systems, Electrical and Electronic Measurements, Analog
              and Digital Electronics and Power Electronics. The Weightage of
              the questions from each topic may vary according to the importance
              of the particular concept. Just give a try for every question, it
              will be a good opportunity to test your knowledge and improve
              more.
            </p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <h3 className="roundsTitle">Round 1</h3>
                <div className="roundsContent">
                  <p>
                    First round comprises 40 Multiple choice questions. The
                    questions are assigned in order to test the participants'
                    knowledge in the field of electrical and electronics. Top 30
                    Participants will be shortlisted for the second round
                    according to the score. Each question carries 1 mark. The
                    time limit for round 1 is 30 minutes. The participants who
                    qualify for the first round will receive a participation
                    certificate.
                  </p>
                </div>
                <h3 className="roundsTitle">Round 2</h3>
                <div className="roundsContent">
                  <p>
                    Second round comprises 40 Multiple Choice Questions. These
                    questions will be based on the GATE syllabus of Electrical
                    and Electronics. For each wrong answer, one third of the
                    mark of the question will be deduced. Each question will
                    have different timings according to the level of complexity.
                    Once a question is selected it is mandatory to complete it,
                    as the timer starts. The total time limit for round 2 is 60
                    minutes. The top two contestants will be selected according
                    to their scores in both rounds.
                  </p>
                </div>
                <p className="roundsContent">
                  Participants are instructed to attend the quiz either using a
                  laptop or desktop. The question type will be both theoretical
                  as well as problematic.
                </p>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1: Commences on 16.10.2024 @ 07:00 PM</p>
                  <p>Round 2: Commences on 18.10.2024 @ 10.00 AM</p>
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
              Sarath NS : <a href="tel:6385800977">6385800977</a>
            </p>
            <p className="contactsContent">
              Laura Judith D : <a href="tel:9500361131">9500361131</a>
            </p>
            <p className="contactsContent">
              P S NIKETH : <a href="tel:7708850631">7708850631</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Electroquiz;
