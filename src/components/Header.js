import DevLinks_header_image from '../images/DevLinks_header_image.png'
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return (
      
      <div className="w-screen bg-devalmostblack flex flex-col justify-center pl-4 pr-4">
        <Link to="/">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-devlightblue  text-3xl sm:text-3xl md:text-5xl lg:text-7xl">
              Dev Links
            </h1>

            <img className="max-h-52" 
            src={DevLinks_header_image} 
            alt="Neon computer screen with html tags" />
          </div>
        </Link>

        <p className="text-white text-xl flex flex-row justify-center pr-6 pb-6 w-screen text-2xl">Helpful links for budding software developers</p>
        <div className="flex flex-col">
          <NavBar />
        </div>
      </div>
      
    )
  }
  
  export default Header
  