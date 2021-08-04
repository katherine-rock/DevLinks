import Javascript_info from '../images/Javascript_info.png'
import Javascript_MDN from '../images/Javascript_MDN.png'
import Javascript_W3 from '../images/Javascript_W3.png'

const Javascript = () => {
    let javascript_array = 
    [ 
    { id: 0, title: "Modern JavaScript Tutorial", description: "Great introduction to JavaScript with helpful examples", url: "https://javascript.info/", screenshot: Javascript_info }, 
    { id: 1, title: "MDN Web Docs", description: "Background and tutorials on JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", screenshot: Javascript_MDN }, 
    { id: 2, title: "W3 Schools", description: "Tutorials and references with lots of examples", url: "https://www.w3schools.com/js/default.asp", screenshot: Javascript_W3 },]

    return (
      <div className="w-screen flex flex-col ">
        <h2 className="text-3xl text-center pt-8">JavaScript</h2>
        <div className="flex flex-row p-8 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {javascript_array.map(item =>
            <div className="border-4 rounded-lg border-devalmostblack xp-4" key={item.id}>
              <h3 className="text-2xl text-center bg-devalmostblack text-devyellow p-2">{item.title}</h3>
              <img src={item.screenshot} alt={item.title} width="100%"></img>
              <p className="pt-3 pl-8 pr-8">{item.description}</p>
              <a className="underline pb-4 pl-8 pr-8 flex flex-wrap break-all" href={item.url} target="_blank">{item.url}</a>
              <br/>
            </div> 
          )
          }
        </div>
      </div>
    )
  }

  export default Javascript