import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import backgroundScan from "../../../public/images/FELICIA_SCANNING(6).jpg";

export default function Contact() {
  return (
    <div className="relative  h-[100vh] w-[100vw]">
      <Image
        src={backgroundScan}
        alt="BackroundImage"
        placeholder="blur"
        quality={100}
        fill
        className="z-[-5] object-cover brightness-[0.75] contrast-150"
      />
      <Navbar />
    </div>
  );
}
