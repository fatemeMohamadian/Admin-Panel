"use client"
// components/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ثبت پلاگین‌های مورد نیاز
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    // داده‌های نمونه برای نمودار Doughnut
    const data = {
        labels: ['Total income:', 'Total rent:', 'Download:', 'Views:'],
        datasets: [
            {
                data: [31, 26, 23, 20],
                backgroundColor: [
                    'rgb(70, 128, 255)',
                    'rgb(229, 138, 0)',
                    'rgb(44, 168, 127)',
                    'rgb(200, 217, 255)',
                   
                ],
                borderColor: [
                    'rgb(70, 128, 255)',
                    'rgb(229, 138, 0)',
                    'rgb(44, 168, 127)',
                    'rgb(200, 217, 255)',
                    
                ],
                borderWidth: 1,
                hoverOffset: 4,
                spacing: 7,
                borderRadius:8
            },
        ],
    };

    // تنظیمات نمودار
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            cutout: '50%',
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
