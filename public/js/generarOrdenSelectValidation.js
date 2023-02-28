window.addEventListener("load", function () {
  let formulario = document.querySelector("form.orderForm");
  let tipo_pedido = document.getElementById("tipo_pedido");

  // let botonSubmit = document.getElementById("submit");

  tipo_pedido.classList.remove("is-invalid");
  tipo_pedido.nextElementSibling.innerHTML = "";

  tipo_pedido.addEventListener("focus", (e) => {
    tipo_pedido.classList.remove("is-invalid");
    tipo_pedido.nextElementSibling.innerHTML = "";
  });

  tipo_pedido.addEventListener("blur", (e) => {
    if (tipo_pedido.value == "") {
      tipo_pedido.classList.add("is-invalid");
      tipo_pedido.nextElementSibling.innerHTML =
        "El campo no puede estar vacio (Frontend)";
    }
  });

  formulario.addEventListener("submit", (e) => {
    if (
      tipo_pedido.value == ""
    ) {
      e.preventDefault();
      return this.alert("Seleccione el tipo de pedido");
    } else {
      e.submit();
    }
  });
});
