"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const BarTab2 = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Net Profit',
                data: [80, 101, 90, 65, 115, 105, 85],
                backgroundColor: 'rgb(70, 128, 255)',
                borderRadius: 5,
            },
            {
                label: 'Revenue',
                data: [45, 30, 57, 45, 78, 48, 63],
                backgroundColor: 'rgba(70, 128, 255, 0.5)',
                borderRadius: 5
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false, // خطوط فقط روی محور X باشند
                    borderColor: 'textStrokeWidth',
                    drawTicks: false,
                },
                border: {
                    display: false
                },

            },
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                },
                border: {
                    display: false
                },
                beginAtZero: true,
            },
           
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarTab2;
