import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-row justify-between">
      <div>LOGO</div>
      <div className="flex flex-col">
        <h1>DOMSAT</h1>
        <span>
          Garen, RT.003/RW.004, Garen, Pandeyan, Kec. Ngemplak, Kabupaten
          Boyolali, Jawa Tengah 57375
        </span>
        <span>Kabupaten Boyolali, Jawa Tengah</span>
        <span>WhatsApp: 0853 5643 8172</span>
        <span>Email: hi@domsat.io</span>
        <div className="flex flex-row space-x-3">
          <Link href="https://www.instagram.com/">Instagram</Link>
          <Link href="https://www.linkedin.com">LinkedIn</Link>
          <Link href="https://www.facebook.com">Facebook</Link>
          <Link href="https://www.twitter.com">Twitter</Link>
        </div>
      </div>
      <span>Copyright 2023 Domsat</span>
    </footer>
  );
};

export default Footer;
