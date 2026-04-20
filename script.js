function displayFeedback() {
  //let date = new Date();
  //console.log(date);
  //formatDate; //make it so the day, date and time appear without the GMT stuff. Also make sure that once a comment has been left it keeps the time it was commented and doesn't refresh to the current date and time
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
