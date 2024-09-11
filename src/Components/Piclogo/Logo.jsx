import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
    return (
        <Link href='/'><Image width={150} height={100} alt='loginpic' src='/login.png' /></Link>
    )
}
