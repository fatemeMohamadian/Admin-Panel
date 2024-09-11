export const downloadsweb = [
    {
        label: 'Components',
        value: 40.0,
    },
    {
        label: 'Widgets',
        value: 20.0,
    },
    {
        label: 'Pages',
        value: 10.0,
    },
    {
        label: 'Forms',
        value: 15.0,
    },
    {
        label: 'Other',
        value: 5.0,
    },
    {
        label: 'App',
        value: 10.0,
    },
];

export const platforms = [
    {
        label: 'downloadsweb',
        value: 40.88,
    },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const downloads = [
    ...downloadsweb.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (downloadsweb)' : v.label,
        value: normalize(v.value, platforms[0].value),
    })),
];

export const valueFormatter = (item = value) => `${item.value}`;
