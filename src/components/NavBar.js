import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div flex className="flex justify-center space-x-4 p-4 sm:flex-row md: flex-col justify-center gap-2">
            <button 
            className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline mx-4 sm:mx-0"
            data-cy="home-button">
            <Link to="/">&#60; Home / &#62;</Link>
            </button>

            <button 
            className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
            data-cy="ruby-button">
            <Link to="/ruby">&#60; Ruby / &#62;</Link>
            </button>

            <button 
            className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
            data-cy="rails-button">
            <Link to="/rails">&#60; Rails / &#62;</Link>
            </button>

            <button 
            className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
            data-cy="javascript-button">
            <Link to="/javascript">&#60; JavaScript / &#62;</Link>
            </button>

            <button 
            className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
            data-cy="react-button">
            <Link to="/react">&#60; React / &#62;</Link>
            </button>
        </div>
    )
}

export default NavBar;