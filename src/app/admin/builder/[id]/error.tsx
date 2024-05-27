"use client";

import Error from 'next/error';
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { BiSolidError } from "react-icons/bi";


const ErrorPage = ({error}: {error: Error}) => {
 const { userId } = useAuth();

 useEffect(() => {
 console.log(error)
}, [error])

 return (
  <div className='flex w-full h-full flex-col items-center justify-center gap-10'>
  <div className="flex flex-col items-center">
   <BiSolidError className='w-20 h-20 text-red-600'/>
   <h2 className='text-3xl font-medium font-bold text-muted-foreground'>Something went wrong</h2>
  </div>

   <Button asChild>
    {userId ? 
     <Link href="/admin">Go back</Link> : 
     <Link href="/">Go back home</Link>
    }   
   </Button>
  </div>
 )
}

export default ErrorPage