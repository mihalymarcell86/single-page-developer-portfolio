import scss from "../../styles/Link.module.scss";

export default function Link(props) {
  return (
    <a {...props} className={scss.link}>
      {props.children}
    </a>
  );
}
