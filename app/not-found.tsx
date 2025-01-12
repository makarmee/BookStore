"use client";
import React from "react";
import Heading from "../components/shared/Heading";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const navigateToHomePage = () => {
    router.push("/"); // هدایت به صفحه اصلی
  };

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen">
      <div className="flex h-80">
        <img src="Books.svg" />
        <img src="Books.svg" />
        <img src="Books.svg" />
      </div>
      <h1 className="text-[14rem] leading-tight text-gen">404</h1>
      <Heading className="text-4xl" content="Looks like you've got lost..." />
      <p className="text-2xl text-dis leading-loose">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <button
        onClick={navigateToHomePage}
        className="text-xl font-semibold text-gen"
      >
        Go Home
      </button>
    </div>
  );
}
