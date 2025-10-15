import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DarkVeil from "./DarkVeil"

export default function App() {
  return (

    <BrowserRouter>
      <div style={{ width: '100%', minHeight: '100vh', position: 'absolute' }}>
        <div style={{ position: "absolute",  width: "100%", height: "100%" }}>      
          <DarkVeil hueShift={14} opacity={.5}/>
        </div>

        <Navigation/>
      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

      </div>
    </BrowserRouter>

  )

}
