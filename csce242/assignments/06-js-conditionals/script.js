// navigation references
const toggleNavButton = document.getElementById("toggle-nav");
const toggleArrow = document.getElementById("toggle-arrow");
const exerciseList = document.getElementById("exercise-list");
const exerciseLinks = document.querySelectorAll(".exercise-link");
const exerciseViews = document.querySelectorAll(".exercise-view");

// exercise 1 references
const minutesSlider = document.getElementById("minutes-slider");
const minutesValue = document.getElementById("minutes-value");
const exerciseOneMessage = document.getElementById("exercise-1-message");

// exercise 2 references
const countdownValue = document.getElementById("countdown-value");
const exerciseTwoMessage = document.getElementById("exercise-2-message");
const mobileBreakpoint = 768;

// exercise 1 conditional messaging
const updateExerciseOneMessage = () => {
    const minutes = Number(minutesSlider.value);
    const minuteLabel = minutes === 1 ? "minute" : "minutes";
    minutesValue.textContent = `${minutes} ${minuteLabel}`;

    if (minutes > 45) {
        exerciseOneMessage.textContent = "🍳 Plenty of time. Breakfast victory lap before class.";
    } else if (minutes >= 30) {
        exerciseOneMessage.textContent = "📘 Nice buffer. Review one more concept and head out.";
    } else if (minutes >= 15) {
        exerciseOneMessage.textContent = "☕ Grab your coffee. You are in the productive zone.";
    } else {
        exerciseOneMessage.textContent = "🏃 Final sprint. Move now and make a smooth entrance.";
    }
};

// exercise 2 conditional messaging
const updateCountdownMessage = () => {
    const now = new Date();
    const classTime = new Date(now);
    classTime.setHours(8, 30, 0, 0);

    const diffMinutes = Math.floor((classTime.getTime() - now.getTime()) / 60000);
    const absMinutes = Math.abs(diffMinutes);

    if (diffMinutes > 15) {
        exerciseTwoMessage.textContent = "🧘 More than 15 minutes left. Easy pace and no stress.";
    } else if (diffMinutes >= 10) {
        exerciseTwoMessage.textContent = "🎒 10-15 minutes left. Gather your stuff and roll out.";
    } else if (diffMinutes >= 5) {
        exerciseTwoMessage.textContent = "🚶 5-10 minutes left. Time to start heading in.";
    } else if (diffMinutes >= 0) {
        exerciseTwoMessage.textContent = "⚡ 0-5 minutes left. Lock in and move quickly.";
    } else if (diffMinutes >= -5) {
        exerciseTwoMessage.textContent = "🤫 Class started a few minutes ago. Quiet entry mode.";
    } else if (diffMinutes >= -15) {
        exerciseTwoMessage.textContent = "😅 Up to 15 minutes late. Slide in and catch up fast.";
    } else {
        exerciseTwoMessage.textContent = "📝 More than 15 minutes late. Borrow notes and reset.";
    }

    if (diffMinutes > 0) {
        countdownValue.textContent = `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} until 8:30 AM`;
    } else if (diffMinutes === 0) {
        countdownValue.textContent = "It is 8:30 AM right now.";
    } else {
        countdownValue.textContent = `${absMinutes} minute${absMinutes === 1 ? "" : "s"} since 8:30 AM`;
    }
};

// navigation actions
const toggleMobileMenu = () => {
    exerciseList.classList.toggle("hide-small");
    const menuOpen = !exerciseList.classList.contains("hide-small");
    toggleArrow.textContent = menuOpen ? "▲" : "▼";
};

const showExercise = (viewId) => {
    exerciseViews.forEach((view) => {
        view.classList.toggle("hidden", view.id !== viewId);
    });

    exerciseLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.view === viewId);
    });

    if (window.innerWidth < mobileBreakpoint) {
        exerciseList.classList.add("hide-small");
        toggleArrow.textContent = "▼";
    }

    if (viewId === "exercise-2") {
        updateCountdownMessage();
    }
};

// event hooks
toggleNavButton.onclick = toggleMobileMenu;
minutesSlider.oninput = updateExerciseOneMessage;

exerciseLinks.forEach((link) => {
    link.onclick = () => {
        showExercise(link.dataset.view);
    };
});

window.onresize = () => {
    if (window.innerWidth >= mobileBreakpoint) {
        toggleArrow.textContent = "▼";
    }
};

// initial state
updateExerciseOneMessage();
updateCountdownMessage();
setInterval(updateCountdownMessage, 60000);
