import React from 'react'
import Image from 'next/image';


const Img1 = () => {
    return (
       <Image
             src="/Maritza1.png"
             alt="Check mark"
             width={150}
             height={150}
             className=' w-[150px] h-full rounded-full aspect-square object-cover bg-gray-100'
           />
    );
}

const Img2 = () => {
    return (
       <Image
             src="/Maritza.png"
             alt="Check mark"
             width={325.72}
             height={459.09}
           />
    );
}



export {Img1,Img2};


