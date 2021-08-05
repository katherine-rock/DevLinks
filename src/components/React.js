import Reactjs_org from '../images/Reactjs_org.png'
import React_Jestjs from '../images/React_Jestjs.png'
import React_test_library from '../images/React_test_library.png'
import React_cypress from '../images/React_cypress.png'

const ReactLinks = () => {
    let react_array = 
    [ 
    { id: 0, title: "React - Main Concepts", description: "Great introduction to the main concepts of React", url: "https://reactjs.org/docs/getting-started.html", screenshot: Reactjs_org }, 
    { id: 1, title: "Jest Testing Framework", description: "Unit tests for React apps", url: "https://jestjs.io/", screenshot: React_Jestjs }, 
    { id: 2, title: "React Testing Library", description: "Explanation and cheatsheet of React tests", url: "https://testing-library.com/docs/react-testing-library/intro/", screenshot: React_test_library },
    { id: 3, title: "Cypress", description: "React testing framework for unit and integration tests", url: "https://docs.cypress.io/guides/getting-started/installing-cypress", screenshot: React_cypress },
    ]

    return (
      <div className="w-screen flex flex-col">
        <h2 className="text-3xl text-center pt-8">React</h2>
        <div className="flex flex-row p-8 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {react_array.map(item =>
            <div className="border-4 rounded-lg border-devalmostblack xp-4" key={item.id}>
              <h3 className="text-2xl text-center bg-devalmostblack text-devyellow p-2">{item.title}</h3>
              <img src={item.screenshot} alt={item.title} width="100%"></img>
              <p className="pt-3 pl-8 pr-8">{item.description}</p>
              <a className="underline pb-4 pl-8 pr-8 flex flex-wrap break-all" href={item.url} target="_blank">{item.url}</a>
            </div> 
          )
          }
        </div>
      </div>
    )
  }

  export default ReactLinks