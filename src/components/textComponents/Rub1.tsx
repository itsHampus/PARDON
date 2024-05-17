export const Rub1 = ({
  children,
  className
}: {
  children: string;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <h1
      className={`${className} font-custom text-[35px] text-white sm:text-[45px] md:text-[59px] lg:text-[77px]`}
    >
      {children}
    </h1>
  );
};
