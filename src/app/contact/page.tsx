import { BText3 } from "@/components/textComponents/BText3";
import { Navbar } from "../../components/Navbar";
import { Rub2 } from "@/components/textComponents/Rub2";
import { SocialsContainer } from "@/components/SocialsContainer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-contact bg-cover bg-center">
      <Navbar foo="contact" />

      <div className="mb-12 mt-10 flex items-center justify-center">
        <div className="flex flex-col">
          <Rub2>Vill du göra business med PARDON?</Rub2>
          <div className="flex flex-row">
            <BText3 className="leading-tight">Kontakta:</BText3>
            <a
              href="mailto:pardon.official@gmail.com"
              className="font-mono text-[11px] leading-tight text-white underline hover:text-red-600 sm:text-[14px] md:text-[19px] lg:text-[24px]"
            >
              pardon.official@gmail.com
            </a>
          </div>
        </div>
      </div>
      <SocialsContainer />
    </div>
  );
}
