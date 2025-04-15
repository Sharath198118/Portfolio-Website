import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  return (
    <>
      <section id="hero" className="py-20 glass-effect rounded-lg mb-8 section-animate container ">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 float-animation">
              Edamakanti Sharath Kumar Reddy
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">SOFTWARE ENGINEER</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Experienced Full Stack Developer with expertise in Java, ReactJS, Spring Boot, MySQL, and cloud
              technologies. Skilled in building scalable, high-performance applications and solving complex
              technical challenges. Certified AWS Cloud Practitioner with a proven ability to drive innovation and
              improve system performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:space-x-6">
              <a
                href="mailto:esharathkumarreddy@gmail.com"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 mb-2 md:mb-0"
              >
                <FaEnvelope className="mr-2" />
                Email
              </a>
              <a
                href="tel:+918688691952"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 mb-2 md:mb-0"
              >
                <FaPhone className="mr-2" />
                +91 8688691952
              </a>
              <a
                href="https://linkedin.com/in/sharathkumarreddyedamakanti"
                target="_blank"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 mb-2 md:mb-0"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Sharath198118"
                target="_blank"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 mb-2 md:mb-0"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              <span className="flex items-center text-gray-600 mb-2 md:mb-0">
                <FaMapMarkerAlt className="mr-2" />
                Kurnool, Andhra Pradesh
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default Hero