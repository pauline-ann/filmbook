import { Link } from "react-router-dom"

const CommonHeader = () => {

    return (
        <Link to="/">
            <h1 className='text-5xl m-20'>filmbook</h1>
        </Link>
    )
}

export default CommonHeader