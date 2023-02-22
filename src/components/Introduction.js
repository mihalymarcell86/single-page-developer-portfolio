import Link from "./UI/Link";

import scss from "../styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={scss.introduction}>
      <h1>
        Nice to <br className={scss.linebreak} />
        meet you! I'm <em>Adam&nbsp;Keyes</em>.
      </h1>
      <p>
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Link href="#contact">Contact me</Link>
    </section>
  );
}
