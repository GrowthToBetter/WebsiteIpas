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
  image: StaticImageData;
  role: string;
  description: string;
}

export default function App() {
  const AllParty : AnggotaKelompok[] = [
    {
      name: "Jean Richnerd Rantabaratrahjaga",
      image: Bara,
      role: "Developer and Consultant",
      description:"Create system of the app that contain the information about Bricket, consultant creation of the Bricket that tell the team about what we needed"

    },
    {
      name: "Shabri Sebastian Siregar",
      image: Obi,
      role: "Data Seeker, Copy Writer, Team Leader",
      description:"Finding Data that needed for our project, Writing Analysis in easy way, Lead and Manage Team"
    },
    {
      name: "Coulava Illona Rahmawati",
      image: Ody,
      role: "Secretary and Accountant",
      description:"Manage Our Financial, and Write Important information when needed"
    },
    {
      name: "Ardian Risqi Nanda Pratama",
      image: Dian,
      role: "Illustrator and Designer",
      description:"Create All illustration about our Bricket, Design and draw "
    },
    {
      name: "Navalovsky Jose Allenzo",
      image: Ochi,
      role: "Presentation ",
      description:"The one and Only he can do is presentating the project"
    },
    {
      name: "Labibah Sausan Qothrunnada",
      image: Bibah,
      role: "Asisstant",
      description:"Making a briquette with our secretary"
    }

  ]
  return (
    <div>
      <div className="w-screen h-fit bg-black relative top-0 flex justify-center flex-col items-center sm:bg-cover sm:bg-no-repeat">
        <div className="m-20  top-0 left-0 w-5/6 text-white absolute">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
            <>
              {AllParty.map((user, i) => (
                <div key={i} id="container" className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200">
                  <Image src={user.image} unoptimized quality={100} width={100} height={100} alt="banner" className="w-full rounded-t-3xl" />
                  <div className="ml-12 mt-2">
                    <p className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black">{user.name}</p>
                    <p className={`font-normal xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] mt-2 ${user?.role === "" ? "text-red-500" : "text-green-500"}`}>
                      Role In Team : {user?.role==="" ? "Tidak Bekerja" : user?.role}
                    </p>
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
