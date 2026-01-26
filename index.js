// change mainContainer background color

function changeMainContainerBgColor() {
  // get necessary elements
  const colorPickerBtn = document.getElementById("colorPicker");
  const mainContainer = document.getElementById("mainContainer");

  colorPickerBtn.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);

    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    mainContainer.style.backgroundColor = rgbaColor;
  });
}

changeMainContainerBgColor();
