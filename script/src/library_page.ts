/*
const booksobj = new Object();

booksobj.book = JSON.parse(`"title": "1 ... d6 Move by Move",
    "author": "Cyrus Lakdawala",
    "description": "Cyrus Lakdawala examines the universal defence 1...d6, constructs an opening repertoire for Black and provides answers to all the key questions in this opening.",

"tags": ["1. ...d6", "opening", "repertoire"]`)


// get the template strings from html
const bookTemplate: string = $("#book-template").html();

type ObjectKey = keyof typeof books


function showBook(name: string) {

  let book_info: string = String(books[name as ObjectKey])
  let book_template: string = Mustache.render(bookTemplate, book_info)

  console.log(name + ": " + book_info)

  let book = document.createElement("div");

  book.innerHTML = book_info

  document.body.appendChild(book)
}

showBook("1 ... d6 Move by Move")
 */

let books = document.getElementsByClassName("library-book");

for (let i = 0; i < books.length; i++) {

  console.log(books.item(i));
}
