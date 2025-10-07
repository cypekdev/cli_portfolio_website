import "./About.css"
import image from "../assets/cyprian.jpg"
import TerminalSvg from "../assets/terminal.svg?react"
import LightbulbSvg from "../assets/lightbulb.svg?react"
import MusicSvg from "../assets/music.svg?react"
import CubeSvg from "../assets/block.svg?react"
import CodeSvg from "../assets/code.svg?react"
import ChipSvg from "../assets/chip.svg?react"

function Card({ Svg, top, bottom, left, right }) {
  return (
  <div className="images-card" style={{ top, bottom, left, right }}>
    <Svg style={{ width: 125, height: 125, fill: "#fff9" }}/>
  </div>
  )
}

export default function About() {
  return (
    <div className="container">
      <div className="text-content">
        My name is Cyprian, I'm a young developer. I'm studying at technical school no. 7 in Zabrze as a Programming Technician.
        <br/>
        <br/>
        I'm interested: <br/>
        - Programming<br/>
        - Electronics<br/>
        - Singing <br/>
        - 3D modeling<br/>
        - listening to music and podcasts
      </div>
      <div className="image-content">
        <div className="images">
          <img src={image} alt="Cyprian Moj zdjęcie" className="main-picture" />
          <Card Svg={TerminalSvg} top={-90} left={-90}></Card>
          <Card Svg={LightbulbSvg} top={-60} right={-80}></Card>
          <Card Svg={MusicSvg} top={190} right={-140}></Card>
          <Card Svg={CubeSvg} bottom={-40} right={-90}></Card>
          <Card Svg={CodeSvg} bottom={-70} left={-70}></Card>
          <Card Svg={ChipSvg} top={160} left={-160}></Card>
        </div>

      </div>
    </div>
  )
}