ENV["RACK_ENV"] ||= "test"

require_relative "../app"
require "sinatra/activerecord"
require "rack/test"
require "rspec"
require "capybara/rspec"
require "shoulda-matchers"
require "pry"
require 'capybara/poltergeist'

Dir["./app/models/*.rb"].each { |file| require file }
Dir["./app/seeders/*.rb"].each { |file| require file }
Capybara.app = App
Capybara.javascript_driver = :poltergeist

RSpec.configure do |config|
  config.filter_run :focus
  config.run_all_when_everything_filtered = true
  config.order = :random
  Kernel.srand config.seed

  config.before(:each) do
    Book.destroy_all
    Review.destroy_all
  end

  config.before(:suite) do
    system("cd ../frontend && ember build --output-path ../backend/public")
  end
end
