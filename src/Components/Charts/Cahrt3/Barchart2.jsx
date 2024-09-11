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
                colors: ['rgb(3, 104, 68)'],
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
            data: [4, 6, 3, 1, 8, 2, 5, 3.5, 4, 7, 4, 5],
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
export default function Interactionchart2() {
    return (
        <Stack direction="column" sx={{ width: '100%', maxWidth: 400 }}>
            <BarChart leftAxis={null} bottomAxis={null} borderRadius={5} {...barChartsParams} tooltip={{ trigger: 'item' }} />
        </Stack>
    );
}

