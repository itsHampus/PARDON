"use client";

import Image from "next/image";
import { useState } from "react";
import esther from "../../public/images/portraits/Esther_scanning(3).jpg";
import moa from "../../public/images/portraits/Moa_scanning(11).jpg";
import otto from "../../public/images/portraits/Otto_scanning(7).jpg";
import hampus from "../../public/images/portraits/Hampus_scanning(16).jpg";
import samuel from "../../public/images/portraits/Samuel_scanning(8).jpg";

type TMembers = "Esther" | "Moa" | "Otto" | "Hampus" | "Samuel";

export const Members = () => {
  const [memberImage, setMemberImage] = useState<TMembers | undefined>();

  return (
    <div className="flex w-full flex-col items-center border-2 border-white font-custom text-white">
      <div className="flex w-full flex-col justify-start border-2 border-red-600 p-4 sm:p-6 lg:p-8">
        <h4 className="text-[14px] sm:text-[18px] md:text-[23px] lg:text-[30px]">
          Medlemmar
        </h4>

        <ul className="flex cursor-pointer flex-row justify-between text-[22px] sm:text-[28px] md:text-[37px] lg:text-[48px]">
          <li
            onClick={() => {
              setMemberImage("Esther");
            }}
          >
            Esther
          </li>
          <li
            onClick={() => {
              setMemberImage("Moa");
            }}
          >
            Moa
          </li>
          <li
            onClick={() => {
              setMemberImage("Otto");
            }}
          >
            Otto
          </li>
          <li
            onClick={() => {
              setMemberImage("Hampus");
            }}
          >
            Hampus
          </li>
          <li
            onClick={() => {
              setMemberImage("Samuel");
            }}
          >
            Samuel
          </li>
        </ul>
      </div>
      {memberImage && (
        <div className="flex w-[80%] flex-row items-center justify-evenly ">
          <Image
            className="h-[140px] w-[140px] sm:h-[190px] sm:w-[190px] md:h-[240px] md:w-[240px] lg:h-[290px] lg:w-[290px]"
            src={
              memberImage === "Esther"
                ? esther
                : memberImage === "Moa"
                  ? moa
                  : memberImage === "Hampus"
                    ? hampus
                    : memberImage === "Otto"
                      ? otto
                      : samuel
            }
            alt="Medlemmar"
          />
          <p className="w-[140px]">
            Ja detta är en medlem i PARDON. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae quaerat nam enim
            consequuntur. Voluptatem voluptatum at eum voluptate labore eaque?
          </p>
        </div>
      )}
    </div>
  );
};
