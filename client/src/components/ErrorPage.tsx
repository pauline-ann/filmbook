import NotFoundIcon from "./icons/NotFoundIcon"

const ErrorPage = () => {

    return (
        <div className='w-screen h-screen items-center'>
            <section className="flex items-center h-full sm:p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <NotFoundIcon />
                    <p className="text-3xl">Sorry, we couldn't find this page.</p>
                    <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-green-400 text-gray-900">Back to homepage</a>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage