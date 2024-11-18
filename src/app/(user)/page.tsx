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
export interface card {
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
        "Briket arang memiliki kepadatan energi yang lebih tinggi sehingga lebih efisien dalam menghasilkan panas. Artinya, lebih sedikit bahan bakar yang dibutuhkan untuk mencapai tingkat pemanasan yang sama, sehingga mengurangi kebutuhan sumber daya",
    },
    {
      header: "Energy Stability",
      description:
        "Briket dapat disimpan dalam jangka waktu lama tanpa kehilangan nilainya, sehingga memberikan kestabilan pasokan energi. Hal ini sangat penting dalam menghadapi fluktuasi harga energi di pasar global.",
    },
    {
      header: "Prevent Deforestation",
      description:
        "Dengan menggunakan briket arang sebagai pengganti kayu bakar, kita dapat membantu mengurangi deforestasi. Penggunaan briket dari limbah mengurangi tekanan pada hutan untuk menyediakan kayu bakar",
    },
    {
      header: "Lower emison",
      description:
        "Pembakaran briket arang menghasilkan emisi gas rumah kaca yang lebih rendah dibandingkan dengan pembakaran kayu bakar. Briket arang tinggi kalori dan pembakarannya lebih bersih, menghasilkan lebih sedikit asap dan mengurangi polusi udara",
    },
    {
      header: "Economic support",
      description:
        "Industri briket dapat menjadi sumber pendapatan bagi masyarakat lokal yang memiliki sumber daya alam seperti kayu atau biomassa. Hal ini dapat meningkatkan kesejahteraan ekonomi masyarakat.",
    },
    {
      header: "wide availability",
      description:
        "Briket dapat dibuat dari berbagai jenis biomassa sehingga ketersediaannya luas dan tidak bergantung pada satu sumber saja. Hal ini memungkinkan produksi briket di berbagai wilayah dan negara.",
    },
  ];
  const andBricket: ProducInformation[] = [
    {
      header: "Dependence on Fossil Fuels",
      description:
        "Ketergantungan pada bahan bakar fosil telah menyebabkan peningkatan emisi gas rumah kaca (GRK), yang berkontribusi terhadap perubahan iklim dan polusi udara. Pembakaran batu bara, minyak, dan gas alam melepaskan sejumlah besar karbon dioksida dan polutan lainnya ke atmosfer.",
    },
    {
      header: "Waste Management Issues",
      description:
        "Limbah pertanian dan organik seringkali berakhir di tempat pembuangan sampah atau dibakar secara terbuka, sehingga menyebabkan degradasi lingkungan. Pembakaran terbuka tidak hanya berkontribusi terhadap polusi udara tetapi juga menyia-nyiakan biomassa berharga yang dapat dimanfaatkan kembali.",
    },
    {
      header: "Health Hazards",
      description:
        "Pembakaran bahan bakar fosil dan pembuangan limbah yang tidak tepat dapat mengakibatkan gangguan kesehatan bagi masyarakat akibat buruknya kualitas udara dan paparan zat beracun.",
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
              <h1 className={`${archivo_black.className} text-white text-[20px]`}>Hasil Percobaan</h1>
              <video
              className="w-full max-w-md rounded-lg shadow-lg"
              controls
              preload="metadata"
            >
              <source
                src="/img/hasil.mp4"
                type="video/mp4"
              />
              Video Documentation About Making Briquette
            </video>
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
