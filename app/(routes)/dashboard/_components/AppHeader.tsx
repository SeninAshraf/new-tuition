import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Home, Calendar, Notebook } from 'lucide-react'

const menuOption = [
    {
        id: 1,
        name: 'Home',
        path: '/dashboard',
        icon: <Home className='w-5 h-5' />
    },
    {
        id: 2,
        name: 'Schedule',
        path: '/dashboard/schedule',
        icon: <Calendar className='w-5 h-5' />
    },
    {
        id: 3,
        name: 'Notes',
        path: '/dashboard/notes',
        icon: <Notebook className='w-5 h-5' />
    },
]

function AppHeader() {
  return (
    <>
      {/* Desktop Header */}
      <div className='hidden md:flex items-center justify-between p-4 shadow px-10 lg:px-40'>
          <Link href="/">
              <Image src={'/logo.svg'} alt='logo' width={120} height={60} />
          </Link>
          <div className='flex gap-12 items-center'>
              {menuOption.map((option) => (
                  <Link 
                      href={option.path} 
                      key={option.id}
                      className='hover:font-bold cursor-pointer transition-all hover:text-blue-600'
                  >
                      {option.name}
                  </Link>
              ))}
          </div>
          <UserButton />
      </div>

      {/* Mobile Bottom Navigation */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50'>
          <div className='flex justify-around items-center p-3'>
              {menuOption.map((option) => (
                  <Link 
                      href={option.path} 
                      key={option.id}
                      className='flex flex-col items-center p-2 text-xs'
                  >
                      {option.icon}
                      <span className='mt-1'>{option.name}</span>
                  </Link>
              ))}
              <div className='flex flex-col items-center p-2 text-xs'>
                  <UserButton afterSignOutUrl='/' />
                  <span className='mt-1'>Profile</span>
              </div>
          </div>
      </div>

      {/* Mobile Top Logo Only */}
      <div className='md:hidden flex items-center justify-between p-4 shadow'>
          <Link href="/">
              <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
          </Link>
      </div>
    </>
  )
}

export default AppHeader