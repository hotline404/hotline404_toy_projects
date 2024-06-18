import createGridBox from "../contents/grid-contents/createGridBox.js"
import { grid_ARR } from "./contentItems/items.js";

const contentsContainer = document.querySelector(".contents-container");

function createContents () {
  console.log("asdfafaf");
  const contents = document.createElement("div");
  contents.className = "contents";


  contents.innerHTML = `
    
      <div class="grid-contents"></div>
    
  `

  contentsContainer.appendChild(contents);


  const gridContents = document.querySelector(".grid-contents");
  const gridElement = createGridBox(grid_ARR);

  gridElement.forEach(div => gridContents.appendChild(div));
}

document.addEventListener("DOMContentLoaded", function () {
  createContents();
})