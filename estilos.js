//-- //-- Mostrar y ocultar ventana de enlaces-menu --//
const logo = document.querySelector(".logo");
const enlaces = document.querySelector(".enlaces-menu");
logo.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
});
//-- Mostrar/ocultar buscar(placeholder) --//
const lupa = document.querySelector(".lupa");
const muestraPlaceholder = document.querySelector(".icono-placeholder-image");
lupa.addEventListener("click", () => {
  muestraPlaceholder.classList.toggle("activado");
});
//-- Mostrar ventana cuenta personal --//
//--const cuenta=document.querySelector('#cuenta-personal');const cuentaPersonal=document.querySelector('.vent-rigth');cuenta.addEventListener('click',() => {cuentaPersonal.classList.toggle('activado');});
//-- Mostrar ventana de presentación de Nosotros --//
const itemUno = document.querySelector(".item-uno");
const contRangerarbsoft = document.querySelector(".container-rangerarbsoft");
itemUno.addEventListener("click", () => {
  contRangerarbsoft.classList.toggle("activado");
});
function mostrarRangerarbsoft() {
  if (
    (document.querySelector(".container-rangerarbsoft").style.display = "block")
  );
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".contenedor-garantia").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
//-- Mostrar ventana de presentación de Contacto --//
const itemDos = document.querySelector(".item-dos");
const contContacto = document.querySelector(".contenedor-contacto");
itemDos.addEventListener("click", () => {
  contContacto.classList.toggle("activado");
});
function mostrarContacto() {
  if ((document.querySelector(".contenedor-contacto").style.display = "block"));
  document.querySelector(".container-rangerarbsoft").style.display = "none";
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".contenedor-garantia").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
//-- Mostrar ventana de presentación de Productos --//
const itemTres = document.querySelector(".item-tres");
const contProductos = document.querySelector(".contenedor-productos");
itemTres.addEventListener("click", () => {
  contProductos.classList.toggle("activado");
});
function mostrarProductos() {
  if (
    (document.querySelector(".contenedor-productos").style.display = "block")
  );
  document.querySelector(".container-rangerarbsoft").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".contenedor-garantia").style.display = "none";
  document.querySelector(".contenedor-contacto").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
//-- Mostrar ventana de presentación de Soporte --//
const itemCuatro = document.querySelector(".item-cuatro");
const contSoporte = document.querySelector(".contenedor-soporte");
itemCuatro.addEventListener("click", () => {
  contSoporte.classList.toggle("activado");
});
function mostrarSoporte() {
  if ((document.querySelector(".contenedor-soporte").style.display = "block"));
  document.querySelector(".container-rangerarbsoft").style.display = "none";
  document.querySelector(".contenedor-contacto").style.display = "none";
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-garantia").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
//-- Mostrar ventana de presentación de Garantía --//
const itemCinco = document.querySelector(".item-cinco");
const contGarantia = document.querySelector(".contenedor-garantia");
itemCinco.addEventListener("click", () => {
  contGarantia.classList.toggle("activado");
});
function mostrarGarantia() {
  if ((document.querySelector(".contenedor-garantia").style.display = "block"));
  document.querySelector(".container-rangerarbsoft").style.display = "none";
  document.querySelector(".contenedor-contacto").style.display = "none";
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".container-cotizacion").style.display = "none";
}
//-- Mostrar ventana de presentación de Cotizacion --//
const itemSeis = document.querySelector(".item-seis");
const contCotizacion = document.querySelector(".contenedor-cotizacion");
itemSeis.addEventListener("click", () => {
  contCotizacion.classList.toggle("activado");
});
function mostrarCotizacion() {
  if (
    (document.querySelector(".contenedor-cotizacion").style.display = "block")
  );
  document.querySelector(".container-rangerarbsoft").style.display = "none";
  document.querySelector(".contenedor-contacto").style.display = "none";
  document.querySelector(".contenedor-productos").style.display = "none";
  document.querySelector(".contenedor-soporte").style.display = "none";
  document.querySelector(".contenedor-garantia").style.display = "none";
}
//--- Funcion Cotizacion del Dolar Hoy ---//
$(document).ready(function() {
    function actualizarCotizacion() {
        var url = "https://www.bna.com.ar/Cotizador/MonedasHistorico";
        $.getJSON(url, function(data) {
            var compra = data[0].Compra;
            var venta = data[0].Venta;
            $(".data-compra").text(compra);
            $(".data-venta").text(venta);
        });
    }

    actualizarCotizacion(); // Llamar a la función para mostrar la cotización al cargar la página

    setInterval(actualizarCotizacion, 600000); // Actualizar la cotización cada 10 minutos (600,000 ms)
});


