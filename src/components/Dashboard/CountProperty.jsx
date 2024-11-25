import React from 'react';

const CountProperty = ({sold,rented,avaliable,underConstruction}) => {
    return (
        <div className='my-[50px] flex flex-wrap gap-6 '>
            <div class="w-full md:w-[326px] p-4">
                <div class="bg-orange-50 rounded-2xl py-6 px-4">
                    <h2 class="text-orange-500 text-5xl lg:text-6xl font-bold font-heading text-center mb-4">{rented}</h2>
                    <p class="font-medium text-center">Rented Property</p>
                </div>
            </div>
            <div class="w-full md:w-[326px] p-4">
                <div class="bg-[#e8faee] rounded-2xl py-6 px-4">
                    <h2 class="text-[#0B8632] text-5xl lg:text-6xl font-bold font-heading text-center mb-4">{sold}</h2>
                    <p class="font-medium text-center">Sold Property</p>
                </div>
            </div>
            <div class="w-full md:w-[326px] p-4">
                <div class="bg-[#f4e5f9] rounded-2xl py-6 px-4">
                    <h2 class="text-[#c234fb] text-5xl lg:text-6xl font-bold font-heading text-center mb-4">{avaliable}</h2>
                    <p class="font-medium text-center">Avaliable Property</p>
                </div>
            </div>
            <div class="w-full md:w-[326px] p-4">
                <div class="bg-orange-50 rounded-2xl py-6 px-4">
                    <h2 class="text-orange-500 text-5xl lg:text-6xl font-bold font-heading text-center mb-4">{underConstruction}</h2>
                    <p class="font-medium text-center">Under Construction Property</p>
                </div>
            </div>
        </div>
    );
};

export default CountProperty;