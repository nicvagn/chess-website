import initSqlJs from 'sql.js';
import fs from 'fs'
// or if you are in a browser:
// const initSqlJs = window.initSqlJs;

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
    locateFile: file => `./sql-wasm.wasm`
});

initSqlJs().then(function (SQL) {
  // Load the db
  const db = new SQL.Database(filebuffer);
});

print(db)
