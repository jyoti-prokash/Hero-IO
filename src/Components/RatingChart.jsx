import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "5 star", value: 11000 },
    { name: "4 star", value: 6500 },
    { name: "3 star", value: 3000 },
    { name: "2 star", value: 2000 },
    { name: "1 star", value: 1000 },
  ];
  

const RatingChart = () => {
    return (
        <div className='my-10' style={{ width: "100%", height: 300 }}>
        <h3 className='text-xl font-bold' style={{ marginBottom: "10px" }}>Ratings</h3>
  
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical" // 👈 important for horizontal bar
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
  
            <Tooltip />
  
            <Bar
              dataKey="value"
              fill="#ff7a00" // orange color
              barSize={20}
              radius={[0, 10, 10, 0]} // rounded right side
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default RatingChart;