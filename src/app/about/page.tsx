import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Members } from "../../components/Members";
export default function About() {
  return (
    <div className="bg-about min-h-screen bg-cover bg-center">
      <Navbar />

      <div className="m-4 flex items-center justify-center border-2 border-red-600">
        <div className="w-[80%] border-2 border-white">
          <p className="font-mono leading-tight text-white">
            Året var 2019 i staden Malmö när ett gäng vänner samlades i en
            stinkande liten replokal i Annedal för att starta vad som sen kom
            att bli PARDON. Efter att år genomleds i den trånga replokalen var
            det dags att låta Sverige och världen få höra vad PARDON hade jobbat
            på.
          </p>
        </div>
      </div>

      <Members />
    </div>
  );
}
