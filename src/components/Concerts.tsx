import { Rub1 } from "./textComponents/Rub1";
import { BText1 } from "./textComponents/BText1";
import { BText2 } from "./textComponents/BText2";

const ConcertListItem = ({
  date,
  time,
  venue,
  town,
  country,
  eventUrl
}: {
  date: string;
  time: string;
  venue: string;
  town: string;
  country: string;
  eventUrl: string;
}) => {
  return (
    <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
      <div className="flex flex-col leading-snug">
        <BText1>{date}</BText1>
        <BText2 className="text-gray-100">{time}</BText2>
        <BText2 className="text-gray-100">{venue}</BText2>
        <BText2 className="text-gray-100">{`${town}, ${country}`}</BText2>
      </div>
      <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[23px]  lg:text-[30px] ">
        <a href={eventUrl} target="_blank">
          Biljetter
        </a>
      </button>
    </li>
  );
};

export const Concerts = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%] flex-col items-start  ">
        <Rub1 className="pb-4">Konserter</Rub1>
        <BText1>Kommer snart ...</BText1>
        <ul className="w-full"></ul>
      </div>
    </div>
  );
};
