import "./styles/home.css"
import { InstagramLogo, GithubLogo, LinkedinLogo, MediumLogo } from "phosphor-react";

function App() {
  return (
    <>
      <menu>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Publishies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </menu>

      <div className="container">
        <h3>Hello I'm</h3>
        <h1>Gustavo Delfim</h1>
        <h2>Developer Engineer</h2>
        <div className="icons">
          <a href="https://github.com/GustavoDelfim" target="_blank" >
            <GithubLogo size={22} />
          </a>
          <a href="https://www.linkedin.com/in/gustavodelfim/" target="_blank">
            <LinkedinLogo size={22} />
          </a>
          <a href="https://medium.com/@gusttavodelfim" target="_blank">
            <MediumLogo size={22} />
          </a>
          <a href="https://www.instagram.com/gustavo.delfim/" target="_blank">
            <InstagramLogo size={22}  />
          </a>
        </div>
      </div>
    </>
  )
}
export default App
