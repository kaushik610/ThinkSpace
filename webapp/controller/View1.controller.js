sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("thinkspace.zad.thinkspace.controller.View1", {
        onInit: function () {
            $.getScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js", () => {
                $.getScript("https://unpkg.com/vanta/dist/vanta.birds.min.js", () => {
                  VANTA.BIRDS({
                    el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
                  });
                });
              });
        }
    });
});
