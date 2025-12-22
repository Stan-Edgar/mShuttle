import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-[#379F57] text-white items-center justify-between px-25 h-52'>
        <p>Copyright © 2025 Magaña Shuttles & Tours</p>
        <div className='flex flex-col items-start gap-2'>
            <p className='font-medium text-2xl'>Contact:</p>
            <ul className='list-disc'>
                <li>jmaganabz@gmail.com</li>
                <li>501+ 664-1777</li>
                <li>501+ 650-9087</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer