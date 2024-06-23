import Link from "next/link";
import React from "react";

const footerItems = [
  {
    name: "Terms of Service",
    href: "terms",
  },
  {
    name: "Privacy",
    href: "privacy",
  },
];

const Footer = () => {
  return (
    <div className="flex justify-between px-10 py-4">
      <p>© 2024 Coffee Finder. All rights reserved.</p>
      <div className="flex gap-4">
        {footerItems.map((item) => (
          <Link className=" hover:text-blue-600" href={item.href}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
