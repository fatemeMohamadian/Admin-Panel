"use client"
import * as React from 'react';
import { PieChart, pieArcLabelClasses} from '@mui/x-charts/PieChart';
import { valueFormatter, downloadsweb } from './Piechart';

export default function PieArcLabel() {
    const palette = ['rgb(70, 128, 255)', 'rgb(163, 192, 255)', 'rgb(190, 200, 208)', 'rgb(91, 107, 121)', 'rgb(62, 72, 83)', 'rgb(19, 25, 32)'];
    return (
        <PieChart
            colors={palette}
            slotProps={{
                legend: { hidden: true },
            }}
            series={[
                {
                    arcLabel: (item) => `${item.value}.0%`,
                    // arcLabelMinAngle: 35,
                    arcLabelRadius: '75%',
                    ...data,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fontFamily: 'loginform3',
                    fill: 'rgb(255, 255, 255)'
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // border: '1px solid orange',
                transform:'translateX(45px)'
            }}
            {...size}
        />
    );
}

const size = {
    width: 400,
    height: 350,
};

const data = {
    data: downloadsweb,
    valueFormatter,
};
