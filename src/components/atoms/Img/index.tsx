import React from 'react'
import Image from 'next/image';


const Img1 = ({src}: {src: string}) => {
    return (
       <Image
             src="/Icons.png"
             alt="Check mark"
             width={150}
             height={150}
           />
    );
}

export {Img1};


