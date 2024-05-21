import { Navbar } from "../components/Navbar";
import { Concerts } from "../components/Concerts";
import Moa from "../../public/images/members/Moa.jpg";
import Image from "next/image";
import MusicPlayer from "@/components/MusicPlayer";
import { Rub2 } from "@/components/textComponents/Rub2";

export default function Page() {
  return (
    <div className="min-h-screen bg-black bg-cover bg-center">
      <Navbar />

      {/* <div className="flex flex-row items-center justify-center p-2">
        <Image
          src={Moa}
          alt="Moa playing guitar"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
        />
        <div className="w-[150px] p-2 sm:w-[250px] sm:p-4 md:w-[350px] md:p-6 lg:w-[450px] lg:p-8">
          <p className="font-mono text-xs leading-normal tracking-tighter text-white sm:text-sm sm:leading-relaxed md:text-base lg:text-lg lg:leading-loose ">
            PARDON is everywhere. PARDON is everything. PARDON is your new best
            friend. PARDON is the ground you walk on. PARDON is the air you
            breath. PARDON is the way you are. PARDON is life.
          </p>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center">
        <Rub2 className="mb-4">
          Förhandslyssna på nästkommande singel - Pussy Galore
        </Rub2>
        <MusicPlayer />
      </div>
      <Concerts />
    </div>
  );
}
