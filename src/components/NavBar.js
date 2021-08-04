import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div flex className="flex justify-center space-x-4 p-4">
            <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-32">
            <Link to="/">Home</Link>
            </button>

            <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-32">
            <Link to="/ruby">Ruby</Link>
            </button>

            <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-32">
            <Link to="/rails">Rails</Link>
            </button>

            <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-32">
            <Link to="/javascript">JavaScript</Link>
            </button>

            <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow text-xl p-4 w-32">
            <Link to="/react">React</Link>
            </button>
        </div>
    )
}

export default NavBar;