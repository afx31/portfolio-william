import React from "react";
//import './App.css';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//   });
// }
//  navSlide();

function App() {
  return (
    <>
      <Navbar cards={5} />
      <Home card="home" />
      <About card="about" />
      <Skills card="skills" />
      <Projects card="projects" />
      <Contact card="contact" />
      <Footer />
    </>
  );
}

export default App;
