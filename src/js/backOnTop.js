export default function backOnTop() {
  const backToTopButton = document.getElementById("backToTop");

  // Tampilkan tombol saat menggulir ke bawah
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("hidden");
      backToTopButton.classList.add("block");
    } else {
      backToTopButton.classList.remove("block");
      backToTopButton.classList.add("hidden");
    }
  });

  // Scroll ke atas saat tombol diklik
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
