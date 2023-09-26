'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ children, href, prefetch }) => {
    const pathname = usePathname()
   if(href === pathname){
    return (
  
        <span  prefetch={prefetch} className=' text-orange-800 '>
        {children}
        </span>
    
  )
   }
  return (
  
        <Link href={href} prefetch={prefetch} className=' text-orange-800 hover:underline'>
        {children}
        </Link>
    
  )
}

export default NavLink