import { Rub1 } from "./textComponents/Rub1";
import { BText1 } from "./textComponents/BText1";
import { BText2 } from "./textComponents/BText2";
export const Concerts = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%] flex-col items-start  ">
        <Rub1 className="pb-4">Konserter</Rub1>
        <ul className="w-full">
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <BText1>02 Maj 2024</BText1>
              <BText2 className="text-gray-100">19:00</BText2>
              <BText2 className="text-gray-100">Plan B</BText2>
              <BText2 className="text-gray-100">Malmö, Sv</BText2>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[23px]  lg:text-[30px] ">
              Biljetter
            </button>
          </li>
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <BText1>03 Maj 2024</BText1>
              <BText2 className="text-gray-100">21:00</BText2>
              <BText2 className="text-gray-100">Mässingshornet</BText2>
              <BText2 className="text-gray-100">Malmö, Sv</BText2>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[23px]  lg:text-[30px] ">
              Biljetter
            </button>
          </li>
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <BText1>17 Maj 2024</BText1>
              <BText2 className="text-gray-100">21:00</BText2>
              <BText2 className="text-gray-100">Grand</BText2>
              <BText2 className="text-gray-100">Malmö, Sv</BText2>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[23px]  lg:text-[30px] ">
              Biljetter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
