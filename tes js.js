document.addEventListener("DOMContentLoaded", () => {
    // Animasi Fade-In untuk setiap section saat scroll
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "-50px"
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Sekali muncul, animasi tidak diulang
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Scroll Smooth ke atas saat tombol di footer di klik
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "Ke Atas";
    scrollToTopButton.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopButton);
  
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Tampilkan tombol "Ke Atas" saat scroll turun
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible");
      } else {
        scrollToTopButton.classList.remove("visible");
      }
    });
  
    // Event untuk interaksi pada klik referensi
    const referenceItems = document.querySelectorAll("#references li");
    referenceItems.forEach((item) => {
      item.addEventListener("click", () => {
        alert("Anda mengklik referensi: " + item.innerText);
      });
    });
  });
  