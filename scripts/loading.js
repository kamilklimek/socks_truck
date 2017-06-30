(function() {
  setTimeout(function() {
    document.querySelector("#loading-container").classList.toggle("hide");
    document.querySelector("#content-container").classList.toggle("hide");
  }, 2500);
}());
