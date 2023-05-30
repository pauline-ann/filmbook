import CommonHeader from "./CommonHeader"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <div className='w-screen h-screen flex flex-col items-center mt-10 p-10'>
            <CommonHeader />
            <Outlet />
        </div>)
}

export default Layout