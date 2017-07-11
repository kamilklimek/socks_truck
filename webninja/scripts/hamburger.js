(function(){
  var menuUp = 0;
  var btnopen = document.getElementById("button-menu"),
      btnclose = document.getElementById("button-menu-close"),
      navbaritem = Array.prototype.slice.call(document.querySelectorAll(".navbar-item")),
      nav = document.querySelector(".nav"),
      navbar = document.querySelector(".navbar"),
      sections = Array.prototype.slice.call(document.querySelectorAll(".section"));

  var toggleMenu = function () {
    if(menuUp===0){
      nav.classList.toggle("active-block")
      setTimeout(function() {
        nav.classList.toggle("active-opacity");
      }, 100);
      menuUp=1;
    }
    else{
      nav.classList.toggle("active-opacity");
      setTimeout(function() {
        nav.classList.toggle("active-block")
      }, 1500);
      menuUp=0;
    }
  }

  var topBar = document.getElementById("topBar");
  window.addEventListener("scroll", function(e) {
      e.preventDefault();
      for(var iterator= 0; iterator<sections.length;iterator++){
        navbaritem[iterator].classList.remove("active");
        var positionTop = sections[iterator].offsetTop - 2*topBar.clientHeight;
        var positionBottom = sections[iterator].offsetTop + sections[iterator].clientHeight;
        if(document.body.scrollTop >= positionTop && document.body.scrollTop < positionBottom){
          navbaritem[iterator].classList.add("active");
        } else {
          navbaritem[iterator].classList.remove("active");
        }
      }
},false);

  document.onkeydown = function(e){
    var key = e.which || e.keyCode;
    if(key===27) {
      nav.classList.toggle("active-opacity");
      setTimeout(function() {
        nav.classList.toggle("active-block")
      }, 1500);
      menuUp=0;
    }
  }




  btnopen.addEventListener("click", toggleMenu, false);
  btnclose.addEventListener("click", toggleMenu, false);
  for(var i=0; i<navbaritem.length;i++){
        navbaritem[i].addEventListener("click", toggleMenu, false);
      }


}());
