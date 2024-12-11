import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-[100px] flex flex-col gap-2 relative ">
      {/** Main Title */}
      <div className="absolute h-full right-0 top-[200px]  w-full bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-25 xl:top-60" />
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
          Putuk Truno Camp Area
        </h1>
        <Image
          width={35}
          height={35}
          src={"/camp.svg"}
          className="absolute -top-6 -left-1 "
          alt="camp"
        />
      </div>

      <h4 className="text-md pt-3 text-gray-500">
        we want to be on each of your journeys seeking the satisfaction of
        seeing the incorruptible of nature. We can help you on an adventure
        around the world in just one app.
      </h4>

      {/** evaluation */}
      <div className="flex items-center gap-7 mt-8">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="" key={index}>
              <Image
                alt="star"
                src={"/star.svg"}
                className=""
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
        <p className="flex gap-1">
          <span className="font-bold">198K</span>
          <span className="underline font-medium">Good Reviews</span>
        </p>
      </div>

      {/** download button */}
      <div className="flex items-center gap-7 mt-7  flex-col md:flex-row">
        <button className="bg-[#2b9d53] cursor-pointer w-full md:w-auto font-semibold hover:opacity-95  px-7 rounded-full py-4 text-white">
          Download App
        </button>

        <a href="#how" className="flex items-center gap-2 hover:underline">
          <div className="bg-primary rounded-full p-1">
            <Play className=" text-white w-4 h-4 cursor-pointer" fill="white" />
          </div>
          <p className="font-medium">How we work?</p>
        </a>
      </div>

      {/** image section */}
      <div className="relative flex flex-1 items-start pt-12 mt-12">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-[16px] text-gray-300">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                className="cursor-pointer"
                width={20}
                height={20}
              />
            </div>
            <p className="font-medium  text-white">Aguas Calientes</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-[14px] block text-gray-300">Distance</p>
              <p className="bold-20 text-white font-medium ">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm block text-gray-300">Elevation</p>
              <p className="bold-20 text-white font-medium ">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
