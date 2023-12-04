import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto p-10 h-20 bg-slate-500 sticky top-0 z-50 flex flex-row justify-between items-center">
      <a href="#hero">
        <h1>Domsat</h1>
      </a>
      <nav>
        <ul className="flex flex-row space-x-5">
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
