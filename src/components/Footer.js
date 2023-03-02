import LogoSocialMedia from "./LogoSocialMedia";

import scss from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={scss.footer}>
      <div>
        <LogoSocialMedia />
      </div>
    </footer>
  );
}
