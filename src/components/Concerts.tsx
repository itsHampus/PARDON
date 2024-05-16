export const Concerts = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[80%] flex-col items-start  ">
        <h3 className="pb-4 font-custom text-[36px] text-white sm:text-[46px] md:text-[60px] lg:text-[80px]">
          Konserter
        </h3>
        <ul className="w-full">
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <h4 className="text-[21px] sm:text-[28px] md:text-[36px] lg:text-[46px]">
                02 Maj 2024
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                19:00
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Plan B
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Malmö, Sv
              </h4>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[24px]  lg:text-[31px] ">
              Biljetter
            </button>
          </li>
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <h4 className="text-[21px] text-gray-100 sm:text-[28px] md:text-[36px] lg:text-[46px]">
                03 Maj 2024
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                21:00
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Mässingshornet
              </h4>
              <h4 className="text-[16px] sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Malmö, Sv
              </h4>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[24px]  lg:text-[31px] ">
              Biljetter
            </button>
          </li>
          <li className="flex  flex-row items-center justify-between  pb-5 font-mono text-white lg:pb-10">
            <div className="flex flex-col leading-snug">
              <h4 className="text-[21px] sm:text-[28px] md:text-[36px] lg:text-[46px]">
                17 Maj 2024
              </h4>
              <h4 className="text-gray-10 text-[16px] sm:text-[21px] md:text-[27px] lg:text-[35px]">
                21:00
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Grand
              </h4>
              <h4 className="text-[16px] text-gray-100 sm:text-[21px] md:text-[27px] lg:text-[35px]">
                Malmö, Sv
              </h4>
            </div>
            <button className="rounded-full border-2 border-white p-3 text-[14px] sm:text-[18px] md:text-[24px]  lg:text-[31px] ">
              Biljetter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
