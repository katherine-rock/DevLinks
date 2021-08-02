import Ruby_doc_org from '../images/Ruby_doc_org.png'
import Ruby_lang_org from '../images/Ruby_lang_org.png'
import Ruby_tutorials_point from '../images/Ruby_tutorials_point.png'

const Ruby = () => {
    let ruby_array = 
    [ { id: 0, title: "Ruby-Doc.org", description: "Official Ruby Documentation", url: "https://ruby-doc.org/", screenshot: Ruby_doc_org }, 
    { id: 1, title: "Ruby", description: "Community supported documentation", url: "https://www.ruby-lang.org/en/", screenshot: Ruby_lang_org }, 
    { id: 2, title: "Tutorials Point", description: "Tutorials for Ruby beginners", url: "https://www.tutorialspoint.com/ruby/index.htm", screenshot: Ruby_tutorials_point },]

    return (
      <div >
            <h2>Ruby</h2>
            {ruby_array.map(item =>
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.url}>{item.url}</a>
                    <br/>
                    <img src={item.screenshot} alt="screenshot" width="50%"></img>
                </div>
            )
            }
      </div>
    )
  }

  export default Ruby