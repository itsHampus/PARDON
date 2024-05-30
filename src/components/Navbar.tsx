"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "../hooks/useScrollDirection";

export const Navbar = ({ foo }: { foo?: "about" | "contact" }) => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`sticky left-0 right-0 top-0 z-10 m-[0_1rem_1rem_1rem] flex flex-row items-end justify-between bg-transparent p-2 font-custom transition-transform duration-150 sm:m-[0_2rem_2rem_2rem] sm:p-3 md:p-4 lg:m-[0_3rem_4rem_3rem] lg:p-6 ${
        scrollDirection === "down"
          ? "-translate-y-full transform"
          : "translate-y-0 transform"
      }`}
    >
      <div className="flex flex-row flex-nowrap items-end">
        <Link href="./contact">
          <h2
            className={`${
              foo === "contact"
                ? "underline underline-offset-4"
                : "hover:underline hover:underline-offset-4"
            } text-nowrap font-custom text-base text-white sm:text-xl md:text-2xl lg:text-3xl`}
          >
            Kontakt
          </h2>
        </Link>
      </div>
      <div className="flex w-[200px] items-end  justify-center min-[480px]:w-[328px] sm:w-[426px]  md:w-[550px] lg:w-[720px]">
        <Link href="./">
          <Image
            src={require("../../public/logo/PARDON_720_SEMI.png")}
            alt="logga"
          />
        </Link>
      </div>
      <div className="flex flex-row flex-nowrap items-end">
        <Link href="./about">
          <h2
            className={`${
              foo === "about"
                ? "underline underline-offset-4"
                : "hover:underline hover:underline-offset-4"
            } text-nowrap font-custom text-base text-white sm:text-xl md:text-2xl lg:text-3xl`}
          >
            Om oss
          </h2>
        </Link>
      </div>
    </div>
  );
};

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// export const Navbar = ({ foo }: { foo?: "about" | "contact" }) => {
//   return (
//     <div className="top-0 z-10 m-[0_1rem_1rem_1rem] flex flex-row items-end justify-between bg-transparent p-2 font-custom sm:m-[0_2rem_2rem_2rem] sm:p-3 md:p-4 lg:m-[0_3rem_4rem_3rem] lg:p-6">
//       <div className="flex flex-row flex-nowrap items-end">
//         <Link href="./contact">
//           <h2
//             className={`${foo === "contact" ? "underline underline-offset-4" : ""} text-nowrap font-custom text-base text-white sm:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Kontakt
//           </h2>
//         </Link>
//       </div>
//       <div className="flex w-[200px] items-end  justify-center min-[480px]:w-[328px] sm:w-[426px]  md:w-[550px] lg:w-[720px]">
//         <Link href="./">
//           <Image
//             src={require("../../public/logo/PARDON_720_SEMI.png")}
//             alt="logga"
//           />
//           {/* <h1 className="text-[256px] font-bold text-white">PARDON</h1> */}
//         </Link>
//       </div>
//       <div className="flex flex-row flex-nowrap items-end">
//         <Link href="./about">
//           <h2
//             className={`${foo === "about" ? "underline underline-offset-4" : ""} text-nowrap font-custom text-base text-white sm:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Om oss
//           </h2>
//         </Link>
//       </div>
//     </div>
//   );
// };
