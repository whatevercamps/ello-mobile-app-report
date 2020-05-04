/*global ScrollMagic, $ */
/*Only needed for the controls*/

var controller = new ScrollMagic.Controller();

var phone = document.getElementById("phone_1");

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
    $("#staticBackdrop").modal("show");
    $("#scenesButton").click(setScenes);
  }, 2000);
}, 1000);

const setScenes = () => {
  console.log("gola");

  phone.className = "phone view_2";
  new ScrollMagic.Scene({
    triggerElement: "#img1",
    triggerHook: 0.4, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50, // move trigger to center of element
  })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#img2",
    triggerHook: 0.4, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50, // move trigger to center of element
  })
    .setClassToggle("#reveal2", "visible") // add class to reveal
    .addTo(controller);
};
