"use client";
import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });
import Image from "next/image";
import Bara from "@/../../public/img/GWE.jpg";
import { FormButton } from "./Components/Button";
import { useRouter } from "next/navigation";

interface ProducInformation {
  header: string;
  description: string;
}
export default function App() {
  const information: ProducInformation[] = [
    {
      header: "Energy Efficiency",
      description:
        "Charcoal briquettes have a higher energy density, making them more efficient at generating heat. This means that less fuel is required to achieve the same level of heating, which in turn reduces the need for resources",
    },
    {
      header: "Energy Stability",
      description:
        "Briquettes can be stored for long periods of time without losing value, thereby providing stability in energy supply. This is very important in dealing with energy price fluctuations on the global market.",
    },
    {
      header: "Prevent Deforestation",
      description:
        "By using charcoal briquettes as a substitute for firewood, we can help reduce deforestation. The use of briquettes from waste reduces pressure on forests to provide firewood",
    },
    {
      header: "Lower emison",
      description:
        "Burning charcoal briquettes produces lower greenhouse gas emissions compared to burning firewood. Charcoal briquettes are high in calories and burn cleaner, producing less smoke and reducing air pollution",
    },
    {
      header: "Economic support",
      description:
        "The briquette industry can be a source of income for local communities who have natural resources such as wood or biomass. This can improve the economic welfare of the community.",
    },
    {
      header: "wide availability",
      description:
        "Briquettes can be made from various types of biomass, so their availability is wide and does not depend on just one source. This makes it possible to produce briquettes in various regions and countries.",
    },
  ];
  const andBricket: ProducInformation[]=[
    {
      header:"Dependence on Fossil Fuels",
      description:"The reliance on fossil fuels has led to increased greenhouse gas (GHG) emissions, contributing to climate change and air pollution. The combustion of coal, oil, and natural gas releases significant amounts of carbon dioxide and other pollutants into the atmosphere."
    },
    {
      header:"Waste Management Issues",
      description:"Agricultural and organic waste often ends up in landfills or is burned openly, leading to environmental degradation. Open burning not only contributes to air pollution but also wastes valuable biomass that could be repurposed."
    },
    {
      header:"Health Hazards",
      description: "The burning of fossil fuels and improper waste disposal can result in health problems for communities due to poor air quality and exposure to toxic substances."
    }
  ]
  const router = useRouter();
  const handleClick = () => {
    router.push("/team");
  };
  return (
    <div>
      <div className="w-screen h-screen bg-[url('/img/background_Home.jpg')] relative top-0 flex justify-center flex-col items-center bg-cover bg-no-repeat">
        <div className="w-screen h-screen bg-gradient-to-t top-0 from-black via-slate-100 to-slate-800 mix-blend-multiply absolute"></div>
        <div className="flex justify-center items-center flex-col mb-8">
          <h1
            className={`${archivo_black.className} text-white md:text-[85px] md:w-[800px] sm:text-[60px] w-[750px] text-center m-5`}
          >
            The Eco-friendly Charcoal Energy{" "}
          </h1>
          <p className="md:text-[30px] md:w-[700px] text-[20px] w-[600px] text-center m-5 text-white font-extralight">
            another innovation from us, that we believe it will bring a bright
            future{" "}
          </p>
        </div>
        <div className="">
          <button className="rounded-md w-[300px] p-3 lg:mt-16 mt-9 text-center bg-white bg-blend-soft-light bg-opacity-75 text-white">
            <p className="relative text-gray-300">Our Product</p>
          </button>
          <button className="rounded-md w-[300px] border-white p-3 ml-7 lg:mt-16 md:mt-9 text-center border-2 text-white">
            <p className="relative text-gray-300">Our Conseptual</p>
          </button>
        </div>
      </div>
        <div className="m-40 ml-5 mt-30 ">
          <h1
            className={`${archivo_black.className} m-10 ml-5 text-[44px] tracking-widest  text-black  `}
          >
            Why Bricket?
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
            <>
              {information.map((user, i) => (
                <div
                  key={i}
                  id="container"
                  className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
                >
                  <div className="ml-12 mt-2">
                    <p className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black">
                      {user.header}
                    </p>
                    <p
                      className={`font-normal xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] mt-2`}
                    >
                      Description : {user?.description}
                    </p>
                  </div>
                </div>
              ))}
            </>
          </div>
          <p className={`font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black text-center ${archivo_black.className}` }>BEFORE BRICKET</p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
            {
                andBricket.map((user, i) => (
                  <div
                    key={i}
                    id="container"
                    className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
                  >
                    <div className="ml-12 mt-2">
                      <p className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black">
                        {user.header}
                      </p>
                      <p
                        className={`font-normal xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] mt-2`}
                      >
                        Description : {user?.description}
                      </p>
                    </div>
                  </div>
                ))
              }
          </div>
          <FormButton variant="white" className="m-10 border-2 border-moklet" onClick={handleClick}>
            {" "}
            visit our team
          </FormButton>
        </div>
    </div>
  );
}
