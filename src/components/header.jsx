/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../assets/images/logo/logo-white.svg";

export default function Header() {
  const navs = [
    { name: "Service", link: "#service" },
    { name: "Work", link: "#work" },
    { name: "Project", link: "#project" },
    { name: "FAQ", link: "#faq" },
    { name: "Client", link: "#client" },
    { name: "Team", link: "#team" },
  ];

  return (
    <header
      className="site-header aximo-header-section aximo-header1 dark-bg"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <a href="#hero">
              <Image src={logoWhite} alt="" className="light-version-logo" />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                {navs.map((nav, index) => (
                  <li className="nav-item" key={index}>
                    <Link href={nav.link} className="nav-link-item">
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link
              className="aximo-default-btn pill aximo-header-btn"
              href="#contact"
            >
              Contact Us
            </Link>
          </div>
          <div className="mobile-menu-trigger light">
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
