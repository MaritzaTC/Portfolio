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
        <h2 className='text-[18px] font-bold ' >
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

export {TextTitle, SubTitle, TextTitle2, SubTitle2, SubTitle3,SubTitle4,TextRegular,TextRegular2};