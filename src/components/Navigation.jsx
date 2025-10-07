import { NavLink } from "react-router-dom"
import HomeSvg from "../assets/home.svg?react"
import FaceSvg from "../assets/face-smiling.svg?react"
import FilesSvg from "../assets/files.svg?react"
import PaperplaneSvg from "../assets/paper-airplane.svg?react"

import "./Navigation.css"

function Header() {

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}


function BottomNavbarElement({SvgComponent, text, to}) {
  return (
    <NavLink to={to} className={({isActive}) => `bottom-nav-element ${isActive && 'active'}`}>
      {({isActive}) => (<>
        <SvgComponent style={{ height: 20, width: 20, fill: isActive ? '#fff' : '#bbb'}} />
        <span>{text}</span>
      </>)}
    </NavLink>
  )
}

function BottomNavbar() {
  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav-list">
        <li><BottomNavbarElement SvgComponent={ HomeSvg } text="Home" to="/" /></li>
        <li><BottomNavbarElement SvgComponent={ FaceSvg } text="About" to="/about" /></li>
        <li><BottomNavbarElement SvgComponent={ FilesSvg } text="Projects" to="/projects" /></li>
        <li><BottomNavbarElement SvgComponent={ PaperplaneSvg } text="Contact" to="/contact" /></li>
      </ul>
    </nav>
  )
}

export default function Navigation() {

  return (
    <div>
      <Header/>
      <BottomNavbar/>
    </div>
  )
}