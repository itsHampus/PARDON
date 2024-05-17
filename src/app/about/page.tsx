import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Members } from "../../components/Members";
import { BText3 } from "@/components/textComponents/BText3";
export default function About() {
  return (
    <div className="min-h-screen bg-about bg-cover bg-center">
      <Navbar foo="about" />

      <div className="m-4 flex items-center justify-center">
        <div className="w-[80%]">
          <BText3 className="leading-tight">
            Året var 2019 i staden Malmö när ett gäng vänner samlades i en
            stinkande liten replokal i Annedal för att starta vad som sen kom
            att bli PARDON. Efter att år genomleds i den trånga replokalen var
            det dags att låta Sverige och världen få höra vad PARDON hade jobbat
            på.
          </BText3>
        </div>
      </div>

      <Members />
    </div>
  );
}
