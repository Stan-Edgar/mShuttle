export default function Nav() {
  return (
    <div
      className="
        flex items-center justify-between gap-2
        pl-6 pr-1.5 py-1.5
        rounded-[18px] bg-black/10
        w-188.75 h-16

        max-sm:w-[92%]
        max-sm:h-14
        max-sm:pl-4
        max-sm:pr-1
        max-sm:py-1
        mx-auto
        max-sm:rounded-[14px]
      "
    >
      {/* Logo */}
      <h1
        style={{ fontFamily: 'Times New Roman, serif' }}
        className="text-4xl font-bold max-sm:text-3xl"
      >
        M
      </h1>

      {/* Links (desktop only) */}
      <ul className="flex items-center gap-6 max-sm:hidden">
        <li>Home</li>
        <li>About</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>

      {/* CTA */}
      <div
        className="
          flex items-center justify-center h-full
          px-5 rounded-xl bg-[#379F57]
          text-white font-bold text-lg

          max-sm:px-4
          max-sm:text-sm
        "
      >
        <a href="https://wa.me/5016641777" className="cursor" target="_blank" rel="noopener">Book a shuttle</a>
      </div>
    </div>
  )
}
