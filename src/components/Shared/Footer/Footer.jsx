import React from 'react';
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
      <section className="my-12 bg-color">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between items-center text-center my-20">
          <div>
            <ul>
              <span className="text-2xl font-bold">Services</span>
              <li>
                <a href="">Branding</a>
              </li>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Advertisement</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <span className="text-2xl font-bold">Company</span>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Press kit</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <span className="text-2xl font-bold">LEGAL</span>
              <li>
                <a href="">Terms of use</a>{" "}
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href=""> Cookie policy</a>
              </li>
              <li>
                <a href="">NEWSLETTER</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center icon-hero'>
         <a href=""><FaFacebook/></a>
         <a href=""><FaLinkedinIn/></a>
         <a href=""><FaGithub/></a>
         <a href=""><FaTwitter/></a>
        </div>
      </section>
    );
};

export default Footer;