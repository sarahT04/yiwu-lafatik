import LogoImg from "@/assets/logo.png";

type LogoType = {
  className?: string;
  height: number;
  width: number;
};

export default function Logo({ className, width, height }: LogoType) {
  return (
    <img
      className={className}
      src={LogoImg}
      width={width}
      height={height}
      alt="Yiwu Lafatik Trade Co., Ltd Logo"
    />
  );
}
