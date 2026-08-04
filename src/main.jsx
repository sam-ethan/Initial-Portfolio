import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"
import Project from "./components/Project"
import Work from "./components/Work"
import Education from "./components/Education"
import Footer from "./components/Footer";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Skills />
    <Project/>
    <Work/>
    <Education/>
    <Footer/>
  </StrictMode>,
)
