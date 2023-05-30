import NotFoundIcon from "./icons/NotFoundIcon"
import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className='w-screen h-screen items-center'>
            <section className="flex items-center h-full sm:p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <NotFoundIcon />
                    <p className="text-3xl">Sorry, an unexpected error occurred.</p>
                    <p>
                        <i>
                            {isRouteErrorResponse(error) ? (
                                error.error?.message || error.statusText
                            ) :
                                'Unknown error'}
                        </i>
                    </p>
                    <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-green-700 text-white">Back to homepage</a>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage