"use client";

import { Tiktok } from "../../public/icons/Tiktok";
import { Youtube } from "../../public/icons/Youtube";
import { Facebook } from "../../public/icons/Facebook";
import { Instagram } from "../../public/icons/Instagram";
import { Spotify } from "../../public/icons/Spotify";
export const SocialsContainer = () => {
  //TODO: Add links to tiktok, youtube and spotify
  return (
    <div className="ml-auto mr-auto w-auto text-center ">
      <a
        target="_blank"
        href="https://www.tiktok.com/"
        className="m-2 inline-block h-5 w-5 cursor-pointer md:m-4 md:h-[30px] md:w-[30px] lg:m-6 lg:h-[50px] lg:w-[50px]"
      >
        <Tiktok />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/"
        className="m-2  inline-block h-5 w-5 cursor-pointer md:m-4 md:h-[30px] md:w-[30px] lg:m-6 lg:h-[50px] lg:w-[50px] "
      >
        <Youtube />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100064228441172"
        className="m-2  inline-block h-5 w-5 cursor-pointer md:m-4 md:h-[30px] md:w-[30px] lg:m-6 lg:h-[50px] lg:w-[50px] "
      >
        <Facebook />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/pardon.official/"
        className="m-2  inline-block h-5 w-5 cursor-pointer md:m-4 md:h-[30px] md:w-[30px] lg:m-6 lg:h-[50px] lg:w-[50px] "
      >
        <Instagram />
      </a>
      <a
        target="_blank"
        href="https://open.spotify.com/"
        className="m-2 inline-block h-5 w-5 cursor-pointer md:m-4 md:h-[30px] md:w-[30px] lg:m-6 lg:h-[50px] lg:w-[50px] "
      >
        <Spotify />
      </a>
    </div>
  );
};
