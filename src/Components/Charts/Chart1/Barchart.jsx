"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';

const barChartsParams = {
    xAxis: [
        {
            id: 'barCategories',
            data: ['Users1', 'Users2', 'Users8', 'Users6', 'Users5', 'Users4', 'Users7', 'Users3', 'Users9', 'User', 'users', 'user'],
            scaleType: 'band',
            disableLine: 'true',
            colorMap: {
                type: 'piecewise',
                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                colors: ['orangered'],
            },
        },
    ],
    yAxis: [
        {
            disableLine: 'true',
        }
    ],
    series: [
        {
            id: '1',
            data: [2, 5, 3, 4, 8, 4, 3, 2, 4, 6, 3, 5],
            label: 'Users',
        },
    ],
    margin: { top: 10 },
    height: 135,
    width: 235,
    slotProps: {
        legend: {
            hidden: true,
        },
    },

};
export default function Interaction() {
    return (
        <Stack direction="column" sx={{ width: '100%', maxWidth: 400 }}>
            <BarChart leftAxis={null} bottomAxis={null} borderRadius={5} {...barChartsParams} tooltip={{ trigger: 'item' }} />
        </Stack>
    );
}

