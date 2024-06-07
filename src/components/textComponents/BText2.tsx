import { ReactNode } from "react";

export const BText2 = ({
  children,
  className
}: {
  children?: ReactNode;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <p
      className={`${className} font-mono text-[14px] text-white sm:text-[18px] md:text-[23px] lg:text-[30px]`}
    >
      {children}
    </p>
  );
};
