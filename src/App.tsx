import "./styles/home.css"
import { InstagramLogo, GithubLogo, LinkedinLogo, MediumLogo, Download } from "phosphor-react";

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

      <div className="home">
        <div className="center">
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
      </div>

      <div className="about">
        <div className="center">

          <div className="flex">
            <div className="imageAbout">
              <img src="/public/image/about.png" alt="About image" />
            </div>
            <div className="content">
              <h1>About Me</h1>
              <h4>Hello, I'm Gustavo, Web-developer based on Brasil. I have Rich experience in web site design & building and customization. also i am good at </h4>
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
              <button>Download CV
                <Download size={17} weight="fill" />
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="publishies">
        <div className="center">

          <div className="flex">
            <div className="content">
              <h1>Publishies</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
            </div>
            <div className="contentLink">
              <a href=""><b>Go Lang:</b> How to use Graphql + Golang </a>
              <a href=""><b>Go Lang:</b> How to use Graphql + Golang </a>
              <a href=""><b>Go Lang:</b> How to use Graphql + Golang </a>
              <a href=""><b>Go Lang:</b> How to use Graphql + Golang </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
