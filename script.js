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

$("#mostrarCambios3").click(() => {
  $("#sugerencias3").addClass("show");
});

$("#cerrarSugenrencias3").click(() => {
  $("#sugerencias3").removeClass("show");
});

$("#mostrarCambiosSettings").click(() => {
  $("#sugerencias4").addClass("show");
});

$("#cerrarSugenrencias4").click(() => {
  $("#sugerencias4").removeClass("show");
});

$("#abrirThreadsSeccion").click(() => {
  $("#threadsSpace").addClass("show");
});
$("#abrirThreadsDesdeEx").click(() => {
  $("#ex1Modal").modal("hide");
  $("#threadsSpace").addClass("show");
});
$("#cerrarThreadsSeccion").click(() => {
  $("#threadsSpace").removeClass("show");
});

$("#bugthreadsArreglacionEnlace1").click(() => {
  $("#sugerenciasThreadsBug").addClass("show");
});
$("#cerrarSugerenciasThreadsBug").click(() => {
  $("#sugerenciasThreadsBug").removeClass("show");
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
      .addTo(controller)
      .on("enter leave", function (e) {
        if (e.type == "enter") {
          $("#img_phone3").attr("src", "./imgs/2_1.PNG");
          $("#phone_3").addClass("visible");
        } else {
          $("#phone_3").removeClass("visible");
        }
      });

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
          $("#phone_3").addClass("visible");
        } else {
          $("#phone_3").removeClass("visible");
        }
      });
    new ScrollMagic.Scene({
      triggerElement: "#frame_4",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal4", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_5",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal5", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_6",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal6", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#frame_7",
      triggerHook: 0.4, // show, when scrolled 40% into view
      duration: "50%", // hide 10% before exiting view (50% + 40% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle("#reveal7", "visible") // add class to reveal
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#stepsTimeline",
      duration: "100%",
    })
      .setPin("#pinconn1")
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
$("#funcSettingsButton").click(() => {
  setFuncionamiento("#funcSettingsModal");
});

$("#funchatsButton").click(() => {
  setFuncionamiento("#funcchatsModal");
});
$("#pinconn1").click(() => {
  setFuncionamiento("#funcConnModal");
});
$("#antipatron1Button").click(() => {
  setFuncionamiento("#antipatron1Modal");
});

$("#abrirFalloExPic").click(() => {
  setFuncionamiento("#ex1Modal");
});
$("#mostrarProblemasChat").click(() => {
  setFuncionamiento("#ex2Modal");
});

$("#funchattingButton").click(() => {
  setFuncionamiento("#funcchatingModal");
});

$("#scenesButton").click(setScenes);

$("#revealconn1").click(() => {
  $("#conn1").toggleClass("show");
  const text = $("#revealconn1").text();
  $("#revealconn1").text(
    text === "Ver código" ? "Ocultar código" : "Ver código"
  );
});

$("#verCodThr1").click(() => {
  const text = $("#verCodThr1").text();
  $("#verCodThr1").text(
    text === "Ver código" ? "Ocultar código" : "Ver código"
  );
});

$("#verCodThr2").click(() => {
  const text = $("#verCodThr2").text().trim();
  console.log("jeje", text);
  $("#verCodThr2").text(
    text === "Ver código" ? "Ocultar código" : "Ver código"
  );
});

$("#verCodThr3").click(() => {
  const text = $("#verCodThr3").text().trim();
  $("#verCodThr3").text(
    text === "Ver código" ? "Ocultar código" : "Ver código"
  );
});

$("#revealconn2").click(() => {
  $("#conn2").toggleClass("show");
  const text = $("#revealconn2").text().trim();
  $("#revealconn2").text(
    text === "Ver código" ? "Ocultar código" : "Ver código"
  );
});

$("#bugthreadsArreglacionEnlace1").click(() => {
  $("#threadsSpace").removeClass("show");
});
setScenes();
// setTimeout(function () {
//   phone.className = "phone view_1 rotate";
//   $("#staticBackdrop").modal("show");
//   setTimeout(function () {
//     document.getElementById("scenesButton").addEventListener("click", (evt) => {
//       console.log("click", evt);
//     });
//   }, 2000);
// }, 1000);
