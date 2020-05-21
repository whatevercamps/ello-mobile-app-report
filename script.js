/*global ScrollMagic, $ */
/*Only needed for the controls*/

var controller = new ScrollMagic.Controller();

var phone = document.getElementById("phone_1");
$("#mostrarCambios1").click(() => {
  $("#sugerencias1").addClass("show");
});
$("#cerrarSugenrencias1").click(() => {
  $("#sugerencias1").removeClass("show");
});

$("#mostrarCambios2").click(() => {
  $("#sugerencias2").addClass("show");
});
$("#cerrarSugenrencias2").click(() => {
  $("#sugerencias2").removeClass("show");
});

const setScenes = () => {
  phone.className = "phone view_2";
  console.log("escenas 2");

  setTimeout(() => {
    new ScrollMagic.Scene({
      triggerElement: "#frame_1",
      triggerHook: 0.4, // show, when scrolled 10% into view
      duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal1", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#uxSec",
      duration: "110%", // hide 10% before exiting view (80% + 10% from bottom)
    })
      .setClassToggle("#uxSecTitle", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_2",
      triggerHook: 0.4, // show, when scrolled 10% into view
      duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal2", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_2",
      triggerHook: 0.4, // show, when scrolled 10% into view
      duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })

      .setClassToggle("#phone_3", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_3",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal3", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_4",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })

      .addTo(controller)
      .on("enter leave", function (e) {
        if (e.type == "enter") {
          $("#img_phone3").attr("src", "./imgs/4_1.PNG");
          $("#phone_3").toggleClass("visible");
        }
        $("#lulopene").text(e.type == "enter" ? "inside" : "outside");
      });
    new ScrollMagic.Scene({
      triggerElement: "#frame_4",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal4", "visible") // add class to reveal
      .addTo(controller);

    /* Aux Phone for other views :v   */

    setTimeout(() => {
      new ScrollMagic.Scene({
        triggerElement: "#frame_1",
        triggerHook: 0.4, // show, when scrolled 10% into view
        duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
      })
        .setClassToggle("#phone_2", "visible") // add class to reveal
        .addTo(controller);
    }, 500);
  }, 1000);
};

const setFuncionamiento = (index) => {
  $(index).modal("show");
};

$("#funcAuthButton").click(() => {
  setFuncionamiento("#funcAuthModal");
});
$("#funcContactsButton").click(() => {
  setFuncionamiento("#funcContactsModal");
});
$("#scenesButton").click(setScenes);

// setScenes();
setTimeout(function () {
  phone.className = "phone view_1 rotate";
  $("#staticBackdrop").modal("show");
  setTimeout(function () {
    document.getElementById("scenesButton").addEventListener("click", (evt) => {
      console.log("click", evt);
    });
  }, 2000);
}, 1000);
