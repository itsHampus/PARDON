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
            <BText3 className="leading-tight">
              Kontakta:{" "}
              <a
                href="mailto:pardon.official@gmail.com"
                className="underline hover:text-red-600"
              >
                pardon.official@gmail.com
              </a>
            </BText3>
          </div>
        </div>
      </div>
      <SocialsContainer />
    </div>
  );
}
