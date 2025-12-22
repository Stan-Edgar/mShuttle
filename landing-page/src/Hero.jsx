export default function Hero() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        flex flex-col items-center text-center
        gap-2

        max-sm:px-4
        max-sm:gap-1.5
      "
    >
      <h1
        className="
          font-bold tracking-tight leading-[120%]
          text-[3.375rem]

          max-sm:text-[1.75rem]
          max-sm:leading-[115%]
        "
      >
        Explore Belize With Safe, Reliable <br />
        Shuttle Services
      </h1>

      <p
        className="
          text-[#636363]
          text-base

          max-sm:text-sm
          max-sm:leading-relaxed
        "
      >
        Professional local drivers with on-time pickups
        <br />
        and straightforward booking across Belize.
      </p>

      <div
        className="
          flex items-center justify-center
          h-13 px-5 mt-6
          rounded-xl
          bg-[#379F57]
          text-white font-bold text-lg

          max-sm:h-11
          max-sm:px-4
          max-sm:text-base
          max-sm:mt-4
        "
      >
        Book a shuttle
      </div>
    </div>
  );
}