import { books } from "./library_books.js";
import Fuse from "fuse.js";

const options = {
  includeScore: true,
  keys: ["title", "author"],
};

const LibSearch = new Fuse(books, options);

console.log(LibSearch.search("h"));
