import React, { useEffect, useState } from 'react';
import PriceCard from '../priceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div>
            <h2 className='text-5xl  text-purple-950 text-center bg-purple-300 font-bold  mt-10 p-4'>Awesome Affordable Prices</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    >
                    </PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;