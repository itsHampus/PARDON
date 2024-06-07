import { Navbar } from "@/components/Navbar";
import { BText3 } from "@/components/textComponents/BText3";
import { BText4 } from "@/components/textComponents/BText4";
import { Rub1 } from "@/components/textComponents/Rub1";

export default function Licenses() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <div className="flex items-center justify-center">
        <div>
          <Rub1>Licenses and Attributions</Rub1>
          <BText3>This website uses the following open-source projects:</BText3>
          <ul>
            <li>
              <BText4>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:text-red-700"
                  target="_blank"
                >
                  TailwindCSS - MIT License
                </a>
              </BText4>
            </li>
            <li>
              <BText4>
                <a
                  href="https://reactjs.org/"
                  className="hover:text-red-700"
                  target="_blank"
                >
                  React - MIT License
                </a>
              </BText4>
            </li>
            <li>
              <BText4>
                <a
                  href="https://nextjs.org/"
                  className="hover:text-red-700"
                  target="_blank"
                >
                  Next.js - MIT License
                </a>
              </BText4>
            </li>
            <li>
              <BText4>
                <a
                  href="https://vercel.com/"
                  className="hover:text-red-700"
                  target="_blank"
                >
                  Vercel - Deployment Platform
                </a>
              </BText4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
