"use client";
import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });

export default function App() {
  return (
    <div>
      <div className="w-screen h-screen bg-black relative top-0 flex justify-center items-center sm:bg-cover sm:bg-no-repeat">
        <iframe
          className="w-full h-full m-5 pt-[6.5rem]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://docs.google.com/spreadsheets/d/1GSkvpy8IZW0TZDICU1t8o42MmYabGeqQ/preview"
          sandbox="allow-scripts allow-modals allow-popups allow-presentation allow-same-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
