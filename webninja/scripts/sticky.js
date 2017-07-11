(function() {
  var topBar = document.getElementById("topBar");
  var toggleBar = function() {
    if(document.body.scrollTop > 1){
      topBar.classList.add("sticky");
    } else {
      topBar.classList.remove("sticky");

    }
  }
  window.addEventListener("scroll", toggleBar, false);
}());
