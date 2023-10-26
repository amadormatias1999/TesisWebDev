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
