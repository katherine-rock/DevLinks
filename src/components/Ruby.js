import Ruby_doc_org from '../images/Ruby_doc_org.png'
import Ruby_lang_org from '../images/Ruby_lang_org.png'
import Ruby_tutorials_point from '../images/Ruby_tutorials_point.png'
import {
  Link
} from "react-router-dom";

const Ruby = () => {
    let ruby_array = 
    [ { id: 0, title: "Ruby-Doc.org", description: "Official Ruby Documentation", url: "https://ruby-doc.org/", screenshot: Ruby_doc_org }, 
    { id: 1, title: "Ruby", description: "Community supported documentation", url: "https://www.ruby-lang.org/en/", screenshot: Ruby_lang_org }, 
    { id: 2, title: "Tutorials Point", description: "Tutorials for Ruby beginners", url: "https://www.tutorialspoint.com/ruby/index.htm", screenshot: Ruby_tutorials_point },]

    return (
      <div className="w-screen flex flex-col">
        <h2 className="text-3xl text-center pt-8">Ruby</h2>
        <div className="flex flex-row p-8 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ruby_array.map(item =>
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

  export default Ruby