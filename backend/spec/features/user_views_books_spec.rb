require "spec_helper"

feature "user views books index", js: true do
  let!(:book1) {
    Book.create(
      title: "zoolander's guide to zoology",
      author: "zoolander",
      description: "really, really ridiculously good read!"
    )
  }
  let!(:book2) {
    Book.create(
      title: "ben's bountiful bosons",
      author: "ben kenobi",
      description: "a jedi discusses quantum mechanics as a methodology for understanding the psychosociopolitical ramifications of polarized galactic governmental divides and rebellions armed with sticks"
    )
  }
  let!(:book3) {
    Book.create(
      title: "korben's compendium of galactic conundrums",
      author: "korben dallas",
      description: "um... read it"
    )
  }

  scenario "books are organized alphabetically" do
    visit "/books"
    expect(find("li:nth-child(1)")).to have_content "ben's bountiful bosons"
    expect(find("li:nth-child(2)")).to have_content "korben's compendium of galactic conundrums"
    expect(find("li:nth-child(3)")).to have_content "zoolander's guide to zoology"
  end

  scenario "long book descriptions are truncated" do
    visit "/books"

    expect(page).not_to have_content "rebellions armed with sticks"
  end

  scenario "average book ratings are displayed" do
    Review.create(book: book1, score: 10, description: "a good book")
    Review.create(book: book1, score: 1, description: "a good book")

    visit "/"

    expect(page).to have_content "Average Rating: 5.0"
    expect(page).to have_content "No Ratings"
  end
end
