"use strict";
/* global $ */

const watchSidebar = () => {
  if (window.innerWidth < 900 && $("#sidebar")[0].className != "active") {
    console.log("aplica a menor");
    $("#sidebar").toggleClass("active");
  }
  if (window.innerWidth > 900 && $("#sidebar")[0].className == "active") {
    console.log("aplica a mayor");
    $("#sidebar").toggleClass("active");
  }
};

window.onload = watchSidebar;
window.onresize = watchSidebar;
