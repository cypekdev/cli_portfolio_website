import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import News from "./pages/News"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    // <h1>CYPEKdev</h1>

    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
