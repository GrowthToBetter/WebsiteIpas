"use client";
import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });
import Image from "next/image";
import Gambar from "@/../../public/img/Us.jpg";
import { FormButton } from "./Components/Button";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/team");
  };
  return (
    <div>
      <div className="w-screen h-screen bg-[url('/img/background_Home.jpg')] relative top-0 flex justify-center flex-col items-center sm:bg-cover sm:bg-no-repeat">
        <div className="w-screen h-screen bg-gradient-to-t top-0 from-black via-slate-100 to-slate-800 mix-blend-multiply absolute"></div>
        <div className="flex justify-center items-center flex-col mb-8">
          <h1
            className={`${archivo_black.className} text-white md:text-[85px] md:w-[800px] sm:text-[60px] w-[750px] text-center m-5`}
          >
            The Eco-friendly Charcoal Energy{" "}
          </h1>
          <p className="md:text-[30px] md:w-[700px] sm:text-[20px] sm:w-[600px] text-center m-5 text-white font-extralight">
            another innovation from us, that we believe it will bring a bright
            future{" "}
          </p>
        </div>
        <div className="">
          <button className="rounded-md w-[300px] p-3 lg:mt-16 md:mt-9 text-center bg-white bg-blend-soft-light bg-opacity-75 text-white">
            <p className="relative text-gray-300">Our Product</p>
          </button>
          <button className="rounded-md w-[300px] border-white p-3 ml-7 lg:mt-16 md:mt-9 text-center border-2 text-white">
            <p className="relative text-gray-300">Our Conseptual</p>
          </button>
        </div>
      </div>
      <div className="w-screen h-[1500px] bg-[url('/img/bg2.jpg')] bg-opacity-75 bg-cover bg-center relative top-0 flex flex-col sm:bg-cover sm:bg-no-repeat">
        <div className="w-screen h-[1500px] bg-gradient-to-b top-0 from-black via-slate-300 to-slate-800 mix-blend-multiply absolute "></div>
        <div className="m-40 ml-5 mt-30 absolute top-0">
          <h1
            className={`${archivo_black.className} m-10 ml-5 text-[44px] tracking-widest  text-white  `}
          >
            Why Bricket?
          </h1>
          <ul className="text-white grid grid-cols-3 grid-rows-2 gap-x-10 m-10 text-[20px]">
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              1. Energy Efficiency <br />
              <p className="font-light m-5 text-base indent-10 w-1/2">
                Charcoal briquettes have a higher energy density, making them
                more efficient at generating heat. This means that less fuel is
                required to achieve the same level of heating, which in turn
                reduces the need for resources
              </p>
            </li>
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              2. Energy Stability <br />
              <p className="font-light m-5 text-base indent-10 w-1/2">
                Briquettes can be stored for long periods of time without losing
                value, thereby providing stability in energy supply. This is
                very important in dealing with energy price fluctuations on the
                global market.
              </p>
            </li>
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              3. Prevent Deforestation
              <p className="font-light m-5 text-base indent-10 w-1/2">
                By using charcoal briquettes as a substitute for firewood, we
                can help reduce deforestation. The use of briquettes from waste
                reduces pressure on forests to provide firewood
              </p>
            </li>
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              4. Lower emison
              <p className="font-light m-5 text-base indent-10 w-1/2">
                Burning charcoal briquettes produces lower greenhouse gas
                emissions compared to burning firewood. Charcoal briquettes are
                high in calories and burn cleaner, producing less smoke and
                reducing air pollution
              </p>
            </li>
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              5. Economic support
              <p className="font-light m-5 text-base indent-10 w-1/2">
                The briquette industry can be a source of income for local
                communities who have natural resources such as wood or biomass.
                This can improve the economic welfare of the community.
              </p>
            </li>
            <li className="text-white text-[20px] font-semibold text-lg justify-self-start">
              6. wide availability
              <p className="font-light m-5 text-base indent-10 w-1/2">
                Briquettes can be made from various types of biomass, so their
                availability is wide and does not depend on just one source.
                This makes it possible to produce briquettes in various
                regions and countries.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen h-screen bg-black relative top-0 flex justify-center flex-col items-center sm:bg-cover sm:bg-no-repeat">
        <div className="m-20  top-0 left-0 w-5/6 text-white absolute">
          <h1 className="m-20 text-2xl font-bold">Contact Developer</h1>
          <div className="flex justify-evenly w-full">
            <ul className="border-r-2 border-white size-96">
              <li className="m-2">Baratrahjaga - FullstackDev</li>
              <li className="m-2">Shabri_s.s - Data Scientist</li>
              <li className="m-2">Ardian - Illustrator</li>
              <li className="m-2">Audy - Copy Writing</li>
              <li className="m-2">Navalovsky - Presentator</li>
              <li className="m-2">Labibah - Sekretaris</li>
              <FormButton variant="base" type="button" onClick={handleClick} className="m-5 mt-20">
                More Our Team
              </FormButton>
            </ul>
            <Image
                src={Gambar}
                alt="Us"
                className="rounded-md md:visible invisible"
                width={500}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
