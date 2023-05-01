import { useEffect, useState } from 'react';
import styles from './BarChart3.module.css';
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
                    text: 'Amount Lost to Fraud So Far This Year'
                },
            },
        })

        setChartData({
            labels: ['Lost to Fraud'],
            datasets: [
                {
                    label: 'In 2022',
                    data: [531000000],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'As of March 31 2023',
                    data: [133700000],
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