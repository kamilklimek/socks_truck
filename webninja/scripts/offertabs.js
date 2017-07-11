(function() {
  var sections = Array.prototype.slice.call(document.querySelectorAll(".sections-websites-switch")),
      activeNumber = 0,
      elementOfList = Array.prototype.slice.call(document.querySelectorAll(".section-websites__list-item-btn"));


  function activeEle(){
    for(i in elementOfList){
      if(elementOfList[i].classList.contains("active")){
        activeNumber=i;
        return;
      }
    }
  }

  for(item of elementOfList){
    item.addEventListener("click", function(e) {
      activeEle();
      elementOfList[activeNumber].classList.remove("active");
      var index=elementOfList.indexOf(e.target);
      elementOfList[index].classList.add("active");

      sections[activeNumber].classList.remove("active-opacity");
      setTimeout(function() {
        sections[activeNumber].classList.remove("active-block");
      },600);


      setTimeout(function() {
        sections[index].classList.add("active-block");
      }, 600);
      setTimeout(function() {
          sections[index].classList.add("active-opacity");
      }, 1000);


    }, false);
  }


}());
