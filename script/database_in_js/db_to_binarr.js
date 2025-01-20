import initSqlJs from 'sql.js';
import fs from 'fs'
// or if you are in a browser:
// const initSqlJs = window.initSqlJs;

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
    locateFile: file => `./sql-wasm.wasm`
});
const filebuffer = fs.readFileSync('db.sqlite3');
const db = new SQL.Database(filebuffer)



// Prepare an sql statement
// You can create custom aggregation functions, by passing a name
// and a set of functions to `db.create_aggregate`:
//
// - an `init` function. This function receives no argument and returns
//   the initial value for the state of the aggregate function.
// - a `step` function. This function takes two arguments
//    - the current state of the aggregation
//    - a new value to aggregate to the state
//  It should return a new value for the state.
// - a `finalize` function. This function receives a state object, and
//   returns the final value of the aggregate. It can be omitted, in which case
//   the final value of the state will be returned directly by the aggregate function.
//
// Here is an example aggregation function, `json_agg`, which will collect all
// input values and return them as a JSON array:
db.create_aggregate(
  "json_agg",
  {
    init: () => [],
    step: (state, val) => [...state, val],
    finalize: (state) => JSON.stringify(state),
  }
);


// Export the database to an Uint8Array containing the SQLite database file
const binaryArray = db.export();

const buffer = Buffer.from(binaryArray);
fs.writeFileSync("js-db", buffer);
