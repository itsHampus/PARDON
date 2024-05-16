import { Navbar } from "../components/Navbar";
import { Concerts } from "../components/Concerts";
import backgroundScan from "../../public/images/FELICIA_SCANNING(22).jpg";
import Moa from "../../public/images/members/Moa.jpg";
import {
  // MusicPlayer,
  Music2
} from "../components/MusicPlayer";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen bg-dashboard bg-cover bg-center">
      <Navbar />

      <div className="flex flex-row items-center justify-center p-2">
        <Image
          src={Moa}
          alt="Moa"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
        />
        <div className="w-[150px] p-2 sm:w-[250px] sm:p-4 md:w-[350px] md:p-6 lg:w-[450px] lg:p-8">
          <p className="font-mono text-xs leading-normal tracking-tighter text-white sm:text-sm sm:leading-relaxed md:text-base lg:text-lg lg:leading-loose ">
            Vart ska man börja om man ska berätta om PARDON? Att det är ett gäng
            sunkiga estetare som gillar punk och billig öl? Ja men det är väl
            ett bra ställe att börja på.
          </p>
        </div>
      </div>

      <div>
        <h1 className="font-mono text-4xl">Pussy Galore - Ute nu!</h1>
      </div>

      <Concerts />
      {/* <Music2 /> */}
      {/* <MusicPlayer /> */}
    </div>
  );
}
