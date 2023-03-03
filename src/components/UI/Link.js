import scss from "../../styles/Link.module.scss";
import { Link as LinkToFragment } from "react-scroll";

export default function Link(props) {
  return (
    <>
      {props.href.startsWith("#") ? (
        <LinkToFragment
          to={props.href.replace("#", "")}
          smooth={true}
          className={scss.link}
          href={props.href}
          //href attribute needed for :any-link pseudo-class
        >
          {props.children}
        </LinkToFragment>
      ) : (
        <a {...props} className={scss.link}>
          {props.children}
        </a>
      )}
    </>
  );
}
