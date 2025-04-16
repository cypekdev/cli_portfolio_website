import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}