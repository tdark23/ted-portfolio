import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
      <a href='https://www.linkedin.com/in/dark-teddy'>
        <BsLinkedin />
      </a>
      <a href='https://www.facebook.com/darkted'>
        <FaFacebookF />
      </a>
      <a href='https://www.instagram.com/lil30freak'>
        <BsInstagram />
      </a>
  </div>
);

export default SocialMedia;
