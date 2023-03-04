import scss from "../styles/Header.module.scss";

import LogoSocialMedia from "./LogoSocialMedia";

import heroImgMobile from "../assets/images/image-profile-mobile.webp";
import heroImgTablet from "../assets/images/image-profile-tablet.webp";
import heroImgDesktop from "../assets/images/image-profile-desktop.webp";

export default function Header() {
  return (
    <header className={scss.header}>
      <LogoSocialMedia />
      <picture className={scss.hero_picture}>
        <source srcSet={heroImgDesktop} media="(min-width: 1440px)" />
        <source srcSet={heroImgTablet} media="(min-width: 650px)" />
        <img
          src={heroImgMobile}
          alt="Adam Keyes headshot"
          className={scss.hero_img}
        />
      </picture>
    </header>
  );
}
