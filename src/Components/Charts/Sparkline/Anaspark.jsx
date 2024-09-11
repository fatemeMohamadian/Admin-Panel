"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const settings = {
    valueFormatter: (v) => `${v}%`,
    height: 90,
    showTooltip: true,
    showHighlight: true,
};

const smallValues = [1, 1, 60, 1, 1, 50, 1, 1, 40, 25];
export default function CustomYAxisAna() {
    return (
        <Stack sx={{ width: '100%' }}>
            <Stack sx={{ width: '100%', mb: 2 }} direction="row" spacing={2}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={smallValues} colors={['blue']} {...settings} />
                </Box>
            </Stack>
        </Stack>
    );
}
