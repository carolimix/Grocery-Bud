//select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit option
let editElement;
let editFlag = false;
let editID = "";

// *** event listeners ***
//submit form
form.addEventListener("submit", addItem);
//*** Functions *** /
function addItem(e) {
  e.preventDefault();
}