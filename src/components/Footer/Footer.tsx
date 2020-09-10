import React from 'react';
import './Footer.css';
import footerLinks from './footerLinks';

interface Props {}

const Footer: React.FC<Props> = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div onClick={scrollTop} className="footer__backToTop">
        Back to top
      </div>
      <div className="footer__body">
        {footerLinks.map((section) => (
          <div className="footer_linkSection">
            <h3>{section.title}</h3>
            <ul className="footer__linkList">
              {section.links.map((link) => (
                <li className="footer__link">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
