import Link from "./UI/Link";
import scss from "../styles/Project.module.scss";

function Project({ img, title, langs }) {
  return (
    <div>
      <img
        src={img}
        alt={title + " project thumbnail"}
        className={scss.image}
      />
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
