"use client"
import * as React from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { LineChart } from '@mui/x-charts/LineChart';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
const otherSetting = {
    height: 300,
    legend: {
        hidden: true,
    },
    shadowLines:true,
    grid: { horizontal: true },
    sx: {
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 1 },
    },
};

const dataset = [
    {
        // london: 59,
        // paris: 57,
        // newYork: 86,
        page: 30,
        month: 'January',
    },
    {
        // london: 50,
        // paris: 52,
        // newYork: 78,
        page: 60,
        month: 'February',
    },
    {
        // london: 47,
        // paris: 53,
        // newYork: 106,
        page: 40,
        month: 'March',
    },
    {
        // london: 54,
        // paris: 56,
        // newYork: 92,
        page: 70,
        month: 'April',
    },
    {
        // london: 57,
        // paris: 69,
        // newYork: 92,
        page: 50,
        month: 'May',
    },
    {
        // london: 60,
        // paris: 63,
        // newYork: 103,
        page: 90,
        month: 'June',
    },
    {
        // london: 59,
        // paris: 60,
        // newYork: 105,
        page: 50,
        month: 'July',
    },
    {
        // london: 65,
        // paris: 60,
        // newYork: 106,
       page: 55,
        month: 'August',
    },
    {
        // london: 51,
        // paris: 51,
        // newYork: 95,
        page: 45,
        month: 'September',
    },
    {
        // london: 60,
        // paris: 65,
        // newYork: 97,
        page: 60,
        month: 'October',
    },
    {
        // london: 67,
        // paris: 64,
        // newYork: 76,
        page: 50,
        month: 'November',
    },
    {
        // london: 61,
        // paris: 70,
        // newYork: 83,
        page: 65,
        month: 'December',
    },
];

const valueFormatter = (value) => `${value}`;
export default function FormatterDemoNoSnap() {
    return (
        <LineChart
        bottomAxis={{
            disableTicks:true,
            tickLabelStyle:{
                textAnchor:'start',
                transform:'translateY(10px)',
                // color:'rgb(29,38,48)',
                fontFamily:'text1',
                fill:'#acacac',
            }
        }}
            dataset={dataset}
            xAxis={[
                {
                    scaleType: 'band',
                    dataKey: 'month',
                    valueFormatter: (month, context) =>
                        context.location === 'tick'
                            ? `${month.slice(0, 3)}`
                            : `${month} 2023`,
                            disableLine:true,
                },
            ]}
            yAxis={[{
                disableLine:true,
                disableTicks:true,
                tickLabelStyle:{
                    fontFamily:'text1',
                    fill:'#acacac',
                }
            }]}
            series={[{ dataKey: 'page', showMark: true, label: 'Page Views', color:'#0f65d6', valueFormatter }]}
            {...otherSetting}
        />
    );
}

