import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import DownloadLogo from "../../Assets/images/download.png";

const ProjectPresentation = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">PROJECT PRESENTATION</div>
            <div className="main_links">
              <a
                className="register"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgAzVp0O2_0MQZJyZe6DdM_KsRKcHL3ph1I8rx2_RjqQ-znw/viewform?usp=pp_url"
              >
                Registration Closed
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
              The main motto of this event is to identify and recognize the
              innovatory and evolutionary projects of the participating teams
              within the given theme. In this event the teams must submit
              projects ideas which is can be an evolution of an existing idea or
              new innovation that comes under the given themes. And to encourage
              their desire to enhance their knowledge towards innovative
              inventing.
            </p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <h3 className="roundsTitle">Themes</h3>
                <div className="roundsContent themes">
                  <ol>
                    <li>IoT Home</li>
                    <li>Smart Agriculture</li>
                    <li>Smart aerial vehicles</li>
                    <li>ML-Models</li>
                    <li>Smart Manufacturing</li>
                  </ol>
                </div>
                <h3 className="roundsTitle">Round 1</h3>
                <div className="roundsContent">
                  <p>
                    The participating teams are requested to submit a project on
                    any one of the themes mentioned above. This event will
                    consist of two rounds of which the first round will be the
                    abstract selection round. The participating teams should
                    create an abstract of the project within one page and it has
                    to be submitted one week before the event, through the
                    google form that has been provided. This will be an
                    elimination round, thus the teams will be screened based on
                    the quality and content of their abstract. Only 20 teams
                    will be qualified for the next round. The teams to qualify
                    for the second round will be receiving a participation
                    certificate.
                  </p>
                </div>
                <h3 className="roundsTitle">Round 2</h3>
                <div className="roundsContent">
                  <p>
                    In the second round (final round), the selected teams will
                    gather in person to present their projects, including
                    accompanying videos. The total presentation should be no
                    more than 5 minutes. Project videos and presentation slides
                    should be submitted on-site. The judges will evaluate the
                    technical content, presentation skills, ideology, and the
                    scope of the projects. Based on the judges' scores, the top
                    two projects will be awarded.
                  </p>
                </div>
                <h3 className="roundsTitle">WhtasApp Group Link</h3>
                <div className="roundsContent">
                  <a href="https://chat.whatsapp.com/ChtiNj973BI0zay3TAd8MC">
                    https://chat.whatsapp.com/ChtiNj973BI0zay3TAd8MC
                  </a>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1 : Submission within 6:00 PM on 16.10.2024</p>
                  <p>Round 2 : Commences on 18.10.2024 @ 11:00 AM</p>
                </div>
                <p
                  className="roundsContent"
                  style={{ marginLeft: "0 !important" }}
                >
                  Last date for registration is 17.10.2024 within 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="contacts">
            <h2 className="contactsTitle">CONTACTS</h2>
            <p className="contactsContent">
              Sai Mahima : <a href="tel:7200862958">7200862958</a>
            </p>
            <p className="contactsContent">
              Hari Yowvana Maruth B : <a href="tel:6369883639">6369883639</a>
            </p>
            <p className="contactsContent">
              Vikas K : <a href="tel:9342237502">9342237502</a>
            </p>
            <p className="contactsContent">
              Aswaketh P R E : <a href="tel:7603848850">7603848850</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPresentation;
