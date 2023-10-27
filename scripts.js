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

// NavBar Siempre presente
window.onscroll = function () {
  const scroll = window.scrollY;
  const barraNav = document.querySelector(".navBar");

  if (scroll > 200) {
    barraNav.classList.add("fixed-top-nav");
  } else {
    barraNav.classList.remove("fixed-top-nav");
  }
};

// //Codigo cards materiales
fetch("../data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const materiales = jsonData.materiales;
    const contenedor = document.querySelector(".cards-grid-materiales");

    materiales.forEach(function (item) {
      const cardHTML = `
        <div class="card" style="width: 40rem">
          <img src="${item.Imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h1>${item.Titulo}</h1>
            <p>${item.Descripcion}</p>
            <a href="${item.Enlace}" class="btn btn-primary boton-card">Ver mas</a>
          </div>
        </div>
      `;

      contenedor.innerHTML += cardHTML;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// XPAND BOTON FUNCTION
// no funciona
// const boton = document.getElementsByClassName("boton-card");
// boton.addEventListener("click", opciones);

// function opciones() {
//   alert("hola mudno");
// }

// swiper
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
