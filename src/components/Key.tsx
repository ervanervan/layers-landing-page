import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div className={twMerge("", className)} {...otherProps}>
      {children}
    </div>
  );
}
