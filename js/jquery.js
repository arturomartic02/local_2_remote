<script> alert("¡Hola! Esta es una alerta."); </script>
const imagen = document.getElementById("imagen-efecto");
imagen.addEventListener("mouseover", () => {
  imagen.style.opacity = "0.5";
});
imagen.addEventListener("mouseout", () => {
  imagen.style.opacity = "1";
});
