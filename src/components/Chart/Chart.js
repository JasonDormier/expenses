import React from 'react'
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)//Math.max wants multiple arguement (1,2,3) by using spread operator (...) we are presenting 12 arguements from the array

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />
            ))}
        </div>
    )

}

export default Chart;