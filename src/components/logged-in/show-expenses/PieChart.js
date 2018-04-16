import React from 'react'
import { RadialChart } from 'react-vis';

const PieChart = ({ data, label }) => (
  <div>
    <span>
      {label}
    </span>
    <RadialChart
      data={data}
      width={300}
      height={300} 
      showLabels={true}/>
  </div>
);

export default PieChart