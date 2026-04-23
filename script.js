function displayFeedback() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let feedback = document.getElementById("comment").value;
  let customerFeedback = document.getElementById("customer-feedback");
  customerFeedback.classList.add("comment-box");
  if (name.length == 0 && surname.length == 0) {
    customerFeedback.innerText = feedback + " - " + "Anonymous";
  } else {
    customerFeedback.innerText = feedback + " - " + name + " " + surname;
  }
  alert("Thank you for your feedback!💖");

  /* window.onload = function () {
    let savedText = this.localStorage.getItem("storedText");
    if (savedText) {
      feedback.value = savedText;
    }
  };
  feedback.addEventListener("input", function () {
    localStorage.setItem("storedText", feedback.value);
  });*/ //somehow the error is on line 25... figure out alternative way
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

/* <script src="https://cdn.jsdelivr.net/npm/counterapi/dist/counter.browser.min.js"></script> put this line in the head in html
  <div>Views: <span id="counter">Loading...</span></div> put this line below header in html
const counter = new counter({ workspace: "Ejaridini Kitchen" });
counter
  .up("page-views")
  .then((result) => {
    console.log(`Page views: ${result.value}`);
    document.getElementById("counter").textContent = result.value;
  })
  .catch((error) => console.error("Counter error:", error.message));*/ //initiate the api key and api url first...
