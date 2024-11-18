const expandableTitles = document.querySelectorAll(".expandable-title");

expandableTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const expandable = title.parentElement;
    const content = expandable.querySelector(".expandable-content");
    const toggleIcon = title.querySelector(".toggle-icon");

    if (content.style.display === "block") {
      content.style.display = "none";
      toggleIcon.classList.remove("bi", "bi-dash-circle");
      toggleIcon.classList.add("bi", "bi-plus-circle");
    } else {
      content.style.display = "block";
      toggleIcon.classList.remove("bi", "bi-plus-circle");
      toggleIcon.classList.add("bi", "bi-dash-circle");
    }
  });
});
