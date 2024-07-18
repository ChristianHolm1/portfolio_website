/* eslint-disable react/no-array-index-key */
import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center rounded-lg p-6 mb-6 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-100 text-center">
        Christian Holm
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 md:mr-6 mb-6 md:mb-0">
          <p className="text-gray-300 text-lg">
            Welcome to my portfolio! I am a full-stack web developer with an AP
            in Computer Science and passion for coding! I have experience with
            many fields of programming from Java, Python, and C# to web
            development with React and JavaScript. I am always looking to learn
            new technologies and improve my skills. I am currently seeking new
            opportunities to work on exciting projects, feel free to contact me
            if you have any questions!
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full pointer-events-none"
            src="/images/my_picture.jpg"
            alt="Christian Holm"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
