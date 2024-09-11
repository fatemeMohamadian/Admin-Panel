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

const BarTab4 = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Net Profit',
                data: [90, 111, 105, 55, 70, 65, 75],
                backgroundColor: 'rgb(70, 128, 255)',
                borderRadius: 5,
            },
            {
                label: 'Revenue',
                data: [55, 80, 57, 45, 38, 48, 43],
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

export default BarTab4;
