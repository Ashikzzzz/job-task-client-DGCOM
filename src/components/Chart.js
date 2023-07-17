import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Chart = () => {

const data=[
    {name: "Shoe", value: 2000},
    {name: "Jacket", value: 3000},
    {name: "Shirt", value: 4000},
    {name: "Pant", value:2000}
]

  return (
    <div>
        {/* chart 1  */}
        <div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          {/* <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
        </PieChart>
      </ResponsiveContainer>
        </div>
        {/* chart 2  */}
        <div></div>
        {/* chart 3  */}
        <div></div>
        {/* chart 4  */}
        <div></div>
    </div>
  )
}

export default Chart