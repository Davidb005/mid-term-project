let submitButton = document.querySelector(".submit-button");
let nameBar = document.querySelector(".name-input");
let emailBar = document.querySelector(".email-input");
let phoneBar = document.querySelector(".phone-input");
let MsgBar = document.querySelector(".message-input");
let formInputs = document.querySelectorAll ("input")

submitButton.addEventListener("click", () => {
  if (nameBar.value === "Ironhack") {
    alert("You can't be Ironhack, because I am Ironhack!");
  } else {
    console.log(nameBar.value);
  }
});
submitButton.addEventListener("click", () => {
  if (!emailBar.value.includes("@")) {
    alert("incorrect email address");
  } else console.log(emailBar.value);
});

submitButton.addEventListener("click", () => {
  if (typeof phoneBar.value !== "number") {
    alert("incorrect telephone number");
  } else {
    console.log(phoneBar.value);
  }
});
submitButton.addEventListener("click", () => {
    if(MsgBar.value.trim() === ""){
        alert ("mandatory field missing")
    } else {
        console.log(MsgBar.value);
    }
});