import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4">
        <p className="text-sm m-0">
          &copy; 2024 Christian Holm. All rights reserved.
        </p>
        <div className="flex space-x-4 px-4">
          <a
            href="https://github.com/ChristianHolm1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-holm1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </a>
          <a
            href="mailto:1christianholm@hotmail.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
