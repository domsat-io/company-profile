/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import { headers } from "../../next.config";
import logoWhite from "../assets/images/logo/logo-white.svg";

export default function Header() {
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
                <li className="nav-item">
                  <a href="#service" className="nav-link-item">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#work" className="nav-link-item">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#project" className="nav-link-item">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#faq" className="nav-link-item">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#client" className="nav-link-item">
                    Client
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link-item">
                    Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a
              className="aximo-default-btn pill aximo-header-btn"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
          <div className="mobile-menu-trigger light">
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
