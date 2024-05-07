import Link from 'next/link'
import React from 'react'
import { UnderlineButton } from './button'

export default function Nav() {
  return (
    <nav className='w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-1 fixed top-0 border-b-[1px] max-h-[4.5rem] bg-white z-50'>

      <Link href='/'><span className='uppercase'>Rashika polypack</span></Link>

      <ul className='flex list-none gap-4'>
        <li>Team</li>
        <li>Know more</li>
        <li>Contact</li>
      </ul>

      <div>
        <UnderlineButton text='Shop Products'></UnderlineButton>
      </div>

    </nav>
  )
}
