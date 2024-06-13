import createToggle from "../switch/toggleSwitch.js";

const customHeader = document.querySelector(".header-container");
const customFooter = document.querySelector(".footer-container");

function createHeader () {
  const headerContents = document.createElement("header");
  
  headerContents.innerHTML = `
  <div class="header-contents">
  <h1 class="title">GRID PROJECT</h1>
  <div class="toggle-container"></div>
  </div>
  `;
  
  customHeader.appendChild(headerContents);

  const toggleContainer = document.querySelector(".toggle-container");
  
  toggleContainer.appendChild(createToggle());

}

function createFooter () {
  const footerContents = document.createElement("footer");

  footerContents.innerHTML = `
    <div class="footer-contents">
      <p>제작 : </p>
      <span>김영준(hotline404)</span>
      <p>email : </p>
      <span>cosmoyj7733@gmail.com</span>
    </div>
  `;

  customFooter.appendChild(footerContents);
}

document.addEventListener("DOMContentLoaded", function () {
  createHeader();
  createFooter();
})