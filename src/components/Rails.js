import Rails_Guides from '../images/Rails_Guides.png'
import Rails_RSpec from '../images/Rails_RSpec.png'
import Rails_RSpec_expectations from '../images/Rails_RSpec_expectations.png'
import mapFunction from '../utils/mapFunction';

const Rails = () => {
  let rails_array = 
  [ { 
    id: 0, 
    title: "Ruby on Rails Guides", 
    description: "Comprehensive user-friendly guides for Rails", 
    url: "https://guides.rubyonrails.org/", 
    screenshot: Rails_Guides 
  }, 
  { 
    id: 1, 
    title: "Rails RSpec", 
    description: "General documentation on RSpec testing framework for Rails",
    url: "https://relishapp.com/rspec/rspec-rails/docs", 
    screenshot: Rails_RSpec 
  }, 
  { 
    id: 2, 
    title: "RSpec Expectations", 
    description: "Example RSpec tests for Rails", 
    url: "https://relishapp.com/rspec/rspec-expectations/docs", 
    screenshot: Rails_RSpec_expectations 
  },]

  return (
    <div>
      <h2 className="text-3xl text-center pt-8">Rails</h2>
      {mapFunction(rails_array)}
    </div>
  )
}

export default Rails