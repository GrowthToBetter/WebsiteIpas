import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    return(<>
    <div className="w-screen h-fit p-3 flex justify-evenly fixed bg-gradient-to-b from-black/30 to-white/30 items-center z-50">
        <div className="w-[70px] h-[70px] bg-[url('/img/favicon.png')] bg-cover bg-no-repeat"></div>
        <h1 className="font-light text-center items-center size=[30px] text-[30px] w-fit h-fit tracking-[0.5rem] " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>OKS FIREMAN</h1>
        <div>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block m-4 h-fit w-fit text-[20px] font-light">
            Home
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block m-4 h-fit w-fit text-[20px] font-light">
            Team
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block m-4 h-fit w-fit text-[20px] font-light">
            Product
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block m-4 h-fit w-fit text-[20px] font-light">
            About
          </span>
        </Link>
        </div>
    </div>
    </>)
};