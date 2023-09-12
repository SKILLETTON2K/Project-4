import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>

        <p className='footer-subscription-heading'>
          Join our community today!
        </p>

        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Icebox Feature'
            />
            <Button buttonStyle='btn--outline'>Sign Up</Button>
          </form>
        </div>
      </section>


      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>More Info</h2>
            <Link to='https://www.linkedin.com/in/ashton-yates/'>Contact Us!</Link>
            <Link to='/faqs'>Support</Link>
            <Link to='/schematics'>Schematics</Link>
            <Link to='https://dev.bukkit.org/projects/worldedit/files'>
                World Edit &nbsp;
                <i class="fa-solid fa-file-arrow-down fa-fade"></i>
            </Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/accounts/login/?next=%2Fp%2FCw2jsThLG6g%2F&source=desktop_nav'>Instagram</Link>
            <Link to='https://www.facebook.com/login/'>Facebook</Link>
            <Link to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Youtube</Link>
            <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'>Twitter</Link>
          </div>
        </div>
      </div>


      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SCHEM STATIC &nbsp;
              <i className="fa-solid fa-cloud-bolt fa-flip-horizontal"></i>
            </Link>
          </div>
          <small className='website-rights'>SCHEM STATIC &nbsp; © 2023</small>
          <div className='social-icons'>

            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/login/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>

            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/accounts/login/?next=%2Fp%2FCw2jsThLG6g%2F&source=desktop_nav'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>

            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>

            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>

            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/ashton-yates-814232185/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;