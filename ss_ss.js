/* global $ */

let scrollTarget = false;

let timeline = $(".timeline__nav"),
  items = $("li", timeline),
  milestones = $(".timeline__section .milestone");

console.log("items", items);

const TIMELINE_VALUES = {
  start: 0,
  step: 1,
};

items.find("span").click(function () {
  let li = $(this).parent(),
    index = li.index(),
    milestone = milestones.eq(index);

  if (!li.hasClass("active") && milestone.length) {
    scrollTarget = index;

    let scrollTargetTop = milestone.offset().top;

    $("#profilingTimes").animate(
      { scrollTop: scrollTargetTop },
      {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        },
      }
    );
  }
});

$("#profilingTimes")
  .scroll(function () {
    let viewLine =
        $("#profilingTimes").scrollTop() + $("#profilingTimes").height(),
      active = -1;

    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }

        active++;
      });
    } else {
      active = scrollTarget;
    }

    timeline.css(
      "top",
      -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + "px"
    );

    items.filter(".active").removeClass("active");

    items.eq(active != -1 ? active : 0).addClass("active");
  })
  .trigger("scroll");
