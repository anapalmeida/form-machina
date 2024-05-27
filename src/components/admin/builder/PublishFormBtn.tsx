import React from 'react'
import { Button } from '../../ui/button'
import { MdOutlinePublish } from 'react-icons/md'

const PublishFormBtn = () => {
  return (
    <Button variant={("outline")} className='gap-2 text-white bg-gradient-to-r from-lime-300 to-lime-500'>
      <MdOutlinePublish className='h-6 w-6'/>
      Publish
    </Button>
  )
}


export default PublishFormBtn
