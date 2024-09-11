import React from 'react'
import Onepartsec from './Partone/Onepartsec'
import Twopartsec from './Parttwo/Twopartsec'
import Threesec from './Partthree/Threesec'
export default function Endsec() {
    return (
        <div className='w-full flex flex-wrap justify-between items-start'>
            <Onepartsec />
            <Twopartsec />
            <Threesec />
        </div>
    )
}
