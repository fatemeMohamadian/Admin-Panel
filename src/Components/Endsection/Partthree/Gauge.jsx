"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function GaugeValueRangeNoSnap() {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
            <Gauge
                sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: 20,
                        fontFamily:'loginform',
                    },
                }
            }
                width={100}
                height={100}
                startAngle={0}
                endAngle={360}
                innerRadius="85%"
                outerRadius="100%"
                value={30} />
        </Stack>
    );
}
