var sideNav = document.querySelector('.side-nav');
var collapseBtn = document.querySelector('.arrow-and-lines')
var body = document.querySelector('body');
var topBar = document.querySelector('section');
var article = document.querySelector('article');
var main = document.querySelector('main');
var header = document.querySelector('header');
var aside = document.querySelector('aside');

collapseBtn.addEventListener('click', toggleNav);

function toggleNav() {
  if (sideNav.style.display === "" || sideNav.style.display === "block") {
    toggleOff();
  } else {
    toggleOn();
  }
}

function toggleOff() {
  sideNav.
  sideNav.style.display = "none";
  body.style.gridTemplateColumns = "1fr 400px";
  topBar.style.gridColumn = "1/3";
  header.style.gridColumn = "1/3";
  article.style.gridColumn = "1/3";
  main.style.gridColumn = "1";
  aside.style.gridColumn = "2";
}

function toggleOn() {
  sideNav.style.display = "";
  body.style.gridTemplateColumns = "220px 1fr 400px";
  topBar.style.gridColumn = "2/4";
  header.style.gridColumn = "2/4";
  article.style.gridColumn = "2/4";
  main.style.gridColumn = "2";
  aside.style.gridColumn = "3";
}