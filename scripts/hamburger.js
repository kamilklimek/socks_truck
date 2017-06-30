(function(){
  var btn = document.querySelector("#btn-menu"),
      nav = document.querySelector("#nav"),
      navUp = document.querySelector("#nav-up"),
      navDown = document.querySelector("#nav-down"),
      cross = document.querySelector("#close-menu");

    var toggleNav = function() {
      nav.classList.toggle("active");
      setTimeout(function() {
        navUp.classList.toggle("active");
        navDown.classList.toggle("active");
      }, 100);
    }

    cross.addEventListener("keypress", function(e){
      var key = e.which || e.keyCode;
      if(key===13) {
        navUp.classList.toggle("active");
        navDown.classList.toggle("active");
        setTimeout(function() {
          nav.classList.toggle("active");
        }, 500);
      }
    }, false);
    cross.addEventListener("click", function() {
      navUp.classList.toggle("active");
      navDown.classList.toggle("active");
      setTimeout(function() {
        nav.classList.toggle("active");
      }, 450);
    }, false);

    btn.addEventListener("keypress", function(e){
      var key = e.which || e.keyCode;
      if(key===13) {
        toggleNav;
      }
    }, false);
    btn.addEventListener("click", toggleNav, false);
}());
