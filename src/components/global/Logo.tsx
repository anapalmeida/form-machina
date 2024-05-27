import Image from 'next/image'
import React from 'react'

interface Props {
 imageUri: string,
 imageAlt: string
}

const Logo = (props: Props) => {
 return(
   <Image src={props.imageUri}
    width={180}
    height={98}
    alt={props.imageUri}
   />
 ) 
}

export default Logo;