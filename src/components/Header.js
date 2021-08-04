import DevLinks_header_image from '../images/DevLinks_header_image.png'

const Header = () => {
    return (
      <div className="w-screen bg-devalmostblack flex flex-col justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-devlightblue text-7xl">Dev Links</h1>
          <img className="max-h-52" 
          src={DevLinks_header_image} 
          alt="Neon computer screen with html tags" />
        </div>

        <p className="text-white text-xl flex flex-row justify-center pr-6 pb-6">Helpful links for budding software developers</p>
      </div>
    )
  }
  
  export default Header
  