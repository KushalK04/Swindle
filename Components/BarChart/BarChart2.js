import { useEffect, useState } from 'react';
import styles from './BarChart2.module.css';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartOptions({
            indexAxis: 'y',
            elements: {
                bar: {
                    borderwidth: 5,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                
                },
                title: {
                    display: true,
                    text: 'Impact of Fraud So Far This Year',
                    color: 'white'
                },
            },
        })

        setChartData({
            labels: ['Reports of Fraud', 'Victims of Fraud'],
            datasets: [
                {
                    label: 'In 2022',
                    color: 'white',
                    data: [92078, 57578],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'As of March 31 2023',
                    data: [18645, 12094],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(240,101,67, 0.7)',  
                }
            ]
        })
    }, []) 

    return (
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}