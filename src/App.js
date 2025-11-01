import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import MyImage from "./images/MyImage.jpg";
import AboutImage from "./images/AboutImage.jpg";
import Attendance from "./images/Attendance.png";
import Tic from "./images/Tic Tac Toe.png";
import Food from "./images/Food.jpg";
import Programming from "./images/Programming.jpg";
import Resume from "./images/Koteswara Rao Updated Resume.pdf";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCode,
  FaDatabase,
  FaLaptop,
  FaAndroid,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Welcome() {
  return (
    <div className="welcomeMain">
      <div className="welcomeContent">
        <h1 className="welcomeText">Welcome to My Portfolio</h1>
        <p className="welcomeSubText">
          I am <span className="highlight">Koteswara Rao</span>, a Full Stack
          Developer
        </p>
      </div>
    </div>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-links">
          <div className="linkHome">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </div>

          <div className="linkHome">
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </div>

          <div className="linkHome">
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </div>

          <div className="logoMain">
            <div className="logoName">
              <span>K</span>
            </div>
          </div>

          <div className="linkHome">
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </div>

          <div className="linkHome">
            <a
              href="#hireme"
              className={activeSection === "hireme" ? "active" : ""}
            >
              HireMe
            </a>
          </div>

          <div className="linkHome">
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="mainHome">
        <div className="hello">
          <p>Hello!</p>
        </div>

        <div className="myName">
          <p className="iAm">
            I'm <span className="spanOne">Koteswara Rao</span>,<br />
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="imageDiv">
        <div className="imageSectionLeft">
          <FaCode size={30} color="rgb(255, 119, 0)" />
          <p className="imageText">
            I am a full stack developer
            <br /> skilled in building web applications
            <br /> from front end to back end.
          </p>
        </div>

        <div className="imageSectionCenter">
          <img src={MyImage} alt="MyImage" />
        </div>

        <div className="imageSectionRight">
          <p className="imageText2">My Profiles</p>
          <div className="socialIcons">
            <a href="https://www.linkedin.com/in/koteswararao-karampudi-765303305">
              <FaLinkedin size={30} className="iFa" />
            </a>

            <a href="https://github.com/Koteswarrao2003">
              <FaGithub size={30} className="iFa" />
            </a>

            <a
              href="https://wa.me/+918919718534"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} className="iFa" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="aboutMain">
        <div className="aboutMainLeft">
          <div className="aboutMainLeftSub">
            <img src={AboutImage} alt="AboutImage" className="aboutImage"></img>
          </div>
        </div>

        <div className="aboutMainRight">
          <p className="aboutHeading">About me</p>
          <p className="aboutP1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am{" "}
            <span className="aboutSpan">Koteswara Rao</span>, currently pursuing
            Master of Computer Applications{" "}
            <span className="aboutSpan">(MCA)</span> in the Second year at{" "}
            <span className="aboutSpan">
              Aditya College of Engineering & Technology.
            </span>
            I graduated with a B.Sc. and I am now eager to apply my technical
            skills in a real-world setting. My goal is to contribute to
            innovative projects while delivering high-quality solutions.
          </p>

          <p className="aboutP2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; After completing my
            graduation, I furthered my expertise by undertaking 10 months of{" "}
            <span className="aboutSpan">Full Stack Java</span> coaching at{" "}
            <span className="aboutSpan">Naresh i Technologies Hyderabad</span>,
            which enhanced my skills in both front-end and back-end development.
            I have a strong foundation in web development technologies and
            database management.
          </p>

          <p className="aboutP3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I aim to grow as a{" "}
            <span className="aboutSpan">Full Stack developer</span> by
            contributing to a collaborative and sustainable work environment.
          </p>

          <a href={Resume} download="KoteswaraRao_Resume.pdf">
            <button type="button" className="aboutButton">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <motion.div
        className="aboutMain"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* existing about section code */}
      </motion.div>
    </>
  );
}

