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

const BarTab = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Net Profit',
                data: [76, 85, 101, 98, 87, 105, 91],
                backgroundColor: 'rgb(70, 128, 255)',
                borderRadius: 5,
            },
            {
                label: 'Revenue',
                data: [44, 55, 57, 56, 61, 58, 63],
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

export default BarTab;
