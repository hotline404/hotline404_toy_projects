const customHeader = document.querySelector(".header-container")

function createHeader () {
  const headerContents = document.createElement("header");

  headerContents.innerHTML = `
    <div class="header-contents">
      <h1 class="title">GRID PROJECT</h1>
    </div>
  `

  customHeader.appendChild(headerContents);
}