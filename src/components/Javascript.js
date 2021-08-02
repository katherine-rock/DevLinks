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
      <div >
            <h2>JavaScript</h2>
            {javascript_array.map(item =>
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.url}>{item.url}</a>
                    <br/>
                    <img src={item.screenshot} alt={item.title} width="30%"></img>
                </div>
            )
            }
      </div>
    )
  }

  export default Javascript