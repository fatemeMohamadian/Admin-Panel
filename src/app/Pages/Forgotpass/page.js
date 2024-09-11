import React from 'react'
import Picforget from '@/Components/Forgotpage/picforget'
import Infoforgot from '@/Components/Infoforgot/page'
export default function page() {
  return (
    <section className="w-full h-[100vh] flex justify-center items-center flex-wrap">
      <div className="w-full lg:h-full flex justify-center items-center bg-[#0162e84d] text-[#0162e8] lg:w-[60%]">
        <Picforget />
      </div>
      <div className="w-full flex justify-center items-center flex-wrap lg:w-[40%]">
        <Infoforgot />
      </div>
    </section>
  )
}
