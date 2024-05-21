import { BText3 } from "@/components/textComponents/BText3";
import { Rub1 } from "@/components/textComponents/Rub1";

export default function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black ">
      <div className="flex flex-row">
        <BText3 className="mb-4">Loading</BText3>
        <BText3 className="animate-delay-[100ms] animate-bounce  ease-in-out">
          .
        </BText3>
        <BText3 className="animate-delay-[200ms] animate-bounce  ease-in-out">
          .
        </BText3>
        <BText3 className="animate-delay-[300ms] animate-bounce  ease-in-out">
          .
        </BText3>
      </div>
      <Rub1 className="animate-bounce ease-in-out">PARDON</Rub1>
    </div>
  );
}
