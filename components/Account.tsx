import React from "react";
import Heading from "./shared/Heading";
import Button from "./shared/Button";

export default function Account() {
  return (
    <section className="mt-20 sm:px-8 max-sm:px-6 text-center block sm:hidden">
      <Heading content="Сreate an account and get a 15% discount" />
      <p className="text-dis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque
        voluptatum expedita dolores cupiditate provident, est commodi,
        voluptates laborum sint harum molestias quidem cumque illum doloribus
        quasi. Alias, iusto magnam.
      </p>
      <Button name="Get Now!" className="mx-auto my-5" />
      <div className="w-full max-h-fit mb-[-12%] pb-1 scale-110">
        <img src="library.svg" className="w-full" />
      </div>
    </section>
  );
}
