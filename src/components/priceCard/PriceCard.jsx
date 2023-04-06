import React from 'react';
import Feature from '../feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-10 rounded-md p-5 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-500 text-5xl font-extrabold'>
                    {price.price}
                </span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='underline font-bold text-white'>Features:</p>
            <div className='mb-6'>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='w-full mt-auto  bg-purple-500 hover:bg-purple-900 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;