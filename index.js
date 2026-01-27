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

// task cards functionalities
const getTaskCardsContainer = document.getElementById("taskCardsContainer");
const historyContainer = document.getElementById("historyContainer");

getTaskCardsContainer.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  const target = e.target;

  const assignedTask = document.getElementById("assignedTask");
  const completedTask = document.getElementById("completedTask");

  if (target.classList.contains("completeBtn")) {
    // current numbers
    let assignedTaskCount = parseInt(assignedTask.innerText);
    let completedTaskCount = parseInt(completedTask.innerText);
    const card = target.closest(".cardContainer");
    const title = card.querySelector("h2");

    // update counts
    assignedTask.innerText = assignedTaskCount - 1;
    completedTask.innerText = completedTaskCount + 1;

    // alerts
    alert(`Complete ${title.innerText} task`);
    if (parseInt(assignedTask.innerText) === 0) {
      setTimeout(function () {
        alert("🎉 Congratulations you have completed all the tasks!");
      }, 300);
    }

    // disable button
    target.disabled = true;
    target.innerText = "completed";

    // current time
    const now = new Date();
    const time = now.toLocaleTimeString();

    // create history div
    const historyDiv = document.createElement("div");
    historyDiv.className = "p-3 bg-gray-200 rounded-md";

    historyDiv.innerHTML = `<p class="text-sm text-gray-500">
        You have completed <span class="font-medium">${title.innerText}</span> at ${time}
      </p>`;

    historyContainer.appendChild(historyDiv);
  }
});

changeMainContainerBgColor();
showDateAndDay();
