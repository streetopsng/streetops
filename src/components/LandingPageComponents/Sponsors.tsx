'use client'

import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook } from 'react-icons/fa'

const sponsors = [FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook]

export default function Sponsors() {
  return (
    <div className="overflow-hidden py-6">
      <div className="flex animate-marquee lg:space-x-64 space-x-16 w-max text-4xl text-wht">
        {[...sponsors, ...sponsors,...sponsors,...sponsors].map((Icon, index) => (
          <Icon key={index} />
        ))}
      </div>
    </div>
  )
}
