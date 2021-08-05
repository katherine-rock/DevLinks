import Ruby_doc_org from '../images/Ruby_doc_org.png'
import Ruby_lang_org from '../images/Ruby_lang_org.png'
import Ruby_tutorials_point from '../images/Ruby_tutorials_point.png'
import mapFunction from '../utils/mapFunction';

const Ruby = () => {
    let ruby_array = 
    [ { 
      id: 0, 
      title: "Ruby-Doc.org", 
      description: "Official Ruby Documentation", 
      url: "https://ruby-doc.org/", 
      screenshot: Ruby_doc_org 
    }, 
    { 
      id: 1, 
      title: "Ruby", 
      description: "Community supported documentation", 
      url: "https://www.ruby-lang.org/en/", 
      screenshot: Ruby_lang_org 
    }, 
    { 
      id: 2, 
      title: "Tutorials Point", 
      description: "Tutorials for Ruby beginners", 
      url: "https://www.tutorialspoint.com/ruby/index.htm", 
      screenshot: Ruby_tutorials_point 
    },]

    return (
      <div>
        <h2 className="text-3xl text-center pt-8">Ruby</h2>
        {mapFunction(ruby_array)}
      </div>
    )
  }

  export default Ruby