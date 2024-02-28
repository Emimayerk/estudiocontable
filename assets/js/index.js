const toggleMenu = document.querySelector('.toggle-menu');
const infoMenu = document.querySelector('.menu');

const derechoPenal = document.querySelector('.derecho-penal');
const s1 = document.querySelector('.s-1');
const descriptionServices1 = document.querySelector('.description-services-1');

const prevencion = document.querySelector('.prevencion');
const s2 = document.querySelector('.s-2');
const descriptionServices2 = document.querySelector('.description-services-2');

const corporativos = document.querySelector('.corporativos');
const s3 = document.querySelector('.s-3');
const descriptionServices3 = document.querySelector('.description-services-3');

const bancario = document.querySelector('.bancario');
const s4 = document.querySelector('.s-4');
const descriptionServices4 = document.querySelector('.description-services-4');

const tributario = document.querySelector('.tributario');
const s5 = document.querySelector('.s-5');
const descriptionServices5 = document.querySelector('.description-services-5');

const laboral = document.querySelector('.laboral');
const s6 = document.querySelector('.s-6');
const descriptionServices6 = document.querySelector('.description-services-6');

const familias = document.querySelector('.familias');
const s7 = document.querySelector('.s-7');
const descriptionServices7 = document.querySelector('.description-services-7');

const municipios = document.querySelector('.municipios');
const s8 = document.querySelector('.s-8');
const descriptionServices8 = document.querySelector('.description-services-8');

const juridico = document.querySelector('.juridico');
const s9 = document.querySelector('.s-9');
const descriptionServices9 = document.querySelector('.description-services-9');

const blog = document.querySelector('.blog');
const s10 = document.querySelector('.s-10');
const descriptionServices10 = document.querySelector('.description-services-10');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  infoMenu.classList.toggle('menu-active');
});

derechoPenal.addEventListener('click', () => {
  descriptionServices1.classList.toggle('description-services-1-active');
  s1.classList.toggle('s1-active');
});

prevencion.addEventListener('click', () => {
  descriptionServices2.classList.toggle('description-services-2-active');
  s2.classList.toggle('s2-active');
});

corporativos.addEventListener('click', () => {
  descriptionServices3.classList.toggle('description-services-3-active');
  s3.classList.toggle('s3-active');
});

bancario.addEventListener('click', () => {
  descriptionServices4.classList.toggle('description-services-4-active');
  s4.classList.toggle('s4-active');
});

tributario.addEventListener('click', () => {
  descriptionServices5.classList.toggle('description-services-5-active');
  s5.classList.toggle('s5-active');
});

laboral.addEventListener('click', () => {
  descriptionServices6.classList.toggle('description-services-6-active');
  s6.classList.toggle('s6-active');
});

familias.addEventListener('click', () => {
  descriptionServices7.classList.toggle('description-services-7-active');
  s7.classList.toggle('s7-active');
});

municipios.addEventListener('click', () => {
  descriptionServices8.classList.toggle('description-services-8-active');
  s8.classList.toggle('s8-active');
});

juridico.addEventListener('click', () => {
  descriptionServices9.classList.toggle('description-services-9-active');
  s9.classList.toggle('s9-active');
});

blog.addEventListener('click', () => {
  descriptionServices10.classList.toggle('description-services-10-active');
  s10.classList.toggle('s10-active');
});

// CONTROL HEADER AND NAV MENU

let initPosition = [];
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const setInitPosition = window.pageYOffset;
  if (initPosition > setInitPosition) {
    header.style.top = '0';
  } else {
    header.style.top = '-199.8px';
  }

  initPosition = setInitPosition;
});

const itemMenu1 = document.getElementById('item-menu-1');
const itemMenu2 = document.getElementById('item-menu-2');
const itemMenu3 = document.getElementById('item-menu-3');
const itemMenu4 = document.getElementById('item-menu-4');
const itemMenu5 = document.getElementById('item-menu-5');

itemMenu1.addEventListener('click', () => {
  infoMenu.classList.replace('menu-active', 'menu');
  toggleMenu.classList.replace('active', 'toggle-menu');
});

itemMenu2.addEventListener('click', () => {
  infoMenu.classList.replace('menu-active', 'menu');
  toggleMenu.classList.replace('active', 'toggle-menu');
});

itemMenu3.addEventListener('click', () => {
  infoMenu.classList.replace('menu-active', 'menu');
  toggleMenu.classList.replace('active', 'toggle-menu');
});

itemMenu4.addEventListener('click', () => {
  infoMenu.classList.replace('menu-active', 'menu');
  toggleMenu.classList.replace('active', 'toggle-menu');
});

itemMenu5.addEventListener('click', () => {
  infoMenu.classList.replace('menu-active', 'menu');
  toggleMenu.classList.replace('active', 'toggle-menu');
});

let map;
function initMap() {
  const coord = { lat: -32.942291, lng: -60.6352772 };
  map = new google.maps.Map(document.getElementById('gmap'), {
    center: coord,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}


// ENVIO DE FORMULARIO

const buttonForm = document.getElementById('button-form');

buttonForm.addEventListener('click', () => {
  let nombre = document.getElementById('nombre').value;
  let celular = document.getElementById('celular').value;
  let mensaje = document.getElementById('mensaje').value;
  let mail = document.getElementById('email').value;

  window.open(
    'mailto:martinezgorostiagaestudio@gmail.com?subjet' +
      'ha realizado una consulta desde https://martinezgorostiaga.com' +
      '&body=%0D%0A Mensaje: ' +
      mensaje +
      '%0D%0A Teléfono: ' +
      celular +
      '%0D%0A Nombre y Apellido: ' +
      nombre
  );

  window.location.reload();
});