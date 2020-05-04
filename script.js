/*Only needed for the controls*/
let phone = document.getElementById("phone_1");

/*Controls*/
function updateIframe() {
  // preload iphone width and height
  phone.style.width = "375px";
  phone.style.height = "667px";
}

updateIframe();

setTimeout(function () {
  phone.className = "phone view_1 rotate";
  setTimeout(function () {
    // do second thing
    phone.className = "phone view_2";
  }, 1000);
}, 500);
