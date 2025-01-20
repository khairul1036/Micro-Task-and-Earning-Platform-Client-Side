import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deepTeal text-white p-10">
      <div className="footer max-w-screen-2xl mx-auto">
        <aside>
          <Link to={'/'}><h1 className="text-5xl font-bold text-white">TaskEarn</h1></Link>
          <p className="text-lg lg:w-[400px]">
            TaskEarn connects you with tasks to earn money online quickly and
            easily. Join now and start earning today!
          </p>
        </aside>
        <nav>
          <h6 className="text-2xl font-bold text-white">Services</h6>
          <a className="link link-hover text-lg">Branding</a>
          <a className="link link-hover text-lg">Design</a>
          <a className="link link-hover text-lg">Marketing</a>
          <a className="link link-hover text-lg">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-white">Company</h6>
          <a className="link link-hover text-lg">About us</a>
          <a className="link link-hover text-lg">Contact</a>
          <a className="link link-hover text-lg">Jobs</a>
          <a className="link link-hover text-lg">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-white">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/khairul-islam1" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/khairul4102" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://github.com/khairul1036" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@khairulislammm" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </nav>
      </div>
      <div className="pt-5">
        <p className="text-center border-t border-gray-200 pt-2">
          Copyright © {new Date().getFullYear()} - All right reserved by
          TaskEarn
        </p>
      </div>
    </footer>
  );
};

export default Footer;
