import { Rub1 } from "./textComponents/Rub1";
import { BText2 } from "./textComponents/BText2";
import { BText3 } from "./textComponents/BText3";

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
    <li className="flex flex-row items-center justify-start space-x-60 pb-5 font-mono text-white lg:pb-10">
      <div className="flex flex-col leading-snug">
        <BText2>{date}</BText2>
        <BText3 className="text-gray-100">{time}</BText3>
        <BText3 className="text-gray-100">{venue}</BText3>
        <BText3 className="text-gray-100">{`${town}, ${country}`}</BText3>
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
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-col items-start  ">
        <Rub1 className="pb-4">Konserter</Rub1>
        <BText2>Kommer snart ...</BText2>
        <ul className="w-full">
          {/* <ConcertListItem
            country="Sv"
            date="02 May 24"
            eventUrl=""
            time="19:00"
            town="Malmö"
            venue="Plan B"
          />
          <ConcertListItem
            country="Sv"
            date="02 May 24"
            eventUrl=""
            time="19:00"
            town="Malmö"
            venue="Plan B"
          />
          <ConcertListItem
            country="Sv"
            date="02 May 24"
            eventUrl=""
            time="19:00"
            town="Malmö"
            venue="Plan B"
          />
          <ConcertListItem
            country="Sv"
            date="02 May 24"
            eventUrl=""
            time="19:00"
            town="Malmö"
            venue="Plan B"
          />
          <ConcertListItem
            country="Sv"
            date="02 May 24"
            eventUrl=""
            time="19:00"
            town="Malmö"
            venue="Plan B"
          /> */}
        </ul>
      </div>
    </div>
  );
};
