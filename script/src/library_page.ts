import { books } from "./library_books.js";
import { Mustache } from "https://unpkg.com/mustache@latest"
// get the template strings from html
const bookTemplate: string = $("#book-template").html();

type ObjectKey = keyof typeof books;

function showBook(name: string) {
  let book_info: string = String(books[name as ObjectKey]);
  let book_template: string = Mustache.render(bookTemplate, book_info);

  console.log(name + ": " + book_info);

  let book = document.createElement("div");

  book.innerHTML = book_template;

  document.body.appendChild(book);
}

let book_elements = document.getElementsByClassName("library-book");

function searchBook(name: string) {
  for (let i = 0; i < books.length; i++) {
    let book_el = book_elements.item(i).children[1].children[1].innerHTML

    // This gets the title of each book
    if(book_el.includes(name)){
      console.log("Found in: " + book_el)
    }
  }
}
showBook("1 ... d6 Move by Move");
searchBook("1");
