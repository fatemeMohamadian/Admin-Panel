
import React from 'react'
import Piclogin from '@/Components/Loginpage/Piclogin'
import Inforegister from '@/Components/Inforegister/Inforeg'
export default function Register() {
    return (
        <section className="w-full overflow-hidden lg:h-[125vh] flex justify-center items-start flex-wrap">
            <div className="w-full lg:h-full flex justify-center items-center bg-[#0162e84d] text-[#0162e8] lg:w-[59%]">
                <Piclogin />
            </div>
            <div className="w-full flex justify-center items-center flex-wrap lg:w-[41%]">
                <Inforegister/>
            </div>
        </section>
    )
}
