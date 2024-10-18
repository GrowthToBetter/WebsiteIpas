"use client";
import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });
import Image, { StaticImageData } from "next/image";
import Bara from "@/../../public/img/GWE.jpg";
import Obi from "@/../../public/img/OBI.jpg";
import Ody from "@/../../public/img/ODY.jpg";
import Dian from "@/../../public/img/DIAN.jpg";
import Ochi from "@/../../public/img/OCHI.jpg";
import Bibah from "@/../../public/img/BIBAH.jpg";

interface AnggotaKelompok {
  name: string;
  description: string;
}

export default function App() {
  const AllParty : AnggotaKelompok[] = [
    {
      name: "NextJS",
      description:"Core of the System, with this, we can create our Fullstack Web Application in easy way"
    },
    {
      name: "Typescript",
      description:"Core Language, we can minimize our chance to get error in our code with this FrameWork of JavaScript"
    },
    {
      name: "ReactJS",
      description:"Here, we can use any elemen from Javascript and separate them into Component, we can make our app more efficient"
    },
    {
      name: "TailwindCSS",
      description:"This Framework of css make us more easier to design frontend of our app"
    },
  ]
  return (
    <div>
      <div className="w-screen h-fit bg-black relative top-0 flex justify-center flex-col items-center sm:bg-cover sm:bg-no-repeat">
        <div className="m-20  top-0 left-0 w-5/6 text-white absolute">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
            <>
              {AllParty.map((user, i) => (
                <div key={i} id="container" className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200">
                  <div className="ml-12 mt-2">
                    <p className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black">{user.name}</p>
                    <div className="mt-6 justify-start">
                      <p className="text-black">{user.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
