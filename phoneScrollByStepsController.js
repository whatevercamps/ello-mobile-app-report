/* global $ */

let step = 1;
let goOn = true;

console.log("aver", $("#phone_1").scrollTop());

$("#phone_1").bind("mousewheel", (e) => {
  e.preventDefault();
  if (goOn) {
    goOn = false;

    console.log("pene", {
      deltaY: e.originalEvent.deltaY,
      step: step,
      dir: e.originalEvent.deltaY / Math.abs(e.originalEvent.deltaY),
    });

    if (step < 100 || e.originalEvent.deltaY < 0) {
      if (e.originalEvent.deltaY > 0) {
        step = Math.min(4, step + 1);
      } else if (e.originalEvent.deltaY < 0) {
        step = Math.max(1, step - 1);
      }

      const pos = $("#phone_1").scrollTop();
      const nextPos =
        pos +
        $(`#frame_${step}`).height() *
          (e.originalEvent.deltaY / Math.abs(e.originalEvent.deltaY));

      console.log("vagina", { step: step, pos: pos, nextPos: nextPos });
      $("#phone_1").animate(
        {
          scrollTop: nextPos,
        },
        300
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#performanceSeccion").offset().top,
        },
        300
      );
    }

    setTimeout(() => {
      goOn = true;
    }, 1300);
  }
});
