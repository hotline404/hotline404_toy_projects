function createToggle () {
  const toggleSwitch = document.createElement("div");
  
  toggleSwitch.innerHTML = `
    <label>
      <input role="switch" type="checkbox" />
      <span>모드</span>
    </label>
  `;

  return toggleSwitch;
}

export default createToggle;