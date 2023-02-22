import Project from "./Project";
import Link from "./UI/Link";

import scss from "../styles/Projects.module.scss";

export default function Projects() {
  return (
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
  );
}
