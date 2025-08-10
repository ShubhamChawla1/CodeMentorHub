import React from 'react';
import { assets } from '../../assets/assets';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
          CodeMentorHub is a powerful LMS platform for creating, managing, and learning tech skills online. It connects mentors and students through interactive courses, projects, and real-time feedback.
          </p> 
        </div>

        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="#">Home</a></li>
            <Link to="/aboutus" > <li>
              <a href="#">About us</a>
            </li></Link>
            <Link to="/Contactus"><li><a href="#">Contact us</a></li></Link>
            <Link to="/PrivacyPolicy"><li><a href="#">Privacy policy</a></li></Link>
          </ul>
        </div>

        <div className="flex flex-col md:items-start items-center w-full ">
          <h2 className="font-semibold text-white mb-5 ">Connect With Us</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="https://www.linkedin.com/in/shubham-chawla123" target='_blank' className='hover:text-pink-400'>LinkedIn</a></li>
            <li><a href="https://www.instagram.com" target='_blank' className='hover:text-pink-400'>Instagram</a></li>
            <li><a href="https://www.Facebook.com" target='_blank' className='hover:text-pink-400'>Facebook</a></li>
          
          </ul>
        </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © CodeMentorHub. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
