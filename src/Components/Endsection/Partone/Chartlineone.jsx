"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const settings = {
    valueFormatter: (v) => `${v}%`,
    height: 150,
    showTooltip: true,
    showHighlight: true,
};

const largeValues = [100, 140, 100, 250, 115, 125, 90, 100, 140, 100, 230, 115, 215, 90, 190, 100];
export default function CustomYAxisPartone() {
    return (
        <Stack sx={{ width: '100%' }}>
            <Stack sx={{ width: '100%', mb: 2 }} direction="row" spacing={2}>
                <Box sx={{ flexGrow: 1 }}>
                    <SparkLineChart data={largeValues} colors={['blue']} {...settings} />
                </Box>
            </Stack>
        </Stack>
    );
}

