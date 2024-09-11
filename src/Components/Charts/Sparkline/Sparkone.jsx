"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const settings = {
    valueFormatter: (v) => `${v}%`,
    height: 65,
    showTooltip: true,
    showHighlight: true,
};

const smallValues = [5, 25, 3, 10, 4, 50,0];
export default function CustomYAxis() {
    return (
        <Stack sx={{ width: '100%' }}>
            <Stack sx={{ width: '100%', mb: 2 }} direction="row" spacing={2}>
                <Box  sx={{ flexGrow: 1 }}>
                    <SparkLineChart curve="natural"  data={smallValues} colors={['blue']} {...settings} />
                </Box>
            </Stack>
        </Stack>
    );
}
