import Link from "./UI/Link";
import scss from "../styles/Project.module.scss";

function Project({ nr, title, langs }) {
  return (
    <div>
      <div className={scss.image_wrapper}>
        <menu className={scss.overlay}>
          <Link href="#">View project</Link>
          <Link href="#">View code</Link>
        </menu>
        <picture>
          <source
            srcSet={require(`../assets/images/thumbnail-project-${nr}-large.webp`)}
            media="(min-width: 1440px)"
          />
          <img
            src={require(`../assets/images/thumbnail-project-${nr}-small.webp`)}
            alt={title + " project thumbnail"}
          />
        </picture>
      </div>
      <h3 className={scss.title}>{title}</h3>
      <div className={scss.langs}>
        {langs.split(" ").map((lang, i) => (
          <span className={scss.lang} key={i}>
            {lang}
          </span>
        ))}
      </div>
      <menu className={scss.view}>
        <Link href="#">View project</Link>
        <Link href="#">View code</Link>
      </menu>
    </div>
  );
}

export default Project;
