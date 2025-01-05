import React from "react";

interface HeadingProps {
  content: string;
  className?: string;
}
export default function Heading({ content, className }: HeadingProps) {
  return (
    <h1
      className={
        !className
          ? "text-2xl max-sm:text-xl max-sm:my-2 m-0 max-sm:px-0 p-2.5"
          : className
      }
    >
      {content}
    </h1>
  );
}
