import React  from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {name:'Assignment 1',value:'57'},
    {name:'Assignment 2',value:'59'},
    {name:'Assignment 3',value:'60'},
    {name:'Assignment 4',value:'60'},
    {name:'Assignment 5',value:'42'},
    {name:'Assignment 6',value:'59'},
    {name:'Assignment 7',value:'60'},
    {name:'Assignment 8',value:'60'}
]
const Statistics = () => {
    return (
     
    <div className='mt-4 width:100%'>
        <h1 className='text-center my-3'> Rechart of my Assignment Mark</h1>
         <AreaChart
     width={300}
     height={400}
     data={data}
     margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>

      <CartesianGrid strokeDasharray="1 1" />      
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Area  type="monotone" dataKey="value" stroke="#8884d8" fill=" #6ce4ff"/>
     </AreaChart>  
    </div>
    );
};

export default Statistics;