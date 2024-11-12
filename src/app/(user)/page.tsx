"use client";
import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });
import Image, { StaticImageData } from "next/image";
import { FormButton, LinkButton } from "./Components/Button";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import ModalProfile from "./Components/Modal";
import Reaction from "@/../../public/img/Reaction.png";
import Arang from "@/../../public/img/arang (1).jpg";
import Tepung from "@/../../public/img/tepung.jpg";
import Water from "@/../../public/img/water.jpg";
import Panci from "@/../../public/img/Panji.jpg";
import Kompor from "@/../../public/img/Kompor.jpg";
import dokum1 from "@/../../public/img/dokum1.jpg";
import dokum2 from "@/../../public/img/dokum2.jpg";
import Wadah from "@/../../public/img/Wadah.jpg";

interface ProducInformation {
  header: string;
  description: string;
}
interface ConseptInformation {
  header: string;
  description: string;
  link: string[];
}
interface card {
  path: StaticImageData;
  description: string;
}
export default function App() {
  const [modal, setModal] = useState(false);
  const [ourprod, setOurProd] = useState(false);
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
  const andBricket: ProducInformation[] = [
    {
      header: "Dependence on Fossil Fuels",
      description:
        "The reliance on fossil fuels has led to increased greenhouse gas (GHG) emissions, contributing to climate change and air pollution. The combustion of coal, oil, and natural gas releases significant amounts of carbon dioxide and other pollutants into the atmosphere.",
    },
    {
      header: "Waste Management Issues",
      description:
        "Agricultural and organic waste often ends up in landfills or is burned openly, leading to environmental degradation. Open burning not only contributes to air pollution but also wastes valuable biomass that could be repurposed.",
    },
    {
      header: "Health Hazards",
      description:
        "The burning of fossil fuels and improper waste disposal can result in health problems for communities due to poor air quality and exposure to toxic substances.",
    },
  ];
  const Consept: ConseptInformation[] = [
    {
      header: "Definisi Briket Arang",
      description:
        "Briket arang adalah sebuah produk energi yang dibuat dari material organik yang telah difermentasi dan kemudian dikompresi menjadi bentuk padat. Material umum yang digunakan untuk membuat briket arang antara lain kulit sabut buah nipah, tongkol jagung, kulit coklat, dan limbah ela sagu",
      link: [
        "https://www.semanticscholar.org/paper/1b586ce083e55d01d631547121213f0efa82f6a0",
        "https://www.semanticscholar.org/paper/8ca6389a137482c55475a2b0f7b15389dbe46ae6",
      ],
    },
  ];
  const ConseptAdv: ConseptInformation[] = [
    {
      header: "Dehidrasi",
      description:
        " Materi organik yang digunakan (seperti kulit sabut buah nipah atau tongkol jagung) mengalami dehidrasi, yaitu penghapusan air dari material tersebut. Dehidrasi ini dilakukan untuk mengurangi kadar air dalam material agar nantinya dapat dibakar dengan lebih efisien, Material Organik + Air → Arang",
      link: [
        "https://www.semanticscholar.org/paper/1b586ce083e55d01d631547121213f0efa82f6a0",
      ],
    },
    {
      header: "Sumber Energi Alternatif",
      description:
        "Briket arang dapat dijadikan sumber energi alternatif yang ampuh dalam menghasilkan kalor. Nilai kalornya relatif tinggi, sehingga dapat digunakan untuk memasak, pendinginan, dan aplikasi lainnya",
      link: [
        "https://www.semanticscholar.org/paper/1b586ce083e55d01d631547121213f0efa82f6a0",
        "https://www.semanticscholar.org/paper/14b244b6fd09f920d5a66bda0cca36ac6f3a3f35",
      ],
    },
    {
      header: "Peluang Bisnis Baru",
      description:
        "Produksi briket arang juga dapat menjadi peluang bisnis baru bagi masyarakat, terutama di daerah-daerah yang memiliki sumber material yang melimpah. Hal ini dapat membantu meningkatkan kesadaran dan keterampilan masyarakat dalam memanfaatkan limbah",
      link: [
        "https://www.semanticscholar.org/paper/8ca6389a137482c55475a2b0f7b15389dbe46ae6",
      ],
    },
    {
      header: "Ramah Lingkungan",
      description:
        "Briket arang relative ramah lingkungan karena tidak menghasilkan polusi sulfur dan dapat mengurangi volume sampah organik yang tidak terurai",
      link: [
        "https://www.semanticscholar.org/paper/129dd13c5555e950c3b63cd3d59026690770ef0e",
      ],
    },
  ];
  const router = useRouter();
  const handleClick = () => {
    router.push("/team");
  };
  const filteredUsers: card[] = [
    {
      path: Arang,
      description: "Arang",
    },
    {
      path: Tepung,
      description: "Tepung Ketan",
    },
    {
      path: Water,
      description: "Air",
    },
    {
      path: Panci,
      description: "Panci",
    },
    {
      path: Kompor,
      description: "Kompor",
    },
    {
      path: Wadah,
      description: "Wadah",
    },
  ];
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
        <div className="flex">
          <FormButton
            variant="base"
            onClick={() => {
              setOurProd(true);
            }}
            className=" w-[300px] p-3 relative text-gray-300"
          >
            Our Product
          </FormButton>
          <FormButton
            variant="base"
            className="w-[300px] p-3 relative text-gray-300"
            onClick={() => {
              setModal(true);
            }}
          >
            Our Conseptual
          </FormButton>
        </div>
        {ourprod && (
          <ModalProfile
            title="Our Product"
            onClose={() => {
              setOurProd(false);
            }}
            className="flex p-0 "
          >
            <video
              className="w-full max-w-md rounded-lg shadow-lg"
              controls
              preload="metadata"
            >
              <source
                src="/img/briketvideo.mp4"
                type="video/mp4"
              />
              Video Documentation About Making Briquette
            </video>
            <div className="grid grid-row-2 p-3">
            <Image
                src={dokum1}
                unoptimized
                quality={100}
                width={100}
                height={100}
                alt="banner"
                className="w-full h-full rounded-3xl p-2"
              />
              <Image
                src={dokum2}
                unoptimized
                quality={100}
                width={100}
                height={100}
                alt="banner"
                className="w-full h-full rounded-3xl p-2"
              />
            </div>
          </ModalProfile>
        )}
        {modal && (
          <ModalProfile
            onClose={() => {
              setModal(false);
            }}
            title="Conseptual of Our Product"
          >
            <div
              id="container"
              className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
            >
              <Image
                src={Reaction}
                unoptimized
                quality={100}
                width={100}
                height={100}
                alt="banner"
                className="w-full h-36 rounded-t-3xl"
              />
              {Consept.map((user, i) => (
                <div
                  key={i}
                  id="container"
                  className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
                >
                  <div className="ml-12 mt-2">
                    <p
                      key={i}
                      className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black"
                    >
                      {user.header}
                    </p>
                    <div className="mt-6 justify-start">
                      <span className="text-black">{user.description}</span>
                    </div>
                  </div>
                  {user.link.map((link, i) => (
                    <LinkButton
                      href={link}
                      variant="base"
                      className="text-black p-2 m-5"
                      key={i}
                    >
                      Reference ke {i + 1}
                    </LinkButton>
                  ))}
                </div>
              ))}
              <p
                className={`${archivo_black.className} text-black md:text-[15px] md:w-[700px] text-[12px] w-[600px] text-center m-5}`}
              >
                Manfaat Briket Arang <br />
                Manfaat briket arang sangat luas dan beragam, antara lain:
              </p>
              {ConseptAdv.map((user, i) => (
                <div
                  key={i}
                  id="container"
                  className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
                >
                  <div className="ml-12 mt-2">
                    <p className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black">
                      {user.header}
                    </p>
                    <div className="mt-6 justify-start">
                      <p className="text-black">{user.description}</p>
                    </div>
                  </div>
                  {user.link.map((link, i) => (
                    <LinkButton
                      href={link}
                      key={i}
                      className="text-black p-2 m-3"
                      variant="base"
                    >
                      Reference ke {i + 1}
                    </LinkButton>
                  ))}
                </div>
              ))}
            </div>
            <p
              className={`${archivo_black.className} text-black md:text-[15px] md:w-[700px] text-[12px] w-[600px] text-center m-5}`}
            >
              Alat Dan Bahan
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
              <>
                {filteredUsers.map((user, i) => (
                  <div
                    key={i}
                    id="container"
                    className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
                  >
                    <Image
                      src={user.path}
                      unoptimized
                      quality={100}
                      width={100}
                      height={100}
                      alt="banner"
                      className="w-full h-36 rounded-t-3xl"
                    />
                    <div className="ml-8 mt-2">
                      <div className="flex justify-between p-5">
                        <p
                          key={i}
                          className="font-medium xl:text-[15px]  lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-black"
                        >
                          {user.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </ModalProfile>
        )}
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
                  <p
                    key={i}
                    className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black"
                  >
                    {user.header}
                  </p>
                  <p
                    key={i}
                    className={`font-normal xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] mt-2`}
                  >
                    Description : {user?.description}
                  </p>
                </div>
              </div>
            ))}
          </>
        </div>
        <p
          className={`font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black text-center ${archivo_black.className}`}
        >
          BEFORE BRICKET
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white rounded-xl p-8 mt-4">
          {andBricket.map((user, i) => (
            <div
              key={i}
              id="container"
              className="w-full bg-slate-50 rounded-3xl pb-6 border border-slate-200"
            >
              <div className="ml-12 mt-2">
                <p
                  key={i}
                  className="font-medium xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-black"
                >
                  {user.header}
                </p>
                <p
                  key={i}
                  className={`font-normal xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] mt-2`}
                >
                  Description : {user?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <FormButton
          variant="white"
          className="m-10 border-2 border-moklet"
          onClick={handleClick}
        >
          {" "}
          visit our team
        </FormButton>
      </div>
    </div>
  );
}
