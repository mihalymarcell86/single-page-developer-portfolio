import Link from "./UI/Link";
import scss from "../styles/Project.module.scss";

function Project({ nr, title, langs }) {
  return (
    <div>
      <picture>
        <source
          srcSet={require(`../assets/images/thumbnail-project-${nr}-large.webp`)}
          media="(min-width: 1440px)"
        />
        <img
          src={require(`../assets/images/thumbnail-project-${nr}-small.webp`)}
          alt={title + " project thumbnail"}
          className={scss.image}
        />
      </picture>
      <h3 className={scss.title}>{title}</h3>
      <div className={scss.langs}>
        {langs.split(" ").map((lang, i) => (
          <span className={scss.lang} key={i}>
            {lang}
          </span>
        ))}
      </div>
      <div className={scss.view}>
        <Link href="#">View project</Link>
        <Link href="#">View code</Link>
      </div>
    </div>
  );
}

export default Project;
