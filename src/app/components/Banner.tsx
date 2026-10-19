"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Banner() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      }),
    );
  }, []);
  return (
    <div className="m-5 border border-gray-200 p-4 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="relative">
          <span className="px-2 py-1 text-green-700 bg-green-100 rounded-2xl">
            {time}
          </span>
          <h1 className="text-3xl font-bold md:text-4xl py-4">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="md:text-xl text-gray-500 mb-5">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a href="#allproduct" className="text-white text-xl bg-green-700 hover:bg-green-800 px-4 py-2 rounded-xl">সব পণ্য দেখুন</a>
        </div>
        <div>
          <Image
            className="mx-auto"
            src={"/assets/bazar-hero.png"}
            alt="Banner"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Banner;