//-- Mostrar ventana de presentación de GastroRest --//
const gastroRest = document.querySelector("#btn-uno");
const contGastrorest = document.querySelector(".contenedor-gastrorest");
gastroRest.addEventListener("click", () => {
  contGastrorest.classList.toggle("activado");
});
function mostrarGastroRest() {
  if (
    (document.querySelector(".contenedor-gastrorest").style.display = "block")
  );
  document.querySelector(".contenedor-appcontrato-alquiler").style.display =
    "none";
  document.querySelector(".contenedor-app-tabaco").style.display = "none";
  document.querySelector(".contenedor-agroquimica").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
  document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de AppContratoAlquiler --//
const appContratoAlquiler = document.querySelector("#btn-dos");
const contAppContrato = document.querySelector(
  ".contenedor-appcontrato-alquiler"
);
appContratoAlquiler.addEventListener("click", () => {
  contAppContrato.classList.toggle("activado");
});
function mostrarContratoAlquiler() {
  if (
    (document.querySelector(".contenedor-appcontrato-alquiler").style.display =
      "block")
  );
  document.querySelector(".contenedor-gastrorest").style.display = "none";
  document.querySelector(".contenedor-app-tabaco").style.display = "none";
  document.querySelector(".contenedor-agroquimica").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
  document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de AppTABACO --//
const appTabaco = document.querySelector("#btn-tres");
const contAppTabaco = document.querySelector(".contenedor-app-tabaco");
appTabaco.addEventListener("click", () => {
  contAppTabaco.classList.toggle("activado");
});
function mostrarAppTabaco() {
  if (
    (document.querySelector(".contenedor-app-tabaco").style.display = "block")
  );
  document.querySelector(".contenedor-gastrorest").style.display = "none";
  document.querySelector(".contenedor-appcontrato-alquiler").style.display =
    "none";
  document.querySelector(".contenedor-agroquimica").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
  document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de AgroQuimicaSolutions --//
const appAgroQuimica = document.querySelector("#btn-cuatro");
const contAgroQuimica = document.querySelector(".contenedor-agroquimica");
appAgroQuimica.addEventListener("click", () => {
  contAgroQuimica.classList.toggle("activado");
});
function mostrarAgroquimica() {
  if (
    (document.querySelector(".contenedor-agroquimica").style.display = "block")
  );
  document.querySelector(".contenedor-gastrorest").style.display = "none";
  document.querySelector(".contenedor-appcontrato-alquiler").style.display =
    "none";
  document.querySelector(".contenedor-app-tabaco").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
  document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Profesionales-Sianca-Valley --//
const appProfesionales = document.querySelector("#btn-cinco");
const contProfesionales = document.querySelector(".contenedor-profesionales");
appProfesionales.addEventListener("click", () => {
  contProfesionales.classList.toggle("activado");
});
function mostrarProfesionales() {
  if (
    (document.querySelector(".contenedor-profesionales").style.display =
      "block")
  );
  document.querySelector(".contenedor-gastrorest").style.display = "none";
  document.querySelector(".contenedor-appcontrato-alquiler").style.display =
    "none";
  document.querySelector(".contenedor-app-tabaco").style.display = "none";
  document.querySelector(".contenedor-agroquimica").style.display = "none";
  document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de RangerarbsoftDisk --//
const appRangerarbsoftdisk = document.querySelector("#btn-seis");
const contRangerarbsoftdisk = document.querySelector(
  ".contenedor-rangerarbsoftdisk"
);
appRangerarbsoftdisk.addEventListener("click", () => {
  contRangerarbsoftdisk.classList.toggle("activado");
});
function mostrarRangerDisk() {
  if (
    (document.querySelector(".contenedor-rangerarbsoftdisk").style.display =
      "block")
  );
  document.querySelector(".contenedor-gastrorest").style.display = "none";
  document.querySelector(".contenedor-appcontrato-alquiler").style.display =
    "none";
  document.querySelector(".contenedor-app-tabaco").style.display = "none";
  document.querySelector(".contenedor-agroquimica").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
}
//-- Mostrar Form Suscripcion desde #btn-one Comprar --//
const formSuscri = document.querySelector("#btn-one");
const muestraFormSuscripc = document.querySelector(
  ".container-form-suscrip"
);
formSuscri.addEventListener("click", () => {
  muestraFormSuscripc.classList.toggle("activado");
});
//-- Mostrar Form Suscripcion desde #btn-two Comprar --//
const formSuscripcion = document.querySelector("#btn-two");
const muestraFormSuscrip = document.querySelector(
  ".container-form-suscrip"
);
formSuscripcion.addEventListener("click", () => {
  muestraFormSuscrip.classList.toggle("activado");
});
//-- Mostrar Form Suscripcion desde #btn-three Comprar --//
const FormSuscr = document.querySelector("#btn-three");
const muestraFormSuscr = document.querySelector(
  ".container-form-suscrip"
);
FormSuscr.addEventListener("click", () => {
  muestraFormSuscr.classList.toggle("activado");
});
//-- Mostrar Form Suscripcion desde #btn-four Comprar --//
const formularioSuscripcion = document.querySelector("#btn-four");
const muestraFormularioSuscripcion = document.querySelector(
  ".container-form-suscrip"
);
formularioSuscripcion.addEventListener("click", () => {
  muestraFormularioSuscripcion.classList.toggle("activado");
});
//-- Mostrar Form Suscripcion desde #btn-five Comprar --//
const formularioSuscripc = document.querySelector("#btn-five");
const muestraFormularioSuscripc = document.querySelector(
  ".container-form-suscrip"
);
formularioSuscripc.addEventListener("click", () => {
  muestraFormularioSuscripc.classList.toggle("activado");
});
//-- Mostrar Form Suscripcion desde #btn-six Comprar --//
const formularioSuscr = document.querySelector("#btn-six");
const muestraFormularioSuscr = document.querySelector(
  ".container-form-suscrip"
);
formularioSuscr.addEventListener("click", () => {
  muestraFormularioSuscr.classList.toggle("activado");
});
//-- Mostrar ventana de presentación de Video GastroRest --//
const videoGastroRest = document.querySelector("#btn-video-uno");
const contVideoGastroRest = document.querySelector(
  ".contenedor-video-gastrorest"
);
videoGastroRest.addEventListener("click", () => {
  contVideoGastroRest.classList.toggle("activado");
});
function mostrarVideoGastroRest() {
  if (
    (document.querySelector(".contenedor-video-gastrorest").style.display =
      "block")
  );
  document.querySelector(".contenedor-video-appcontrato").style.display = "none";
  document.querySelector(".contenedor-video-apptabaco").style.display = "none";
  document.querySelector(".contenedor-video-agroquimica").style.display = "none";
  document.querySelector(".contenedor-profesionales").style.display = "none";
  document.querySelector(".contenedor-video-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Video AppContratoAlquiler --//
const videoAppcontrato = document.querySelector("#btn-video-dos");
const contVideoAppcontrato = document.querySelector(
  ".contenedor-video-appcontrato"
);
videoAppcontrato.addEventListener("click", () => {
  contVideoAppcontrato.classList.toggle("activado");
});
function mostrarVideoAppcontrato() {
  if (
    (document.querySelector(".contenedor-video-appcontrato").style.display =
      "block")
  );
  document.querySelector(".contenedor-video-gastrorest").style.display = "none";
  document.querySelector(".contenedor-video-apptabaco").style.display = "none";
  document.querySelector(".contenedor-video-agroquimica").style.display = "none";
  document.querySelector(".contenedor-video-profesionales").style.display =
    "none";
  document.querySelector(".contenedor-video-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Video AppTABACO --//
const videoAppTabaco = document.querySelector("#btn-video-tres");
const contVideoAppTabaco = document.querySelector(".contenedor-video-apptabaco");
videoAppTabaco.addEventListener("click", () => {
  contVideoAppTabaco.classList.toggle("activado");
});
function mostrarVideoAppTabaco() {
  if (
    (document.querySelector(".contenedor-video-apptabaco").style.display =
      "block")
  );
  document.querySelector(".contenedor-video-gastrorest").style.display = "none";
  document.querySelector(".contenedor-video-appcontrato").style.display = "none";
  document.querySelector(".contenedor-video-agroquimica").style.display = "none";
  document.querySelector(".contenedor-video-profesionales").style.display =
    "none";
  document.querySelector(".contenedor-video-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Video AgroQuimicaSolutions --//
const videoAgroQuimica = document.querySelector("#btn-video-cuatro");
const contVideoAgroQuimica = document.querySelector(
  ".contenedor-video-agroquimica"
);
videoAgroQuimica.addEventListener("click", () => {
  contVideoAgroQuimica.classList.toggle("activado");
});
function mostrarVideoAgroQuimica() {
  if (
    (document.querySelector(".contenedor-video-agroquimica").style.display =
      "block")
  );
  document.querySelector(".contenedor-video-gastrorest").style.display = "none";
  document.querySelector(".contenedor-video-appcontrato").style.display = "none";
  document.querySelector(".contenedor-video-apptabaco").style.display = "none";
  document.querySelector(".contenedor-video-profesionales").style.display =
    "none";
  document.querySelector(".contenedor-video-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Video Profesionales-Sianca-Valley --//
const videoProfesionales = document.querySelector("#btn-video-cinco");
const contVideoProfesionales = document.querySelector(
  ".contenedor-video-profesionales"
);
videoProfesionales.addEventListener("click", () => {
  contVideoProfesionales.classList.toggle("activado");
});
function mostrarVideoProfesionales() {
  if (
    (document.querySelector(".contenedor-video-profesionales").style.display =
      "block")
  );
  document.querySelector(".contenedor-video-gastrorest").style.display = "none";
  document.querySelector(".contenedor-video-appcontrato").style.display = "none";
  document.querySelector(".contenedor-video-apptabaco").style.display = "none";
  document.querySelector(".contenedor-video-agroquimica").style.display = "none";
  document.querySelector(".contenedor-video-rangerarbsoftdisk").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Video RangerarbsoftDisk --//
const videoRangerarbDisk = document.querySelector("#btn-video-seis");
const contVideoRangerarbsoftDisk = document.querySelector(
  ".contenedor-video-rangerarbsoftdisk"
);
videoRangerarbDisk.addEventListener("click", () => {
  contVideoRangerarbsoftDisk.classList.toggle("activado");
});
function mostrarVideoRangerarbDisk() {
  if (
    (document.querySelector(
      ".contenedor-video-rangerarbsoftdisk"
    ).style.display = "block")
  );
  document.querySelector(".contenedor-video-gastrorest").style.display = "none";
  document.querySelector(".contenedor-video-appcontrato").style.display = "none";
  document.querySelector(".contenedor-video-apptabaco").style.display = "none";
  document.querySelector(".container-video-agroquimica").style.display = "none";
  document.querySelector(".contenedor-video-profesionales").style.display =
    "none";
}
//-- Mostrar ventana de presentación de Form Suscripción GastroRest--//
const FormSuscrip = document.querySelector("#btn4");
const muestraFormSuscripcion = document.querySelector(
  ".container-form-suscrip"
);
FormSuscrip.addEventListener("click", () => {
  muestraFormSuscripcion.classList.toggle("activado");
});
//-- Funcion para validar FormSuscripcion --//
function validar() {
  var nombreProducto,
    nombres,
    apellidos,
    documento,
    domicilio,
    telefono,
    email,
    clave,
    expresion;
  nombreProducto = document.getElementById("nombreProducto").value;
  nombres = document.getElementById("nombres").value;
  apellidos = document.getElementById("apellidos").value;
  documento = document.getElementById("dni").value;
  domicilio = document.getElementById("domicilio").value;
  telefono = document.getElementById("telefono").value;
  email = document.getElementById("email").value;
  clave = document.getElementById("pass").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if (
    nombreProducto === "" ||
    nombres === "" ||
    apellidos === "" ||
    documento === "" ||
    domicilio === "" ||
    telefono === "" ||
    email === "" ||
    clave === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombres.text.length > 48) {
    alert("Ingrese no más de 48 carácteres");
    return false;
  } else if (nombres.text) {
    alert("Ingrese no más de 48 carácteres");
    return false;
  } else if (apellidos.length > 48) {
    alert("Ingrese no más de 48 carácteres");
    return false;
  } else if (documento.length > 8 || documento.length < 8) {
    alert("Ingrese 8 carácteres");
    return false;
  } else if (isNan(documento)) {
    alert("Ingrese solo números");
    return false;
  } else if (domicilio.length > 50) {
    alert("Ingrese no más de 50 carácteres");
    return false;
  } else if (telefono.length > 10) {
    alert("Ingrese no más de 10 carácteres");
    return false;
  } else if (isNan(telefono)) {
    alert("Ingrese solo números");
    return false;
  } else if (email.length > 50) {
    alert("Ingrese no más de 50 carácteres");
    return false;
  } else if (!expresion.text(email)) {
    alert("El email no es válido");
    return false;
  } else if (clave.length > 10 || clave.length < 10) {
    alert("Ingrese clave de 10 carácteres");
    return false;
  }
}
function soloNumeros(evt) {
  if (window.event) {
    keynum = evt.keyCode;
  } else {
    keynum = evt.wich;
  }
  if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
    return true;
  } else {
    alert("Ingrese solo números");
  }
}

function soloLetras(evt) {
  key = e.keyCode || e.wich;
  tecla = String.fromCharCode(key).toString();
  letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
  especiales = [8, 13];
  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales(i)) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.keyCode(tecla) == -1 && !tecla_especial) {
    alert("Ingresar solo letras");
    return false;
  }
}
//-- Mostrar ventana de presentación de Form Validacion GastroRest--//
const validarPass = document.querySelector("#btn3");
const formValidar = document.querySelector(".form-validar");
validarPass.addEventListener("click", () => {
  formValidar.classList.toggle("activado");
});
//-- Mostrar Formulario de Recuperación --//
const enviarCode = document.querySelector("#validar-pass");
const formEnvCod = document.querySelector(".form-enviar-codigo");
enviarCode.addEventListener("click", () => {
  formEnvCod.classList.toggle("activado");
});
function mostrarRecupPass() {
  if ((document.querySelector(".form-recup-password").style.display = "block"));
  document.querySelector(".form-enviar-codigo").style.display = "none";
}
//-- Mostrar Formulario de Recuperación --//
const recupPass = document.querySelector("#enviar-codigo");
const muestraFormRecuperarPass = document.querySelector(".form-recup-password");
recupPass.addEventListener("click", () => {
  muestraFormRecuperarPass.classList.toggle("activado");
});
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
const selectProductos = document.querySelector(".select_productos");

const btnOne = document.querySelector("#btn-one");
btnOne.addEventListener("click", () => {
  selectProductos.selectedIndex = 0;
});

const btnTwo = document.querySelector("#btn-two");
btnTwo.addEventListener("click", () => {
  selectProductos.selectedIndex = 1;
});

const btnThree = document.querySelector("#btn-three");
btnThree.addEventListener("click", () => {
  selectProductos.selectedIndex = 2;
});

const btnFour = document.querySelector("#btn-four");
btnFour.addEventListener("click", () => {
  selectProductos.selectedIndex = 3;
});

const btnFive = document.querySelector("#btn-five");
btnFive.addEventListener("click", () => {
  selectProductos.selectedIndex = 4;
});

const btnSix = document.querySelector("#btn-six");
btnSix.addEventListener("click", () => {
  selectProductos.selectedIndex = 5;
});

// Para deshabilitar la selección desde el select
selectProductos.addEventListener("change", () => {
  selectProductos.selectedIndex = -1;
});
