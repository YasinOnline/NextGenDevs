import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-sky-800 text-normal text-white text-center fixed inset-x-0 bottom-0 p-3 '>
      <div>
        <Link href="https://www.piaic.org/" target='_blank'>PIAIC Batch 52</Link>
      </div>
    </footer>
  )
}

export default Footer