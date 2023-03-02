import Project from "./Project";
import Link from "./UI/Link";

import scss from "../styles/Projects.module.scss";

export default function Projects() {
  const projects = [
    {
      title: "Design portfolio",
      langs: "HTML CSS",
    },
    {
      title: "E-learning landing page",
      langs: "HTML CSS",
    },
    {
      title: "Todo web app",
      langs: "HTML CSS JavaScript",
    },
    {
      title: "Entertainment web app",
      langs: "HTML CSS JavaScript",
    },
    {
      title: "Memory Game",
      langs: "HTML CSS JavaScript",
    },
    {
      title: "Art gallery showcase",
      langs: "HTML CSS JavaScript",
    },
  ];
  return (
    <section className={scss.projects}>
      <header>
        <h2>Projects</h2>
        <Link href="#contact">Contact me</Link>
      </header>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            nr={index + 1}
            title={project.title}
            langs={project.langs}
          />
        ))}
      </div>
    </section>
  );
}
