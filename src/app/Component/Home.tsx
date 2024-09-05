export default function Home() {
  return (
    <div className="w-screen h-screen bg-[url('/img/background_Home.jpg')] relative top-0 flex justify-center flex-col items-center bg-cover bg-no-repeat">
      <div className="w-screen h-screen bg-gradient-to-t top-0 from-black via-slate-100 to-slate-800 mix-blend-multiply absolute"></div>
      <div className="flex justify-center items-center flex-col mb-8">
        <h1 className="text-white text-[85px] w-[780px] text-center m-5">
          Welcome To Our Application
        </h1>
        <p className="text-[30px] w-[700px] text-center m-5 text-white font-extralight">
          laciniaconsequat. Donec luctus sollicitudin sapien vel tincidunt. Nunc{" "}
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
  );
}
