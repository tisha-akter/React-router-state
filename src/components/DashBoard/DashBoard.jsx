import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const DashBoard = () => {

    const membershipData = [
        { id: 1, month: 'January', basic: 100, premium: 70, vip: 5 },
        { id: 2, month: 'February', basic: 150, premium: 80, vip: 90 },
        { id: 3, month: 'March', basic: 200, premium: 220, vip: 55 },
        { id: 4, month: 'April', basic: 250, premium: 90, vip: 7 },
        { id: 5, month: 'May', basic: 300, premium: 110, vip: 12 },
        { id: 6, month: 'June', basic: 300, premium: 70, vip: 20 },
        { id: 7, month: 'July', basic: 250, premium: 250, vip: 25 },
        { id: 8, month: 'August', basic: 300, premium: 180, vip: 150 },
        { id: 9, month: 'September', basic: 400, premium: 200, vip: 18 },
        { id: 10, month: 'October', basic: 550, premium: 250, vip: 30 },
        { id: 11, month: 'November', basic: 380, premium: 150, vip: 10 },
        { id: 12, month: 'December', basic: 500, premium: 300, vip: 88 }
    ];


    return (
        <div className='mt-28 mb-5'>
            <LineChart
                width={1000}
                height={300}
                data={membershipData}
            >
                <Line dataKey="basic" stroke="#8884d8"></Line>
                <Line dataKey="premium" stroke="#82ca9d" ></Line>
                <Line dataKey="vip"></Line>
                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default DashBoard;