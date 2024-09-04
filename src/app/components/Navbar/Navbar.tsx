"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Links from "./Links/Link";

// type NavbarProps = {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   openMenuClick: () => void;
// };

type NavbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ open, setOpen }) => {
  const openMenuClick: () => void = () => {
    setOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    const navbar =
      document.querySelector("#navbar") ?? document.createElement("div");
    const menuButton =
      document.querySelector("#menuButton") ?? document.createElement("div");

    const body = document.getElementsByTagName("body")[0];
    const logos = document.querySelectorAll(".logo");
    const navLinkTitles = document.querySelectorAll(".navLinkTitle");

    const onResize = () => {
      navbar.classList.toggle(styles.sticky, window.scrollY > 0);

      menuButton.classList.toggle(styles.menuButtonGray, window.scrollY > 0);

      Object.entries(logos).map((element) =>
        element[1].classList.toggle(styles.logoButtonsGray, window.scrollY > 0)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.toggle(
          styles.navLinkTitlesGray,
          window.scrollY > 0
        )
      );
    };

    navbar.classList.remove(styles.menuOpen);

    if (open) {
      navbar.classList.add(styles.menuOpen);
      navbar.classList.add(styles.stickyMenuOpen);

      Object.entries(logos).map((element) =>
        element[1].classList.add(styles.stickyLogoOpenIcons)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.add(styles.stickyNavLinkTitlesOpen)
      );

      menuButton.classList.add(styles.stickymenuButtonOpen);

      body.style.overflow = "hidden";
    } else {
      navbar.classList.remove(styles.menuOpen);
      navbar.classList.remove(styles.stickyMenuOpen);

      Object.entries(logos).map((element) =>
        element[1].classList.remove(styles.stickyLogoOpenIcons)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.remove(styles.stickyNavLinkTitlesOpen)
      );

      menuButton.classList.remove(styles.stickymenuButtonOpen);

      body.style.overflow = "";
    }

    if (pathname !== "/") {
      Object.entries(logos).map((element) =>
        element[1].classList.remove(styles.logoButtonsWhite)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.remove(styles.navLinkButtonsWhite)
      );

      navbar.classList.add(styles.white);
      menuButton.classList.remove(styles.menuButtonWhite);
    } else {
      navbar.classList.remove(styles.white);
    }

    if (pathname === "/") {
      window.addEventListener("scroll", onResize);
      navbar.classList.add(styles.home);
    } else {
      navbar.classList.remove(styles.home);
    }

    if (pathname === "/") {
      Object.entries(logos).map((element) =>
        element[1].classList.add(styles.logoButtonsWhite)
      );

      Object.entries(navLinkTitles).map((element) =>
        element[1].classList.add(styles.navLinkButtonsWhite)
      );

      menuButton.classList.add(styles.menuButtonWhite);
    }
  }, [open, pathname]);

  return (
    <div id="navbar" className={styles.container}>
      <Links open={open} openMenuClick={openMenuClick} />
      <Link href="/">
        <Image
          src="https://files.edgestore.dev/514s5z6elosh9is0/myPublicImages/_public/9c0aa524-1694-414b-a248-c10b54e40754.png"
          width={95}
          height={95}
          alt="logo"
        />
      </Link>
      <div className={styles.contactLinks}>
        <Link target="_blank" href="tel:0584422401">
          <Image
            className="logo"
            src="/call.svg"
            width={27}
            height={27}
            alt="phone-logo"
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/yairperlman/">
          <Image
            className="logo"
            src="/instagram.svg"
            width={33}
            height={33}
            alt="instagram-logo"
          />
        </Link>
        <Link target="_blank" href="https://wa.me/972584422401">
          <Image
            id={styles.whatsappLogo}
            className="logo"
            src="/whatsapp.svg"
            width={26}
            height={26}
            alt="whatsapp-logo"
          />
        </Link>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yair.steelandwood@gmail.com"
        >
          <Image
            id={styles.gmailLogo}
            className="logo"
            src="/gmail.svg"
            width={27}
            height={27}
            alt="whatsapp-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
