//-- Mostrar y ocultar ventana de enlaces-menu --// 	
const logo=document.querySelector('.logo');const enlaces=document.querySelector('.enlaces-menu');logo.addEventListener('click',() => {enlaces.classList.toggle('activado');}); 	
//-- Mostrar/ocultar buscar(placeholder) --//
const lupa=document.querySelector('.lupa');const muestraPlaceholder=document.querySelector('.icono-placeholder-image');lupa.addEventListener('click',() => {muestraPlaceholder.classList.toggle('activado');});
//-- Mostrar ventana de Home(Inicio-Nosotros-Contacto-Suscribirse-Calendario) --//
const home=document.querySelector('#home');const muestraInicio=document.querySelector('.left-inicio');home.addEventListener('click',() => {muestraInicio.classList.toggle('activado');});
//-- Mostrar Inicio o Presentación  --//
const itemUno=document.querySelector('.item-uno');const muestraContInicio=document.querySelector('.contenedor-inicio');itemUno.addEventListener('click',() => {muestraContInicio.classList.toggle('activado');});
//-- Mostrar ventana de presentación de Nosotros --//
const itemDos=document.querySelector('.item-dos');const contRangerarbsoft=document.querySelector('.container-rangerarbsoft');itemDos.addEventListener('click',() => {contRangerarbsoft.classList.toggle('activado');}); 
//-- Mostrar ventana de presentación de Contacto --//
const itemTres=document.querySelector('.item-tres');const contContacto=document.querySelector('.contenedor-contacto');itemTres.addEventListener('click',() => {contContacto.classList.toggle('activado');});
//-- Mostrar Formulario de Suscripción --//
const itemCuatro=document.querySelector('.item-cuatro');const muestraContainerForm=document.querySelector('.container-form');itemCuatro.addEventListener('click',() => {muestraContainerForm.classList.toggle('activado');});
//-- Mostrar Formulario de Validación --//
const validarPass=document.querySelector('#validar-pass');const formValidar=document.querySelector('.form-validar');validarPass.addEventListener('click',() => {formValidar.classList.toggle('activado');});
//-- Mostrar Formulario de Recuperación --//
const recupPass=document.querySelector('#validar');const formEnvCod=document.querySelector('.form-enviar-codigo');recupPass.addEventListener('click',() => {formEnvCod.classList.toggle('activado');});
//-- Mostrar ventana de Calendario --//
const itemCinco=document.querySelector('.item-cinco');const contCalendario=document.querySelector('.cont-calendario');itemCinco.addEventListener('click',() => {contCalendario.classList.toggle('activado');}); 

