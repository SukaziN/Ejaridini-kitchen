let customerFeedback1 = document.getElementById("feedback-1");
let customerFeedback2 = document.getElementById("feedback-2"); //these selectors are here as an effort to avoid using a loop when checking if the first li for feedback already has text so the comment can be displayed in one of them (for site performance concerns)
let customerFeedback3 = document.getElementById("feedback-3");
let customerFeedback4 = document.getElementById("feedback-4");
function displayFeedback() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let feedback = document.getElementById("comment").value;
  customerFeedback1.classList.add("comment-box");

  if (name.length == 0 && surname.length == 0) {
    let message = feedback + " - " + "Anonymous";
    customerFeedback1.innerText = message;
    customerFeedback1 = message;
    localStorage.setItem("key", message);

    if (localStorage.getItem("key")) {
      message = localStorage.getItem("key");
      console.log(message);
    }
  } else {
    let message = feedback + " - " + name + " " + surname;
    customerFeedback1.innerText = message;
    customerFeedback1 = message;
    localStorage.setItem("key", message);

    if (localStorage.getItem("key")) {
      message = localStorage.getItem("key");
      console.log(message);
    }
  }
  if (customerFeedback1.length > 0) {
    if (name.length == 0 && surname.length == 0) {
      let message = feedback + " - " + "Anonymous";
      customerFeedback1.innerText = message;
      customerFeedback1 = message;
      localStorage.setItem("key", message);

      if (localStorage.getItem("key")) {
        message = localStorage.getItem("key");
        console.log(message);
      }
    } else {
      let message = feedback + " - " + name + " " + surname;
      customerFeedback1.innerText = message;
      customerFeedback1 = message;
      localStorage.setItem("key", message);

      if (localStorage.getItem("key")) {
        message = localStorage.getItem("key");
        console.log(message);
      }
    }
  }
  alert("Thank you for your feedback!💖");
}
let mealMenu = document.getElementById("meal-menu");
let platterMenu = document.getElementById("platter-menu");

function makeMealMenuBig() {
  platterMenu.classList.remove("make-bigger");
  mealMenu.classList.add("make-bigger");
}
function makePlatterMenuBig() {
  mealMenu.classList.remove("make-bigger");
  platterMenu.classList.add("make-bigger");
}
function makeMenusSmall() {
  mealMenu.classList.remove("make-bigger");
  platterMenu.classList.remove("make-bigger");
}
const counter = []; //tracks analytics when the general ul area in navigation is clicked (make it more specific)
const container = document.querySelector("#navigation");
container.addEventListener("click", tracker);
function tracker(e) {
  const el = e.target;
  if (el.id) {
    const list = {};
    list.content = el.textContent;
    list.id = el.id;
    list.tagName = el.tagName;
    list.class = el.className;
    console.dir(el);
    counter.push(list);
    console.log(counter);
    console.log(counter.length); //this is how many times the ul in navigation is clicked
  }
}
