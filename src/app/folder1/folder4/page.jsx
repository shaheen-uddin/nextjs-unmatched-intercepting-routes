
import Link from 'next/link'


export default function Folder4() {
  return (
    <div className='p-20 flex flex-col gap-10'>
        <h1 className='text-2xl'>
            Folder 4
        </h1>
        <Link href="/folder1/folder3" className='text-white bg-orange-400  px-3 py-0.5 rounded-md'>Go to folder 3</Link>
        <Link href="/contacts" className='text-white bg-indigo-400  px-3 py-0.5 rounded-md'>Go to contacts</Link>
    </div>
  )
}

