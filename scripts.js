// Codigo para hacer que el video se reproduzca solo cuando se muestre en pantalla

const video = document.getElementById("miVideo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      video.play();
      console.log("videop reproduciinaod ");
    } else {
      video.pause();
      console.log("videop pausado ");
    }
  });
});

observer.observe(video);
