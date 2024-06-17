import createGridBox from "../contents/grid-contents/createGridBox.js"

const contentsContainer = document.querySelector(".contents-container");

function createContents () {
  const contents = document.createElement("div");
  contents.className = "contents";

  contents.innerHTML = `
    
      <div class="grid-contents"></div>
    
  `

  contentsContainer.appendChild(contents);


  const gridContents = document.querySelector(".grid-contents");

  createGridBox.forEach(div => gridContents.appendChild(div));
}

document.addEventListener("DOMContentLoaded", function () {
  createContents();
})