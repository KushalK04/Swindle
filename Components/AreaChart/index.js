import { useEffect, useState } from 'react';
import styles from './AreaChart.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function AreaChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'British Columbia'
                }
            },
            responsive: true,
        })

        setChartData({
            labels: [2017, 2018, 2019, 2020, 2021],
            datasets: [
                {
                    fill: true,
                    label: 'Number of Cybercrime Incidents',
                    data: [5603, 7224, 10006, 14768, 15581],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(240,101,67, 0.7)'

                }

            ]
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Line data={chartData} options={chartOptions}/>
            </div>
        </>
    )

};
