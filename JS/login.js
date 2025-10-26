const form_data = document.getElementById("form_in");
const ls = localStorage.getItem("Users");
const users = JSON.parse(ls) || [];
form_data.addEventListener("submit", (e) => {
  e.preventDefault();
  //get data
  const formData = new FormData(form_data);
  const name = formData.get("username");
  const password = formData.get("userpassword");
  //validation
  if (!name || !password) {
    alert("please fill the boxes");
    return;
  }
  //checking
  const checkbox = () => {
    const check = users.filter((User) => User.password === password);
    return check.length < 1 ? false : true;
  };
  if (checkbox() === false) {
    swal(
      "This account is not fucntioning",
      "Please try your password",
      "Error "
    );
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
