import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
  AOS.init({
    disable: function () {
      return window.innerWidth < 768;
    },
  });
}
