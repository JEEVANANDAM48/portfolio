import { Toaster } from "./components/ui/toaster"
import { TooltipProvider } from "./components/ui/tooltip"
import { ThemeProvider } from "./context/ThemeContext"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <div className="w-full">
                <Hero id="home" />
                <About id="about" />
                <Skills id="skills" />
                <Projects id="projects" />
                <Certifications id="certifications" />
                <Achievements id="achievements" />
                <Contact id="contact" />
              </div>
            </AnimatePresence>
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
