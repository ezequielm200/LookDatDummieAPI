window.addEventListener("load", function () {
  let formulario = document.querySelector("form.orderForm");
  let detalle_pedido = document.getElementById("detalle_pedido");
  let observaciones_recepcion = document.getElementById("observaciones_recepcion");
  // let botonSubmit = document.getElementById("submit");

  detalle_pedido.classList.remove("is-invalid");
  observaciones_recepcion.classList.remove("is-invalid");
  detalle_pedido.nextElementSibling.innerHTML = "";
  observaciones_recepcion.nextElementSibling.innerHTML = "";

  detalle_pedido.addEventListener("focus", (e) => {
    detalle_pedido.classList.remove("is-invalid");
    detalle_pedido.nextElementSibling.innerHTML = "";
  });
  observaciones_recepcion.addEventListener("focus", (e) => {
    observaciones_recepcion.classList.remove("is-invalid");
    observaciones_recepcion.nextElementSibling.innerHTML = "";
  });

  detalle_pedido.addEventListener("blur", (e) => {
    if (detalle_pedido.value == "") {
      detalle_pedido.classList.add("is-invalid");
      detalle_pedido.nextElementSibling.innerHTML =
        "El campo no puede estar vacio (Frontend)";
    }
  });
  observaciones_recepcion.addEventListener("blur", (e) => {
    if (observaciones_recepcion.value == "") {
      observaciones_recepcion.classList.add("is-invalid");
      observaciones_recepcion.nextElementSibling.innerHTML =
        "El campo no puede estar vacio (Frontend)";
    }
  });

  formulario.addEventListener("submit", (e) => {
    if (
      detalle_pedido.value == "" ||
      observaciones_recepcion.value == ""
    ) {
      e.preventDefault();
      return this.alert("Verifique los mensajes de error");
    } else {
      e.submit();
    }
  });
});
