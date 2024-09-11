import Piclogin from "@/Components/Loginpage/Piclogin"
import Infologin from "@/Components/Login/Infologin"
export default function Home() {
  return (
    <section className="w-full lg:h-[100vh] flex justify-center items-start flex-wrap border">
        <div className="w-full lg:h-full flex justify-center items-center bg-[#0162e84d] text-[#0162e8] lg:w-[59%]">
         <Piclogin/>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap lg:w-[41%]">
           <Infologin/>
        </div>
    </section>
  )
}
