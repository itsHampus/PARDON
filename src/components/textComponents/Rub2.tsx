import { ReactNode } from "react";

export const Rub2 = ({
  children,
  className
}: {
  children?: ReactNode;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <h2
      className={`${className} font-custom text-[22px] text-white sm:text-[28px] md:text-[37px] lg:text-[48px]`}
    >
      {children}
    </h2>
  );
};
