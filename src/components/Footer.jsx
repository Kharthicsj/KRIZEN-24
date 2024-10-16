import React from 'react';
import './Footer.css';
import skcetLogo from '../Assets/logo/skcetnewLogo.jpeg';
import instagram from '../Assets/images/instagram.png';
import gmail from '../Assets/images/gmail.png';
import twitter from '../Assets/images/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer__section fade-in">
      <div className="footer__content">
        <div className="footer__top">
          <div className="events__links">
            <div className="technical__links">
              <h3 className="link__title">Technical</h3>
              <Link to="/paper-presentation">Paper Presentation</Link>
              <Link to="/project-presentation">Project Presentation</Link>
              <Link to="/web-app-development">WEB/APP development</Link>
              <Link to="/electrio-quiz">ElectrioQuiz</Link>
              <Link to="/circuit-track">CircuitTrack</Link>
              <Link to="/cadfest">CadFest</Link>
              <Link to="/old-town-road">Old Town Road</Link>
            </div>
            <div className="secondary__events">
              <div className="non-technical__links">
                <h3 className="link__title">Non-Technical</h3>
                <Link to="/foto-hunt">FotoHunt</Link>
                <Link to="/beyondinks">BeyondInks</Link>
                <Link to="/narrative-pulse">Narrative Pulse</Link>
              </div>
              <div className="workshop__links">
                <h3 className="link__title">Workshop</h3>
                <Link to="/workshop">Recent Trends and Challenges in Robotics</Link>
              </div>
            </div>
          </div>
          <div className="footer__contact">
            <div className="f__right__content">
              <div className="contact__info">
                <h3 className="info__title">To Approach</h3>
                <div className="info__mail">
                  <img className="sm__image" src={gmail} alt="" />
                  <a className="mail" href="mailto:krizen@skcet.ac.in">krizen@skcet.ac.in</a>
                </div>
              </div>
              <div className="contact__social">
                <h3 className="social__title">@krizen_skcet</h3>
                <div className='social__logo'>
                  <a href="https://www.instagram.com/krizen_skcet/">
                    <img className="sm__image insta" src={instagram} alt="instagram" />
                  </a>
                  <a href="https://twitter.com/krizen_skcet">
                    <img className="sm__image" src={twitter} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="college">
          <a href="http://www.skcet.ac.in/">
            <img src={skcetLogo} alt="" />
          </a>
          <p>Sri Krishna College of Engineering and Technology</p>
          <p>(An Autonomous Institution, Accredited by NAAC with 'A++' Grade and NBA)</p>
          <p>Department of Mechatronics Engineering</p>
          <p>Kuniamuthur, Coimbatore-641008</p>
        </div>
      </div>
      <div className="footer__phone">
        <div className="phone__content">
          <div className="top__content">
            <Link to="/technical">Technical</Link>
            <p>|</p>
            <Link to="/non-technical">Non-Technical</Link>
            <p>|</p>
            <Link to="/workshop">Workshop</Link>
          </div>
          <div className="middle__content">
            <div className="info__mail">
              <img className="sm__image" src={gmail} alt="" />
              <a className="mail" href="mailto:krizen@skcet.ac.in">krizen@skcet.ac.in</a>
            </div>
          </div>
          <div className="bottom__content">
            <p>@krizen_skcet</p>
            <div className='sm__logo__phone'>
              <a href="https://www.instagram.com/krizen_skcet/">
                <img className="sm__image insta" src={instagram} alt="instagram" />
              </a>
              <a href="https://twitter.com/krizen_skcet">
                <img className="sm__image" src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <div className="college">
            <a href="https://www.skcet.ac.in/">
              <img src={skcetLogo} alt="" />
            </a>
            <p>Sri Krishna College of Engineering and Technology</p>
            <p>(An Autonomous Institution, Accredited by NAAC with 'A++' Grade and NBA)</p>
            <p>Department of Mechatronics Engineering</p>
            <p>Kuniamuthur, Coimbatore-641008</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
