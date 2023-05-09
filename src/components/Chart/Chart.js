import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  // let barFillHeight = '0%';

  // if (props.max > 0){
  //   barFillHeight =  Math.round((props.value / props.maxValue) * 100) + "%";
  // }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}  
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
