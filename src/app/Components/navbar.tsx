import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return(<>
    <div className="w-screen h-fit p-3 flex justify-between fixed bg-black bg-opacity-75 items-center z-50">
        <div className="w-[70px] h-[70px] bg-[url('/img/favicon.png')] bg-cover bg-no-repeat mx-5 sm:opacity-0 md:opacity-100"></div>
        <h1 className="font-light text-center items-center sm:size=[15px] sm:text-[15px] sm:tracking-[0.3rem] lg:size=[30px] lg:text-[30px] w-fit h-fit lg:tracking-[0.5rem] text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>OKS FIREMAN</h1>
        <div className="mr-12 flex justify-between">
        <Link href="/" className="decoration-black xl:mx-8 sm:mx-3">
          <span className=" text-white inline-block m-4 h-fit w-fit  xl:text-[20px] xl:font-[250] ">
            Home
          </span>
        </Link>
        <Link href="/" className="decoration-black xl:mx-8 sm:mx-3">
          <span className=" text-white inline-block m-4 h-fit w-fit  xl:text-[20px] xl:font-[250]">
            Team
          </span>
        </Link>
        <Link href="/" className="decoration-black xl:mx-8 sm:mx-3">
          <span className=" text-white inline-block m-4 h-fit w-fit  xl:text-[20px] xl:font-[250]">
            Product
          </span>
        </Link>
        <Link href="/" className="decoration-black xl:mx-8 sm:mx-3">
          <span className=" text-white inline-block m-4 h-fit w-fit  xl:text-[20px] xl:font-[250]">
            About
          </span>
        </Link>
        </div>
    </div>
    </>)
};