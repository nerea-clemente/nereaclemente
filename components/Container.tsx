import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
};

const sizes = {
  default: "max-w-page",
  narrow: "max-w-4xl",
  wide: "max-w-[1600px]",
};

export function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-6 md:px-10 lg:px-16 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
