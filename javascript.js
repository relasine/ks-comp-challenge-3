var collapsePicBtn = document.querySelector('.border-arrow');
var collapseBtn = document.querySelector('.arrow-and-lines');
var mainSection = document.querySelector('main');
var viewPort = document.querySelector('window');
var sideNav = document.querySelector('.side-nav');
var chartsDiv = document.querySelector('.charts');

collapseBtn.addEventListener('click', toggleNav);
collapsePicBtn.addEventListener('click', togglePics);

function toggleNav() {
  if (sideNav.style.display === "") {
    toggleOff();
  } else {
    toggleOn();
  }
}

function toggleOff() {
  sideNav.style.display = "none";
  mainSection.style.gridColumn = "1/3"
  }

function toggleOn() {
  mainSection.style.gridColumn = "2"
  sideNav.style.display = "";
  }

function togglePics() {
  if (chartsDiv.style.display === "") {
    togglePicsOff();
  } else {
    togglePicsOn();
  }
}

function togglePicsOff() {
  chartsDiv.style.display = "none";
  collapsePicBtn.classList.add('fa-chevron-circle-down')
  collapsePicBtn.classList.remove('fa-chevron-circle-up')
  }

function togglePicsOn() {
  chartsDiv.style.display = "";
  collapsePicBtn.classList.add('fa-chevron-circle-up')
  collapsePicBtn.classList.remove('fa-chevron-circle-down')
  }