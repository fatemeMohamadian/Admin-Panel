import Sidebar from "@/Components/Sidebar/Sidebar";
import Foot from "@/Components/Footer/Foot";
export const metadata = {
    title: "Dashbord-Adminpanel",
    description: "AdminPanel-Exercise-Dashbord- Performanc-Analize!!!",
};
export default function Dashbordlayout({ children }) {
    return (
        <section className="flex flex-wrap justify-center items-center">
            <Sidebar />
            {children}
            <section className='w-[82%] mt-[10px] flex flex-wrap justify-end items-center'>
                <Foot />
            </section>
        </section>

    )
}
