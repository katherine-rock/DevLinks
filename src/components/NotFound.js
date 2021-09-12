import { Link } from "react-router-dom";

const NotFound = () => { 
    return (
    <div flex className="items-center flex flex-col justify-center space-x-4 p-4 justify-center gap-2">

        <p className="text-xl flex inline justify-center p-6 w-screen text-2xl">
            This is not the page you're looking for
        </p>

        <Link to="/">
            <button
            className="inline border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline mx-4 sm:mx-0"
            data-cy="home-button">
                Move along
            </button>
        </Link>
    </div>
    )
}

export default NotFound;