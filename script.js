function displayFeedback() {
  //let date = new Date();
  //console.log(date);
  //formatDate; //make it so the day, date and time appear without the GMT stuff. Also make sure that once a comment has been left it keeps the time it was commented and doesn't refresh to the current date and time
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let feedback = document.getElementById("comment").value;
  let customerFeedback = document.getElementById("customer-feedback");
  customerFeedback.classList.add("comment-box");
  customerFeedback.innerText = feedback + " - " + name + " " + surname;
  alert("Thank you for your feedback!💖");
}
