const islogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
};

export { islogin };
