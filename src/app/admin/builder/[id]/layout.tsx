import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
 return (
  <main className='flex-grow flex mx-auto w-full h-screen'>
   {children}
  </main>
 )
}

export default layout