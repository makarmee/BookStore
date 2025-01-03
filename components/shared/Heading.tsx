import React from "react";

interface HeadingProps {
  content: string;
}
export default function Heading({ content }: HeadingProps) {
  return <h1 className="text-2xl p-2.5">{content}</h1>;
}
