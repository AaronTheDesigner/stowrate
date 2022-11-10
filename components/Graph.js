import React, {useState, useEffect, useReducer} from 'react'
import { Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Chart } from 'react-chartjs-2'
import { useRouter } from 'next/navigation'

Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const userData = [
 
{id: 1, stow: 87},

{id: 2, stow: 45},

{id: 3, stow: 30},

{id: 4, stow: 22},

{id: 5, stow: 18},

{id: 6, stow: 15},

{id: 7, stow: 12}
]
console.log("how do i get this to happen properly")

function Graph(props) {
  const router = useRouter()

  const {stowData, minute, half, hour} = props;

  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [chartOptions, setChartOptions] = useState({})

  const updateChart = () => {
    const string = Line;
    console.log(string)
  }

  useEffect(() => {
    setChartData({
      labels: stowData.map(data => data.id),
      datasets: [
        {
          label: "who",
          data: stowData.map(data => data.stow),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(0,0,0)",
        }
      ]
    })

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "stow stuff"
        }
      }
    })
  }, [stowData])


  return (
    <div>
      <button onClick={forceUpdate}>Update</button>
      <Line options={chartOptions} data={chartData} />
    </div>
    
  )
}

// const labels = userData.map((data) => data.id.toString())

// const Graph = (props) => {

//   console.log(labels)

//   return (
//     <div>
//       graph 
//     </div>
//   )
  
// }


// const Graph = (props) => {

//   const { stowData, minute, half, hour } = props;

//   const [chartData, setChartData] = useState({
//     labels: userData.map((data) => {data.id}),
//     datasets: [{
//       label: "Stow Rate",
//       data: userData.map((data) => {data.stow})
//   }]
//   })

//   useEffect(() => {
//     if(half === 0 && hour === 0) {
//         console.log("starting app")
//     } else {
//       const chart = {
//         labels: stowData.map((data) => {data.id}),
//         datasets: [{
//           label: "Stow Rate",
//           data: stowData.map((data) => {data.stow})
//       }]
//       }
//       console.log(stowData)
//     }    

    

//   }, [half, hour])

// const dataset = {
//   labels: userData.map((data) => {data.id}),
//   datasets: [{
//     label: "Stow Rate",
//     data: userData.map((data) => {data.stow})
// }]
// }

//   return (
//     <div style={{width: "20rem"}}>
//         Graph <br />
//         <Line data={dataset} />
//     </div>
//   )
// }

export default Graph