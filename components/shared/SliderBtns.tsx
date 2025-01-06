export default function SliderBtns({
  prev,
  next,
}: {
  prev: string;
  next: string;
}) {
  return (
    <div className="flex gap-1">
      <button
        className={`${next} disabled:hidden rounded-full w-9 h-9 block bg-bgc drop-shadow absolute right-1 top-1/2 -translate-y-1/2 z-10`}
      >
        <img src="arrow.svg" className="mx-auto" />
      </button>
      <button
        className={`${prev} disabled:hidden rounded-full w-9 h-9 block bg-bgc drop-shadow absolute left-1 top-1/2 -translate-y-1/2 z-10`}
      >
        <img src="arrow.svg" className="mx-auto rotate-180" />
      </button>
    </div>
  );
}
