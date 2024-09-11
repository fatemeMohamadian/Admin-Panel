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
                colors: ['#d30000'],
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
            data: [1, 2, 3, 1, 2,3, 1, 2, 1, 2, 1, 3],
            label: 'Users',
            
        },
    ],
    margin: { top: 15,bottom:10 },
    height: 85,
    width: 300,
    slotProps: {
        legend: {
            hidden: true,
        },
    },

};
export default function Interactionchartbar2() {
    return (
        <Stack direction="column" sx={{ width: '100%', maxWidth: 400,display:'flex',justifyContent:'center',alignItems:'center' }}>
            <BarChart leftAxis={null} bottomAxis={null} borderRadius={3} {...barChartsParams} tooltip={{ trigger: 'item' }} />
        </Stack>
    );
}

