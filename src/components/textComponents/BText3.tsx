export const BText3 = ({
  children,
  className
}: {
  children: string;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <p
      className={`${className} font-mono text-[11px] text-white sm:text-[14px] md:text-[19px] lg:text-[24px]`}
    >
      {children}
    </p>
  );
};
