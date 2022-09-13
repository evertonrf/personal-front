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
        <div className="containerPai">
          <div>
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
          <div>
            <div className="imgUser">
              <img src="/public/image/user.jpg" alt="user image" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="about">
          <div className="imageAbout">
            <img src="/public/image/about.png" alt="About image" />
          </div>
          <div className="content">
            <h1>About Me</h1>
            <h4>Hello, I'm Gustavo, Web-developer . . . .. . . .  . . .. . </h4>
            <div className="language">
              <p>Typescript</p>
              <p>React</p>
              <p>Node.Js</p>
              <p>Next.Js</p>
              <p>Docker</p>
              <p>Postgres</p>
              <p>MongoDB</p>
              <p>GraphQL</p>
            </div>
            <div className="curriculum">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
