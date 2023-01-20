import scss from "./styles/App.module.scss";
import Link from "./components/UI/Link";
import Project from "./components/Project";

import fmIcon from "./assets/images/icon-frontend-mentor.svg";
import ghIcon from "./assets/images/icon-github.svg";
import liIcon from "./assets/images/icon-linkedin.svg";
import tIcon from "./assets/images/icon-twitter.svg";

import heroImgMobile from "./assets/images/image-profile-mobile.webp";
import heroImgTablet from "./assets/images/image-profile-tablet.webp";

import thumb1 from "./assets/images/thumbnail-project-1-small.webp";
import thumb2 from "./assets/images/thumbnail-project-2-small.webp";
import thumb3 from "./assets/images/thumbnail-project-3-small.webp";
import thumb4 from "./assets/images/thumbnail-project-4-small.webp";
import thumb5 from "./assets/images/thumbnail-project-5-small.webp";
import thumb6 from "./assets/images/thumbnail-project-6-small.webp";

function App() {
  return (
    <>
      <header className={scss.header}>
        <p className={scss.logo}>adamkeyes</p>
        <menu className={scss.social_media}>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <img src={ghIcon} alt="Github" className={scss.icon_github} />
          </a>
          <a
            href="https://www.frontendmentor.io"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fmIcon} alt="Frontend Mentor" className={scss.icon_fm} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={liIcon} alt="LinkedIn" className={scss.icon_linkedin} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={tIcon} alt="Twitter" className={scss.icon_twitter} />
          </a>
        </menu>
        <picture>
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
            <Project
              img={thumb1}
              title="Design portfolio"
              langs="HTML CSS"
            ></Project>
            <Project
              img={thumb2}
              title="E-learning landing page"
              langs="HTML CSS"
            ></Project>
            <Project
              img={thumb3}
              title="Todo web app"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              img={thumb4}
              title="Entertainment web app"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              img={thumb5}
              title="Memory Game"
              langs="HTML CSS JavaScript"
            ></Project>
            <Project
              img={thumb6}
              title="Art gallery showcase"
              langs="HTML CSS JavaScript"
            ></Project>
          </div>
        </section>
        <section className={scss.contact}>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Message"></textarea>
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
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <img src={ghIcon} alt="Github" className={scss.icon_github} />
            </a>
            <a
              href="https://www.frontendmentor.io"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={fmIcon}
                alt="Frontend Mentor"
                className={scss.icon_fm}
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src={liIcon} alt="LinkedIn" className={scss.icon_linkedin} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={tIcon} alt="Twitter" className={scss.icon_twitter} />
            </a>
          </menu>
        </div>
      </footer>
    </>
  );
}

export default App;
