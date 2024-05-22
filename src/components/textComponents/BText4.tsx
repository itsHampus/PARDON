export const BText4 = ({
  children,
  className
}: {
  children: string;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <p
      className={`${className} font-mono text-[7px] text-white sm:text-[9px] md:text-[12px] lg:text-[15px]`}
    >
      {children}
    </p>
  );
};
