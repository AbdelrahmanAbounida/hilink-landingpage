import React from "react";
import Logo from "./logo";
import { User } from "lucide-react";

const Navbar = () => {
  const NavLinks = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#How",
      title: "How Hilink Work?",
    },
    {
      link: "#services",
      title: "Services",
    },
    {
      link: "#pricing",
      title: "Pricing",
    },
    {
      link: "#contact",
      title: "Contact Us",
    },
  ];
  return (
    <div className="">
      <div className="flex items-center gap-[10%] w-full justify-between">
        {/** Logo */}
        <Logo />

        {/** Links */}
        <div className="flex items-center gap-8 flex-1 justify-between">
          {NavLinks.map((link, index) => (
            <a
              href={link.link}
              className="hover:underline active:font-semibold hover:font-medium"
              key={index}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/** Login */}
        <button className="flex items-center gap-3 hover:opacity-95 transition-all delay-75 rounded-full p-2.5 bg-gray text-white px-7">
          <User className="w-5 h-5" />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
