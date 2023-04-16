import { useState, useEffect } from "react";
import styles from './BarChart.module.css'

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Scams", "Non-Payment/Non-Delivery", "Personal Data Breach", "Identity Theft", "Extortion", "Romance Fraud", "Tech Support", "Investment"],
            datasets: [
                {
                    label: '# of Victims',
                    data: [323972, 82478, 51829, 51,629, 39360, 24299, 23903, 20561],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(240,101,67, 0.7)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: "Most Common Type of Cyber Scams",
                    color: "#fff"
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    ticks: {
                        color: "#fff"
                    }
                },
                x: {
                    ticks: {
                        color: "#fff"
                    }
                }
            }
        })
    }, [])
    
    
    return(
        <>
           <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
           </div>
        </>
    )
}