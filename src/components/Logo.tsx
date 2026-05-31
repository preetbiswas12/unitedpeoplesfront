import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "light" | "dark";
}

export default function Logo({
  variant = "light",
  className = "w-full h-full",
  alt = "United People's Front logo",
  ...props
}: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={className}
      data-variant={variant}
      {...props}
    />
  );
}
