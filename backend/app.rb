require "dotenv"
Dotenv.load

require "json"
require "sinatra/base"
require "sinatra/activerecord"
require "sinatra/namespace"
require "sinatra/json"
require "sinatra/activerecord"
require "pry"


class App < Sinatra::Base
  register Sinatra::JSON
  register Sinatra::Namespace
  
  Dir["./app/models/*.rb"].each { |file| require file }
  Dir["./app/seeders/*.rb"].each { |file| require file }

  set :views, Proc.new { File.join(root, "app/views") }

  #HTTP Views
  get "/" do
    @books = Book.order(:title)
    erb :index
  end

  get "/book/:id" do
    @book = Book.find(params[:id].to_i)
    erb :books_show
  end

  post "/book/:id/reviews/new" do
    book = Book.find(params[:id].to_i)
    Review.create(
      book: book,
      score: params[:review_score].to_i,
      description: params[:review_description]
    )
    redirect to("/book/#{book.id}")
  end

  get "/books/new" do
    erb :books_new
  end

  post "/books/new" do
    Book.create(
      title: params[:title],
      author: params[:author],
      description: params[:description]
    )
    redirect to("/")
  end

  #API endpoints
  get "/api/v1/books/:id" do
    content_type :json
    @book = Book.find(params[:id].to_i)
    {
      book: @book,
      # reviews: @book.reviews
    }.to_json
  end

  get "/api/v1/books" do
    json({ books: Book.all })
  end

  post "/api/v1/books/new" do
    book = Book.create(
      title: params[:title],
      author: params[:author],
      description: params[:description]
    )
    if book.valid?
      status 200
    else
      status 422
    end
  end

  post "/api/v1/book/:id/reviews/new" do
    book = Book.find(params[:id].to_i)
    review = Review.create(
      book: book,
      score: params[:review_score].to_i,
      description: params[:review_description]
    )
    if review.valid?
      status 200
    else
      status 422
    end
  end
end
