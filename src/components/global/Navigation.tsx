import React, { Suspense } from 'react'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import { Skeleton } from '../ui/skeleton'
import Link from 'next/link'

interface Props {}

const Navigation = (props: Props) => {
  return (
   <header className='flex flex-col min-w-full bg-background max-h-screen'>
     <nav className='flex justify-between items-center border-b border-border h-[70px] px-4 py-2'>
       <Link href="/admin">
        <Logo imageUri='https://d1wic68g9bkx5t.cloudfront.net/site/img/midia/Logo_Proesc_Gov.webp' imageAlt='Proesc' />
       </Link>
       <aside className='flex gap-4 items-center'>
        <ThemeSwitcher />
        <Suspense fallback={<Skeleton className="flex rounded-full w-12 h-12"/>}>
         <UserButton afterSignOutUrl='/sign-in' />
        </Suspense>
       </aside>
     </nav>
   </header>

  )
}

export default Navigation
