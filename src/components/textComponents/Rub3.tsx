export const Rub3 = ({
  children,
  className,
  onClick
}: {
  onClick?: () => void;
  children: string;
  className?: HTMLHeadingElement["className"];
}) => {
  return (
    <h2
      onClick={onClick}
      className={`${className} cursor-pointer font-custom text-[14px] text-white sm:text-[18px] md:text-[23px] lg:text-[30px]`}
    >
      {children}
    </h2>
  );
};
