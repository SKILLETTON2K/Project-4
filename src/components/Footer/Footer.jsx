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
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Sign Up</Button>
          </form>
        </div>
      </section>


      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>More Info</h2>
            <Link to='https://www.linkedin.com/in/ashton-yates/'>Contact Us!</Link>
            <Link to='/faqs'>Support</Link>
            <Link to='/schematics'>Schematics</Link>
            <Link to='https://dev.bukkit.org/projects/worldedit/files'>
                World Edit.
                <i class="fa-solid fa-cloud-arrow-down fa-fade"></i>
            </Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/accounts/login/?next=%2Fp%2FCw2jsThLG6g%2F&source=desktop_nav'>Instagram</Link>
            <Link to='https://www.facebook.com/login/'>Facebook</Link>
            <Link to='https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhfqlnBtv9JRH6KLW8KkoGgQug50JVovnmKVD0wP8Gy3KUpRQ6bLDQeOEYbrcu8YBloS5ScH&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>Youtube</Link>
            <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'>Twitter</Link>
          </div>
        </div>
      </div>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SCHEM STATIC.
              <i class="fa-solid fa-cloud-bolt fa-flip-horizontal"></i>
            </Link>
          </div>
          <small class='website-rights'>SCHEM STATIC. © 2023</small>
          <div class='social-icons'>

            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/login/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/accounts/login/?next=%2Fp%2FCw2jsThLG6g%2F&source=desktop_nav'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link youtube'
              to='https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhfqlnBtv9JRH6KLW8KkoGgQug50JVovnmKVD0wP8Gy3KUpRQ6bLDQeOEYbrcu8YBloS5ScH&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/ashton-yates-814232185/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;