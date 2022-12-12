window.onload = () => {
  if (sessionStorage.user) {
    user = JSON.parse(sessionStorage.user);
    if (user.email) {
      location.replace("/");
    }
  }
};

// form
let formBtn = document.querySelector(".submit-btn");
let loader = document.querySelector(".loader");

formBtn.addEventListener("click", () => {
  let fullname = document.querySelector("#name") || null;
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let number = document.querySelector("#number") || null;
  let tac = document.querySelector("#tc") || null;

  if (fullname != null) {
    // signup page
    //form validation
    if (fullname.value.length < 3) {
      showFormError("Please Enter Name!");
    } else if (!email.value.length) {
      showFormError("Please Enter Email!");
    } else if (password.value.length < 8) {
      showFormError("Password Must be 8 Letters Long!");
    } else if (!Number(number.value) || number.value.length < 10) {
      showFormError("Invalid Number!");
    } else if (!tac.checked) {
      showFormError("You must agree to our Terms and Conditions!");
    } else {
      //submit form
      loader.style.display = "block";
      sendData("/signup", {
        name: fullname.value,
        email: email.value,
        password: password.value,
        number: number.value,
        tac: tac.checked,
      });
    }
  } else {
    // login page
    if (!email.value.length || !password.value.length) {
      showFormError("Fill all the Fields");
    } else {
      //submit form
      loader.style.display = "block";
      sendData("/login", {
        email: email.value,
        password: password.value,
      });
    }
  }
});
