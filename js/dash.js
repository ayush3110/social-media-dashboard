function myFunction() {
    var checkBox = document.getElementById("toggle");
    var main = document.getElementById("main");
    var b = document.getElementById("b");
    var bheading = document.getElementById("bheading");
    var num = document.querySelectorAll(".num");
    var bnum = document.querySelectorAll(".bnum");
    var li = document.querySelectorAll("li");
    
    if (checkBox.checked == true){
      main.style.background="linear-gradient(to top, rgb(254,255,254) 70%,rgb(254,255,254) 50%,rgb(249,248,254) 30%,rgb(249,248,254) 100%)";
      b.style.color="black";
      bheading.style.color="rgb(105,107,121)";
      for (let i = 0; i < li.length; i++) {

        li[i].style.backgroundColor = "rgb(241,243,251)";
        li[i].onmouseover = function() {
          this.style.backgroundColor = "rgb(225,226,241)";
          }
        li[i].onmouseout = function() {
          this.style.backgroundColor = "rgb(241,243,251)";
          }
      }
      for (let i = 0; i < num.length; i++) {

        num[i].style.color = "black";
      }

      for (let i = 0; i < bnum.length; i++) {

        bnum[i].style.color = "black";
      }
    } else {
      main.style.background="linear-gradient(to top, rgb(29,32,41) 70%,rgb(29,32,41) 50%,rgb(33,35,47) 30%,rgb(33,35,47) 100%)";
      b.style.color="white";
      bheading.style.color="white";
      for (let i = 0; i < li.length; i++) {

        li[i].style.backgroundColor = "rgb(36,43,66)";
        li[i].onmouseover = function() {
          this.style.backgroundColor = "rgb(51,58,86)";
          }
        li[i].onmouseout = function() {
          this.style.backgroundColor = "rgb(36,43,66)";
          }
      }
      for (let i = 0; i < num.length; i++) {

        num[i].style.color = "white";
      }

      for (let i = 0; i < bnum.length; i++) {

        bnum[i].style.color = "white";
      }
    }
  }