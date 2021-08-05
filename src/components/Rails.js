import Rails_Guides from '../images/Rails_Guides.png'
import Rails_RSpec from '../images/Rails_RSpec.png'
import Rails_RSpec_expectations from '../images/Rails_RSpec_expectations.png'

const Rails = () => {
    let rails_array = 
    [ 
    { id: 0, title: "Ruby on Rails Guides", description: "Comprehensive user-friendly guides for Rails", url: "https://guides.rubyonrails.org/", screenshot: Rails_Guides }, 
    { id: 1, title: "Rails RSpec", description: "General documentation on RSpec testing framework for Rails", url: "https://relishapp.com/rspec/rspec-rails/docs", screenshot: Rails_RSpec }, 
    { id: 2, title: "RSpec Expectations", description: "Example RSpec tests for Rails", url: "https://relishapp.com/rspec/rspec-expectations/docs", screenshot: Rails_RSpec_expectations },]

    return (
      <div className="w-screen flex flex-col ">
        <h2 className="text-3xl text-center pt-8">Rails</h2>
        <div className="flex flex-row p-8 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rails_array.map(item =>
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

  export default Rails