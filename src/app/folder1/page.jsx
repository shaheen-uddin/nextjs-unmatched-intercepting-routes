import Link from 'next/link'
import React from 'react'

export default function Folder1() {
  return (
    <div className='p-20 flex flex-col gap-10'>
        <h1 className='text-2xl'>
            Folder 1
        </h1>
        <Link href="/folder1/folder2" className='text-white bg-orange-400  px-3 py-0.5 rounded-md'>Go to folder 2</Link>
    </div>
  )
}
