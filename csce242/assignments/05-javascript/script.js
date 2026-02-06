// references
const triangle = document.getElementById("triangle");
const geometryPanel = document.getElementById("geometry-panel");
const dateInput = document.getElementById("date-picker");
const dateOutput = document.getElementById("date-output");
const sunImage = document.getElementById("sun-image");
const imageFrame = document.getElementById("image-frame");

// triangle panel interaction
const toggleTriangle = () => {
    triangle.classList.toggle("is-visible");
};

// Date picker formatting and output
const updateDate = () => {
    const dateValue = dateInput.value;

    if (dateValue === "") {
        dateOutput.textContent = "";
        dateOutput.classList.remove("is-visible");
        return;
    }

    const dateParts = dateValue.split("-");
    const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    dateOutput.textContent = `You picked the date: ${formattedDate}`;
    dateOutput.classList.add("is-visible");
};

// Image frame
const toggleSun = () => {
    sunImage.classList.toggle("is-sunny");
    imageFrame.classList.toggle("frame-on");
};

// Event triggers
geometryPanel.onclick = toggleTriangle;
dateInput.onchange = updateDate;
sunImage.onclick = toggleSun;
