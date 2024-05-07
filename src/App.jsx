

import './App.css'
import { Home } from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AboutMe from './components/about/About'
import Projects from './components/projects/Projects'
import SwiftScheduler from './components/projects/works/SwiftScheduler'
import MealMate from './components/projects/works/MealMate'
import NetOnlineShop from './components/projects/works/NetOnlineShop'
import SpringSocial from './components/projects/works/SpringSocial'
import Academic from './components/academic/Academic'
import Experience from './components/experience/Experience'
import TextToSpeech from './components/projects/works/TextToSpeech'
import EmailService from './components/projects/works/EmailService'
function App() {
  

  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/swiftScheduler" element={<SwiftScheduler />} />
        <Route path="/mealMate" element={<MealMate />} />
        <Route path="/netOnlineShop" element={<NetOnlineShop />} />
        <Route path="/springSocial" element={<SpringSocial />} />
        <Route path="/credentials" element={<Academic />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/text2speech" element={<TextToSpeech />} />
        <Route path="/emailService" element={<EmailService />} />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
