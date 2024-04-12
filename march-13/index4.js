document.querySelector("#form").addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});
