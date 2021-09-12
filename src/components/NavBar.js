import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div flex className="flex justify-center space-x-4 p-4 sm:flex-row md: flex-col justify-center gap-2">
            
            <Link to="/">
                <button 
                className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline mx-4 sm:mx-0"
                data-cy="home-button">
                {/* Button label */}
                &#60; Home / &#62;
                </button>
            </Link>

            <Link to="/ruby">
                <button 
                className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
                data-cy="ruby-button">
                {/* Button label */}    
                &#60; Ruby / &#62;
                </button>
            </Link>

            <Link to="/rails">
                <button 
                className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
                data-cy="rails-button">
                {/* Button label */}
                &#60; Rails / &#62;
                </button>
            </Link>

            <Link to="/javascript">
                <button 
                className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
                data-cy="javascript-button">
                {/* Button label */}    
                &#60; JavaScript / &#62;
                </button>
            </Link>

            <Link to="/react">
                <button 
                className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-48 hover:underline"
                data-cy="react-button">
                {/* Button label */}
                &#60; React / &#62;
                </button>
            </Link>
            
        </div>
    )
}

export default NavBar;