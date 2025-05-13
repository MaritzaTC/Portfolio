import React from 'react'

const TextTitle = ({text}: {text: string}) => {
    return (
        <h1 className='text-[48px] font-bold'>
           {text}
        </h1>
    );
};

const TextTitle2 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[48px] font-bold text-yellow-500 ' >
           {text}
        </h1>
    );
};

const SubTitle = ({text}: {text: string}) => {
    return (
        <h2 className='text-[32px] font-medium text-center' >
           {text}
        </h2>
    );
};

const SubTitle2 = ({text}: {text: string}) => {
    return (
        <h2 className='text-[18px] font-medium ' >
           {text}
        </h2>
    );
};

const SubTitle3 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[18px] font-medium text-yellow-500 ' >
           {text}
        </h1>
    );
};
const SubTitle4 = ({text}: {text: string}) => {
    return (
        <h2 className='text-[18px] font ' >
           {text}
        </h2>
    );
};
const TextRegular = ({text}: {text: string}) => {
    return (
        <h1 className='text-[16px] font-normal text-[#767676]' >
           {text}
        </h1>
    );
};

const TextRegular2 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[15px] font-normal  text-[#767676]' >
           {text}
        </h1>
    );
}

const TextRegular3 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[15px] font-normal justify-center items-center' >
           {text}
        </h1>
    );
}
const TextRegular4 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[15px] font-normal  text-[#2B2B2B]' >
           {text}
        </h1>
    );
}

const TextRegular5 = ({text}: {text: string}) => {
    return (
        <h1 className='text-[10px] font-normal  text-[#FFFFFF] bg-yellow-500 w-[111px] h-[18px] text-center' >
           {text}
        </h1>
    );
}
export {TextTitle, SubTitle, TextTitle2, SubTitle2, SubTitle3,SubTitle4,TextRegular,TextRegular2,TextRegular3,TextRegular4,TextRegular5};