function Skills() {
  return (
    <div className="skillsMain">
      <p className="skillsMainHeading">
        My Creative <span className="skillsSpan">Skills</span>
      </p>
      <div className="skillsMainTop">
        <div className="skillsMainBox">
          <FaLaptop size={30} className="skillsIcon" />
          <p className="skillsMainDomain">Web Design</p>
          <p className="skillsMainDomainDescription">
            {" "}
            Html, CSS, JavaScript & React.js
          </p>
        </div>

        <div className="skillsMainBox">
          <FaCode size={30} className="skillsIcon" />
          <p className="skillsMainDomain">Software development</p>
          <p className="skillsMainDomainDescription"> C and JAVA</p>
        </div>

        <div className="skillsMainBox">
          <FaDatabase size={30} className="skillsIcon" />
          <p className="skillsMainDomain">DataBase</p>
          <p className="skillsMainDomainDescription"> Oracle</p>
        </div>

        <div className="skillsMainBox">
          <FaAndroid size={30} className="skillsIcon" />
          <p className="skillsMainDomain">Problem Solving</p>
          <p className="skillsMainDomainDescription">
            {" "}
            Data Structures and Algorithms
          </p>
        </div>
      </div>

      <div className="skillsMainBottom">
        <p className="skillPro">
          <span className="skillProSpan">Professional</span>
          <br />
          My Knowledge level in Software
        </p>
        <div className="skillsMainBottom2">
          <div className="skillsMainBottomLeft">
            <FaCode className="skillsCode" />
            <p className="fsd">Full Stack Developer</p>
          </div>

          <div className="skillsMainBottomRight">
            <div className="Bars">
              <div className="bar">
                <p className="label">C</p>
                <div className="progress">
                  <div className="fill" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">Java</p>
                <div className="progress">
                  <div className="fill" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">HTML</p>
                <div className="progress">
                  <div className="fill" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">CSS</p>
                <div className="progress">
                  <div className="fill" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">JavaScript</p>
                <div className="progress">
                  <div className="fill" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">React.js</p>
                <div className="progress">
                  <div className="fill" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="bar">
                <p className="label">SQL</p>
                <div className="progress">
                  <div className="fill" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <div className="projectsMain">
        <p className="projectsText">Projects</p>
        <div className="projectsMainSub">
          <div className="projectsMainSub2">
            <div className="projectsMainBox">
              <img src={Food} alt="Food" className="projectsImage" />
              <p className="projectName">Food Ordering System</p>
              <p className="projectDescription">
                &nbsp;&nbsp;&nbsp;&nbsp; The Online Food Ordering System is a web application where customers can browse products, place orders, and 
                enjoy a user-friendly interface. It is designed for quick and efficient food selection and ordering.
              </p>
              <a href="https://github.com/Koteswarrao2003/Online-Food-Ordering-System-Foodsy">
                <button className="projectButton">Check it Out</button>
              </a>
            </div>

            <div className="projectsMainBox">
              <img
                src={Attendance}
                alt="Attendance"
                className="projectsImage"
              />
              <p className="projectName">Attendance Management System</p>
              <p className="projectDescription">
                &nbsp;&nbsp;&nbsp;&nbsp;The Attendance Management System is a
                web application where students and employees can securely
                register and log in. Employees manage student details and
                attendance, while students view their profiles and attendance
                history.
              </p>
              <a href="https://github.com/Koteswarrao2003/Attendance-Management-System">
                <button className="projectButton">Check it Out</button>
              </a>
            </div>

            <div className="projectsMainBox">
              <img src={Tic} alt="Tic" className="projectsImage" />
              <p className="projectName">Tic Tac Toe</p>
              <p className="projectDescription">
                &nbsp;&nbsp;&nbsp;&nbsp; I created a classic Tic Tac Toe game using HTML, CSS, and JavaScript. It's a fun and interactive two-player game where 
                users take turns marking X or O on a 3x3 grid. The game highlights the winner and also detects a draw. Enjoy playing!
              </p>
              <a href="https://github.com/Koteswarrao2003/Tic-tac-toe">
                <button className="projectButton">Check it Out</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  const [state, handleSubmit] = useForm("mqaylggq");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="contactMain">
        <p className="contactMainText">Get In Touch</p>
        <div className="contactMainSub">
          <div className="contactMainSubLeft">
            <div className="contactMainSubLeftBox">
              <FaUser />
              <div className="contactMainSubLeftInf">
                <p className="identifier">Name</p>
                <p className="idValue">Karampudi Koteswara Rao</p>
              </div>
            </div>

            <div className="contactMainSubLeftBox">
              <FaEnvelope />
              <div className="contactMainSubLeftInf">
                <p className="identifier">Email</p>
                <p className="idValue">koteswararao8534@gmail.com</p>
              </div>
            </div>

            <div className="contactMainSubLeftBox">
              <FaPhone className="contactPhoneIcon" />
              <div className="contactMainSubLeftInf">
                <p className="identifier">Mobile No.</p>
                <p className="idValue">+91 8919718534</p>
              </div>
            </div>

            <div className="contactMainSubLeftBox">
              <FaLocationArrow />
              <div className="contactMainSubLeftInf">
                <p className="identifier">Address</p>
                <p className="idValue">Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="contactIcons">
              <a href="https://www.facebook.com/life.of.pi.1947">
                <FaFacebook className="contactIconsIcon" />
              </a>
              <a href="https://x.com/Koteswa77274931">
                <FaTwitter className="contactIconsIcon" />
              </a>
              <a href="https://www.instagram.com/life.of.pi.1947/">
                <FaInstagram className="contactIconsIcon" />
              </a>
            </div>
          </div>

          <div className="contactMainSubRight">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label className="contactLabel">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contactText"
                  required
                />
              </label>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <br />
              <br />

              <label className="contactLabel">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="contactText"
                  required
                />
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <br />
              <br />

              <label className="contactLabel">
                Mobile No.
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="contactText"
                />
              </label>
              <ValidationError
                prefix="Mobile"
                field="mobile"
                errors={state.errors}
              />
              <br />
              <br />

              <label className="contactLabel">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="contactText"
                />
              </label>
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <br />
              <br />

              <label className="contactLabel">
                Message
                <textarea
                  name="message"
                  placeholder="Message"
                  className="contactText"
                  rows="4"
                />
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <br />
              <br />

              <button
                type="submit"
                className="contactButton"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

              {state.succeeded && (
                <p className="successMessage">✅ Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>

        <footer className="contactFooter">
          All rights reserved © 2025 by{" "}
          <span className="contactFooterSpan">Koteswara Rao Karampudi.</span>
        </footer>
      </div>
    </>
  );
}

function HireMe() {
  return (
    <>
      <div className="hireMeMain">
        <p className="hireMeMainText">
          Why <span className="hireMeMainSpan">Hire Me</span> ?
        </p>
        <div className="hireMeMainSub">
          <div className="hireMeMainSubLeft">
            <p className="hireMeSkill">
              Skilled in Java <span className="hireMeAnd">&nbsp; & &nbsp;</span>{" "}
              Web Technologies
            </p>
            <p style={{ textAlign: "justify" }} className="hireMeP">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Passionate about
              building efficient, scalable, and user-friendly applications.
              <br /> I focus on clean code, performance optimization, and
              delivering high-quality solutions.
            </p>

            <div className="hireMeSubLeftSkillParts">
              <div>
                <p>
                  <span className="hireMeSpanCount">🚀6+</span>
                  <br />
                  Java & Web Projects Completed
                </p>

                <p>
                  <span className="hireMeSpanCount">🧠 7+</span>
                  <br />
                  Technologies Mastered
                </p>
              </div>

              <div>
                <p>
                  <span className="hireMeSpanCount">🏆 2+</span>
                  <br />
                  Successful Internships
                </p>

                <p>
                  <span className="hireMeSpanCount">💼 Hire Me</span>
                  <br />
                  Full Stack Developer
                </p>
              </div>
            </div>

            <button className="hireMeButton">Hire Me</button>
          </div>

          <div className="hireMeMainSubRight">
            <div>
              <img
                src={Programming}
                alt="Programming"
                className="hireMeImage"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <Welcome />;
  }

  return (
    <>
      <div id="home" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Home />
        </motion.div>
      </div>

      <div id="about" className="section">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.div>
      </div>

      <div id="skills" className="section">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.div>
      </div>

      <div id="projects" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>
      </div>

      <div id="hireme" className="section">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HireMe />
        </motion.div>
      </div>

      <div id="contact" className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}

export default App;
