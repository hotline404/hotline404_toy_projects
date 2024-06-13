const contentsContainer = document.querySelector(".contents-container");

function createContents () {
  const contents = document.createElement("div");

  contents.innerHTML = `
    <div class="contents">
      <h1>컨텐츠 들어갈 자리 </h1>
    </div>
  `

  contentsContainer.appendChild(contents);
}

document.addEventListener("DOMContentLoaded", function () {
  createContents();
})