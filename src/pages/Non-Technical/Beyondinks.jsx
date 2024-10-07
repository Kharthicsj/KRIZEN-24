import React from "react";
import "../../style/events.css";
import DownloadLogo from "../../Assets/images/download.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Beyondinks = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="mainContent">
          <div className="background"></div>
          <div className="title">
            <div className="heading">BEYOND INKS</div>
            <div className="main_links">
              <a className="register" href="#Registration-Closed">
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
              Beyond Inks defines the ability of an individual to creatively
              express their imagination in a visual form. Everything you imagine
              is real. There is no better deliverance from the world than
              through art, and a human can form no surer bond with it than
              through art. This is conducted with a motive to encourage their
              creative aspect, sharpen senses through keen observation of the
              environment, and for great exposure.
            </p>
          </div>
          <div className="details">
            <h2 className="detailsTitle">DETAILS</h2>
            <div className="detailsContent">
              <div className="rounds">
                <h3 className="roundsTitle">Round 1</h3>
                <div className="roundsContent">
                  <p>
                    This event consists of two rounds. In the first round, all
                    the participants can submit their artworks in Google forms
                    that will be sent through WhatsApp. After shortlisting from
                    the first round, a few will be selected for the final round.
                  </p>
                </div>
                <h3 className="roundsTitle">Round 2</h3>
                <div className="roundsContent">
                  <p>
                    The students selected for the final round will be given a
                    participation certificate and will be given a theme. The
                    theme will be announced during the event time, and the
                    participants should submit their works. In case of exceeding
                    the time, the participants' responses will not be
                    considered. The artworks with more detail, choice of
                    perception, and how close it is to the theme will be
                    considered as the winners. The best two participants will be
                    recognized.
                  </p>
                </div>
                <h3 className="roundsTitle">Date & Timings</h3>
                <div className="roundsContent">
                  <p>Round 1 : Submission within 10:00 AM on 17.10.2024</p>
                  <p>Round 2 : Submission within 11:59 PM on 18.10.2024</p>
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
              Sibisivanezhil B : <a href="tel:9952717617">9952717617</a>
            </p>
            <p className="contactsContent">
              Charanjit M : <a href="tel:9364519006">9364519006</a>
            </p>
            <p className="contactsContent">
            Anjanadevi.S : <a href="tel:9384788702">9384788702</a>
            </p>
            <p className="contactsContent">
              Benecia B : <a href="tel:7397576369">7397576369</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beyondinks;
