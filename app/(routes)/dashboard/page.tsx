import React from 'react'
import { BoxRevealDemo } from './_components/BoxRevealDemo'
import { BentoDemo } from './_components/BentoDemo'
import { BentoGrid } from '@/components/ui/bento-grid'

function Dashboard() {
  return (
    <div className='flex flex-col items-center w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-10'>
      {/* BoxReveal with centered content */}
      <div className='w-full max-w-4xl mb-8 md:mb-12 lg:mb-16 flex justify-center'>
        <BoxRevealDemo />
      </div>

      {/* BentoGrid with centered content */}
      <div className='w-full max-w-6xl'>
        <div className='flex justify-center w-full'>
          <BentoGrid className='w-full flex justify-center'>
            <BentoDemo />
          </BentoGrid>
        </div>
      </div>
    </div>
  )
}

export default Dashboard