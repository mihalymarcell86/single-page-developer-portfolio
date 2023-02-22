import scss from "../styles/Header.module.scss";

import SocialMedia from "./SocialMedia";

import heroImgMobile from "../assets/images/image-profile-mobile.webp";
import heroImgTablet from "../assets/images/image-profile-tablet.webp";
import heroImgDesktop from "../assets/images/image-profile-desktop.webp";

export default function Header() {
  return (
    <header className={scss.header}>
      <p className={scss.logo}>adamkeyes</p>
      <SocialMedia />
      <picture className={scss.hero_picture}>
        <source srcSet={heroImgDesktop} media="(min-width: 1440px)" />
        <source srcSet={heroImgTablet} media="(min-width: 650px)" />
        <img
          src={heroImgMobile}
          alt="Adam Keyes headshot"
          type="img/webp"
          className={scss.hero_img}
        />
      </picture>
    </header>
  );
}
