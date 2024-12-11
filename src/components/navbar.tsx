"use client";
import React, { useState } from "react";
import Logo from "./logo";
import { User } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  const [open, setopen] = useState(false);
  return (
    <nav className="">
      <div className="lg:flex hidden  items-center gap-[10%] w-full justify-between">
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

      <div className="flex items-center justify-between">
        <Sheet open={open} onOpenChange={setopen}>
          <SheetTrigger>
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className=" cursor-pointer lg:hidden"
            />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Nav Links</SheetTitle>
              <SheetDescription>
                Make changes to your life here. Choose which nav you want
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-3 pt-5">
              {NavLinks.map((link, index) => (
                <a
                  onClick={() => setopen(false)}
                  href={link.link}
                  className=""
                  key={index}
                >
                  <p className="hover:bg-slate-50 p-2 rounded-lg hover:font-medium">
                    {link.title}
                  </p>
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="lg:hidden flex">
          <button className="flex items-center gap-3 hover:opacity-95 transition-all delay-75 rounded-full p-2.5 bg-gray text-white px-7">
            <User className="w-5 h-5" />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
