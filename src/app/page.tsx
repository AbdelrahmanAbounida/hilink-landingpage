import Camp from "@/components/camp";
import Features from "@/components/features";
import GetApp from "@/components/get-app";
import Guide from "@/components/guide";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  pt-5">
      <Navbar />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  );
}
