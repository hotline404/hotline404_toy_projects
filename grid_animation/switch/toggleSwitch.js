const toggleContainer = document.querySelector(".toggle-container")

function createToggle () {
  const toggleSwitch = document.createElement("div");

  toggleSwitch.innerHTML = `
    <label>
      <input role="switch" type="checkbox" />
      <span>모드</span>
    </label>
  `

  toggleContainer.appendChild(toggleSwitch);
}