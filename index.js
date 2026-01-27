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

// show date and day
function showDateAndDay() {
  const getDateContainer = document.getElementById("getDateContainer");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const getToday = days[now.getDay()];
  const getMonth = months[now.getMonth()];
  const getDate = now.getDate();
  const getYear = now.getFullYear();

  getDateContainer.innerHTML = `
                  <h3 class="capitalize text-lg font-medium">${getToday},</h3>
                  <h2 class="capitalize text-lg font-bold -mt-1.5">
                    ${getDate} ${getMonth} ${getYear}
                  </h2>
  `;
}
changeMainContainerBgColor();
showDateAndDay();
