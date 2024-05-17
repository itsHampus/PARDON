export const BText1 = ({
  children,
  className
}: {
  children: string;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <p
      className={`${className} font-mono text-[18px] text-white sm:text-[24px] md:text-[31px] lg:text-[40px]`}
    >
      {children}
    </p>
  );
};
