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
      <div >
            <h2>React</h2>
            {react_array.map(item =>
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

  export default ReactLinks