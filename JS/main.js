const btncart = document.querySelector("button.cart");
const btnsig = document.querySelector("button.signup");
btnsig.addEventListener("click",()=>{
     
})

// get data 
const formData=new FormData(form);
const Username = formData.get(Username);
const Useremail = formData.get(Useremail);
const password = formData.get(password);
  console.log(password);