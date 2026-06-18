import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/image";

const NotFound = () => {
  return (
   <section className="bg-white py-20 dark:bg-darkmode min-h-screen flex items-center">
  <div className="container mx-auto max-w-7xl px-5">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={getImgPath("/images/svgs/404.png")}
          alt="404 Brain"
          width={600}
          height={600}
          quality={100}
          priority
          className="w-full max-w-[420px] lg:max-w-[520px]"
        />
      </div>

      {/* Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-6xl font-black text-black md:text-7xl lg:text-8xl">
          Opps!
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
          We Can't Seem To Find The Page You're Looking For.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:max-w-none">
          Oops! The page you are looking for does not exist.
          It might have been moved, renamed, or deleted.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
          >
            Go To Home
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
    

  );
};

export default NotFound;