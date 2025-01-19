"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_books_js_1 = require("./library_books.js");
const mustache_latest_1 = require("https://unpkg.com/mustache@latest");
// get the template strings from html
const bookTemplate = $("#book-template").html();
function showBook(name) {
    let book_info = String(library_books_js_1.books[name]);
    let book_template = mustache_latest_1.Mustache.render(bookTemplate, book_info);
    console.log(name + ": " + book_info);
    let book = document.createElement("div");
    book.innerHTML = book_template;
    document.body.appendChild(book);
}
let book_elements = document.getElementsByClassName("library-book");
function searchBook(name) {
    for (let i = 0; i < library_books_js_1.books.length; i++) {
        let book_el = book_elements.item(i).children[1].children[1].innerHTML;
        // This gets the title of each book
        if (book_el.includes(name)) {
            console.log("Found in: " + book_el);
        }
    }
}
showBook("1 ... d6 Move by Move");
searchBook("1");
//# sourceMappingURL=library_page.js.map