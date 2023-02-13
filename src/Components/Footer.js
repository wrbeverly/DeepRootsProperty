import React from 'react';
import './footer.css';
/* import { Button } from './Button'; */
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <img className='footer-kw-logo' src='../../images/KW-logo.webp' alt='kw logo' />
        <p className='footer-subscription-heading'>
          Columbus, GA
        </p>
        <p className='footer-subscription-text'>
        License Number: #GA # H-62859 | AL # 99107
        </p>
        <p className='footer-broker-contact'>
          Office: (706) 221-6900 {<br />}
          6053 Veterans Parkway, Suite 200 {<br />}
          Columbus, GA 31909
        </p>
        <div className="Danielle-contact-information">
          <p>
          Danielle Hinson Moore {<br />}
          Deep Roots Property Source Team {<br />}
          License #GA#266645 | AL#76396
          </p>
        </div>
              <div className='input-areas'>
      {/*    <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
           <Button buttonStyle='btn--outline'>Subscribe</Button> 
          </form> */} {/* feature disabled */}
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/danielle'>About Danielle</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/DeepRootsTeamKW/' target="_blank" rel="noreferrer">Instagram</a>
            <a href='https://www.facebook.com/DeepRootsPropertySource' target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@daniellesdeeprootsproperty492" target="_blank" rel="noreferrer">Youtube</a>
            <a href='https://twitter.com/DeepRootsTeamKW' target="_blank" rel="noreferrer">Twitter</a>
            <a href='https://www.linkedin.com/in/daniellehinsonmoore?original_referer=' target="_blank" rel="noreferrer">Linked In</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              KW 
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>KW © 2023 Each Keller Williams Realty office is independently owned and operated.</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/DeepRootsPropertySource'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/DeepRootsTeamKW/'
              target='_blank'
              aria-label='Instagram'
              rel="noreferrer"
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/@daniellesdeeprootsproperty492'
              target='_blank'
              aria-label='Youtube'
              rel="noreferrer"
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href="https://twitter.com/DeepRootsTeamKW"
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/daniellehinsonmoore?original_referer='
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
