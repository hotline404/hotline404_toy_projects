function createToggle () {
  const toggleSwitch = document.createElement("div");
  
  toggleSwitch.innerHTML = `
    <label class="toggle-switch">
      <input role="switch" type="checkbox" />
      <span>다크 모드</span>
    </label>
  `;

  return toggleSwitch;
}

export default createToggle;