"use client";

import Image from "next/image";
import { useState } from "react";
import esther from "../../public/images/portraits/Esther_scanning(3).jpg";
import moa from "../../public/images/portraits/Moa_scanning(11).jpg";
import otto from "../../public/images/portraits/Otto_scanning(7).jpg";
import hampus from "../../public/images/portraits/Hampus_scanning(16).jpg";
import samuel from "../../public/images/portraits/Samuel_scanning(8).jpg";
import { BText3 } from "./textComponents/BText3";
import { Rub3 } from "./textComponents/Rub3";
import { Rub2 } from "./textComponents/Rub2";
type TMembers = "Esther" | "Moa" | "Otto" | "Hampus" | "Samuel";

export const Members = () => {
  const [memberImage, setMemberImage] = useState<TMembers | undefined>();
  const membersArr: TMembers[] = ["Esther", "Moa", "Otto", "Hampus", "Samuel"];

  return (
    <div className="flex w-full flex-col items-center font-custom text-white">
      <div className="flex w-full flex-col justify-start p-4 sm:p-8 lg:p-10">
        <Rub3
          onClick={() => {
            setMemberImage(undefined);
          }}
        >
          Medlemmar
        </Rub3>
        <ul className="flex cursor-pointer flex-row justify-between">
          {membersArr.map((name) => (
            <li key={name} onClick={() => setMemberImage(name)}>
              <Rub2
                className={
                  memberImage === name ? "underline underline-offset-4" : ""
                }
              >
                {name}
              </Rub2>
            </li>
          ))}
        </ul>
      </div>
      {memberImage && (
        <div className="mb-8 flex w-full flex-row items-center justify-evenly">
          <Image
            className="h-[140px] w-[140px] max-w-[45%] sm:h-[190px] sm:w-[190px] md:h-[240px] md:w-[240px] lg:h-[290px] lg:w-[290px]"
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
          <BText3 className="min-w-[40%] max-w-[45%]">
            Ja detta är en medlem i PARDON. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae quaerat nam enim
            consequuntur. Voluptatem voluptatum at eum voluptate labore eaque?
          </BText3>
        </div>
      )}
    </div>
  );
};
