import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
    return(
        <>
            <Navbar />
           <div className="my-4 mx-6 md:my-6 md:mx-16">
           <Outlet />
           </div>
        </>
    )
}