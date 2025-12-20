export default function Nav() {
  return (
      <div className="flex items-center justify-between gap-2 pl-6 pr-1.5 py-1.5 rounded-[18px] bg-black/10 w-[755px] h-16">
        
        {/* Logo */}
        <h1 style={{ fontFamily: 'Times New Roman, serif' }} className="text-4xl font-bold">M</h1>

        {/* Links */}
        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>

        {/* CTA */}
        <div className="flex items-center justify-center h-full px-5 rounded-xl bg-[#379F57] text-white font-bold text-lg">
          Book a shuttle
        </div>

      </div>
  )
}

