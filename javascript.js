var collapseBtn = document.querySelector('.arrow-and-lines');
var mainSection = document.querySelector('.main-section-div');
var viewPort = document.querySelector('window');
var sideNav = document.querySelector('.side-nav');

collapseBtn.addEventListener('click', toggleNav);

function toggleNav() {
  if (sideNav.style.display === "") {
    toggleOff();
  } else {
    toggleOn();
  }
}

function toggleOff() {
    console.log("working");
  sideNav.style.display = "none";
  mainSection.style.gridColumn = "1/3"
  }


function toggleOn() {
  mainSection.style.gridColumn = "2"
  sideNav.style.display = "";
  }
