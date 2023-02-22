import SocialMedia from "./SocialMedia";

import scss from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={scss.footer}>
      <div>
        <p className={scss.logo}>adamkeyes</p>
        <SocialMedia />
      </div>
    </footer>
  );
}
