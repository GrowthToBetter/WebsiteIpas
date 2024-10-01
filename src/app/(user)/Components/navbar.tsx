"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="w-screen h-fit p-3 flex justify-between fixed bg-black bg-opacity-75 items-center z-50">
        <div className="w-[70px] h-[70px] bg-[url('/img/favicon.png')] bg-cover bg-no-repeat mx-5 sm:opacity-0 md:opacity-100"></div>
        <h1
          className="font-light text-center items-center sm:size=[15px] sm:text-[15px] sm:tracking-[0.3rem] lg:size=[30px] lg:text-[30px] w-fit h-fit lg:tracking-[0.5rem] text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          OKS FIREMAN
        </h1>
        <div className="mr-12 flex justify-between">
          <Link href="/" className={`decoration-black xl:mx-8 sm:mx-3`}>
            <span
              className={`inline-block hover:bg-white hover:text-black rounded-lg duration-500 m-4 h-fit w-fit  xl:text-[20px] p-3 xl:font-[250] ${
                pathName === "/"
                  ? "bg-white rounded-lg text-black"
                  : "text-white"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/" className={`decoration-black xl:mx-8 sm:mx-3`}>
            <span
              className={`inline-block hover:bg-white hover:text-black rounded-lg duration-500 m-4 h-fit w-fit  xl:text-[20px] p-3 xl:font-[250] ${
                pathName === "/team"
                  ? "bg-white rounded-lg text-black"
                  : "text-white"
              }`}
            >
              Team
            </span>
          </Link>
          <Link href="/" className={`decoration-black xl:mx-8 sm:mx-3`}>
            <span
              className={`inline-block hover:bg-white hover:text-black rounded-lg duration-500 m-4 h-fit w-fit  xl:text-[20px] p-3 xl:font-[250] ${
                pathName === "/product"
                  ? "bg-white rounded-lg text-black"
                  : "text-white"
              }`}
            >
              Product
            </span>
          </Link>
          <Link href="/" className={`decoration-black xl:mx-8 sm:mx-3 `}>
            <span
              className={`inline-block hover:bg-white hover:text-black rounded-lg duration-500 m-4 h-fit w-fit  xl:text-[20px] p-3 xl:font-[250] ${
                pathName === "/about"
                  ? "bg-white rounded-lg text-black"
                  : "text-white"
              }`}
            >
              About
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
