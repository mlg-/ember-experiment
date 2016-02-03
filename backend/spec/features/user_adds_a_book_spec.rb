require "spec_helper"

feature "user adds a book" do
  scenario "user adds a book" do
    Book.create(title: "The Dead and the Living", author: "Sharon Olds", description: "Poetry about family life")
    visit "/books"

    click_on "Add A Book"

    fill_in :book_title, with: "Native Son"
    fill_in :book_author, with: "Richard Wright"
    fill_in :book_description, with: "1940 novel, Bigger Thomas"
    click_on "Add"

    expect(page).to have_content "Native Son"
    expect(page).to have_content "The Dead and the Living"
  end
end
