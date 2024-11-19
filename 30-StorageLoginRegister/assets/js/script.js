document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isLogined = users.find((user) => user.isLogined === true);

  let loginBtn = document.querySelector(".login");
  let registerBtn = document.querySelector(".register");
  let logoutBtn = document.querySelector(".logout");
  let usernameBtn = document.querySelector(".username");

  function updateUserStatus() {
    users = JSON.parse(localStorage.getItem("users")) || [];
    isLogined = users.find((user) => user.isLogined === true);

    if (isLogined) {
      if (usernameBtn) usernameBtn.textContent = isLogined.username;
      if (loginBtn) loginBtn.classList.add("d-none");
      if (registerBtn) registerBtn.classList.add("d-none");
      if (logoutBtn) logoutBtn.classList.remove("d-none");
    } else {
      if (logoutBtn) logoutBtn.classList.add("d-none");
      if (loginBtn) loginBtn.classList.remove("d-none");
      if (registerBtn) registerBtn.classList.remove("d-none");
      if (usernameBtn) usernameBtn.textContent = "Username";
    }
  }

  function logout() {
    if (isLogined) {
      isLogined.isLogined = false;
      localStorage.setItem("users", JSON.stringify(users));
      updateUserStatus();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    }
  }

  if (logoutBtn) logoutBtn.addEventListener("click", logout);
  updateUserStatus();
});
