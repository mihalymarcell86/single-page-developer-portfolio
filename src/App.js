import scss from "./styles/App.module.scss";
import Link from "./components/UI/Link";
import Project from "./components/Project";

import FMIcon from "./components/Icons/IconFM";
import GHIcon from "./components/Icons/IconGithub";
import LIIcon from "./components/Icons/LinkedIn";
import TIcon from "./components/Icons/IconTwitter";

import heroImgMobile from "./assets/images/image-profile-mobile.webp";
import heroImgTablet from "./assets/images/image-profile-tablet.webp";
import heroImgDesktop from "./assets/images/image-profile-desktop.webp";

function App() {
  return (
    <>
      <header className={scss.header}>
        <p className={scss.logo}>adamkeyes</p>
        <menu className={scss.social_media}>
          <GHIcon />
          <FMIcon />
          <LIIcon />
          <TIcon />
        </menu>
        <picture className={scss.hero_picture}>
          <source srcSet={heroImgDesktop} media="(min-width: 1440px)" />
          <source srcSet={heroImgTablet} media="(min-width: 768px)" />
          <img
            src={heroImgMobile}
            alt="Adam Keyes headshot"
            type="img/webp"
            className={scss.hero_img}
          />
        </picture>
      </header>
      <main>
        <section className={scss.introduction}>
          <h1>
            Nice to <br className={scss.linebreak} />
            meet you! I'm <em>Adam Keyes</em>.
          </h1>
          <p>
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Link href="#contact">Contact me</Link>
        </section>
        <section aria-label="experience" className={scss.experience}>
          <div>
            <h3>HTML</h3>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h3>CSS</h3>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h3>Javascript</h3>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h3>Accessibility</h3>
            <p>4 Years Experience</p>
          </div>
          <div>
            <h3>React</h3>
            <p>3 Years Experience</p>
          </div>
          <div>
            <h3>Sass</h3>
            <p>3 Years Experience</p>
          </div>
        </section>
        <section className={scss.projects}>
          <header>
            <h2>Projects</h2>
            <Link href="#contact">Contact me</Link>
          </header>
          <div>
            <Project nr={1} title="Design portfolio" langs="HTML CSS"></Project>
            <Project
              nr={2}
              title="E-learning landing page"
              langs="HTML CSS"
            ></Project>
            <Project
              nr={3}
              title="Todo web app"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              nr={4}
              title="Entertainment web app"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              nr={5}
              title="Memory Game"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              nr={6}
              title="Art gallery showcase"
              langs="HTML CSS JavaScript"
            ></Project>
          </div>
        </section>
        <section className={scss.contact}>
          <div>
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Message" spellCheck={false}></textarea>
            <button type="button">
              <Link href="#">Send message</Link>
            </button>
          </form>
        </section>
      </main>
      <footer className={scss.footer}>
        <div>
          <p className={scss.logo}>adamkeyes</p>
          <menu className={scss.social_media}>
            <GHIcon />
            <FMIcon />
            <LIIcon />
            <TIcon />
          </menu>
        </div>
      </footer>
    </>
  );
}

export default App;
