import Link from "./UI/Link";
import scss from "../styles/Project.module.scss";

function Project({ nr, title, langs }) {
  return (
    <div className={scss.project_wrapper}>
      <div>
        <div className={scss.image_wrapper}>
          <div className={scss.overlay}>
            <Link href="#">View project</Link>
            <Link href="#">View code</Link>
          </div>
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
      </div>
      <div className={scss.view}>
        <Link href="#">View project</Link>
        <Link href="#">View code</Link>
      </div>
    </div>
  );
}

export default Project;
