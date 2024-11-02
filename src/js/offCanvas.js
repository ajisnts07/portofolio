export default function offCanvas() {
  document
    .getElementById("openBtnCanvas")
    .addEventListener("click", function () {
      document.getElementById("offCanvas").classList.remove("translate-x-full");
      document.getElementById("offCanvas").classList.add("translate-x-0");
    });

  document
    .getElementById("closeBtnCanvas")
    .addEventListener("click", function () {
      document.getElementById("offCanvas").classList.remove("translate-x-0");
      document.getElementById("offCanvas").classList.add("translate-x-full");
    });
}
