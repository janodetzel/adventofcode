// let fs = require("fs");

// const input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .split(/\n\s*\n/);

var pl = require("tau-prolog");

// Import Tau Prolog core and create a session
var session = pl.create(1000);

// Load the program
var program =
  // Products
  "item(id(1), name(bread))." +
  "item(id(2), name(water))." +
  "item(id(3), name(apple))." +
  // Shops
  "shop(id(1), name(tau), location(spain))." +
  "shop(id(2), name(swi), location(netherlands))." +
  // Stock
  "stock(item(1), shop(1), count(23), price(0.33))." +
  "stock(item(2), shop(1), count(17), price(0.25))." +
  "stock(item(2), shop(2), count(34), price(0.31))." +
  "stock(item(3), shop(2), count(15), price(0.45)).";
session.consult(program);

// Get Node.js argument: nodejs ./script.js item
var item = process.argv[2];

// Query the goal
session.query(
  "item(id(ItemID), name(" +
    item +
    ")), stock(item(ItemID), shop(ShopID), _, price(Price)), shop(id(ShopID), name(Shop), _)."
);

// Show answers
session.answers((x) => console.log(pl.format_answer(x)));

// // Consult
// session.consult(program, {
//   success: function () {
//     // Query
//     session.query(goal, {
//       success: function (goal) {
//         // Answers
//         session.answer({
//           success: function (answer) {
//             /* Answer */
//           },
//           error: function (err) {
//             /* Uncaught error */
//           },
//           fail: function () {
//             /* Fail */
//           },
//           limit: function () {
//             /* Limit exceeded */
//           },
//         });
//       },
//       error: function (err) {
//         /* Error parsing goal */
//       },
//     });
//   },
//   error: function (err) {
//     /* Error parsing program */
//   },
// });
