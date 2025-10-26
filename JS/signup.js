const container = document.querySelector(".container-s");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");
const form_data = document.getElementById("form_info");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});
loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
console.log("qosol");
//=>localstorage
const ls = localStorage.getItem("Users");
const users = JSON.parse(ls) || [];
//signup form
form_data.addEventListener("submit", (e) => {
  e.preventDefault();
  //get data
  const formData = new FormData(form_data);
  const name = formData.get("username");
  const email = formData.get("useremail");
  const password = formData.get("userpassword");
  //validation
  if (!name || !email || !password) {
    alert("please fill the boxes");
    return;
  }

  const currentUser = {
    Name: name,
    Email: email,
    Password: password,
  };
  //checking
  const checkbox = () => {
    const check = users.filter((User) => User.email === currentUser.Email);
    return check.length < 1 ? false : true;
  };
  if (checkbox() === true) {
    swal("This email is in use", "Please try another email", "Error ");
    return;
  }
  const btnreg = document.querySelector("button.reg-sub");
  btnreg.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Creating Account ..`;
  //saving user
  setTimeout(() => {
    users.push(currentUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("User", JSON.stringify(currentUser));

    //redirect
    window.location.href = "/Html/index.html";
  }, 2000);
});
