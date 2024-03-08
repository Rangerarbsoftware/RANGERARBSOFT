//-- Mostrar y ocultar ventana de enlaces-menu --// 	
const logo=document.querySelector('.logo');const enlaces=document.querySelector('.enlaces-menu');logo.addEventListener('click',() => {enlaces.classList.toggle('activado');}); 	
//-- Mostrar/ocultar buscar(placeholder) --//
const lupa=document.querySelector('.lupa');const muestraPlaceholder=document.querySelector('.icono-placeholder-image');lupa.addEventListener('click',() => {muestraPlaceholder.classList.toggle('activado');});
//-- Mostrar ventana de Home(Inicio-Nosotros-Contacto-Suscribirse-Calendario) --//
const home=document.querySelector('#home');const muestraInicio=document.querySelector('.left-inicio');home.addEventListener('click',() => {muestraInicio.classList.toggle('activado');});
//-- Mostrar Inicio o Presentación  --//
const itemUno=document.querySelector('.item-uno');const muestraContInicio=document.querySelector('.contenedor-inicio');itemUno.addEventListener('click',() => {muestraContInicio.classList.toggle('activado');});

