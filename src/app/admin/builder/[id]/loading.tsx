import React, { ReactNode } from 'react'
import { ImSpinner2 } from 'react-icons/im'

const Loading = () => {
 return (
  <div className='flex items-center justify-center w-full h-full'>
   <ImSpinner2 className='animate-spin text-primary h-12 w-12'/>
  </div>
 )
}

export default Loading