const water = document.getElementById("water");
const bubbleCount = 24;

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function applyRandomBubbleValues(bubble) {
    const bubbleSize = randomBetween(10, 24);
    const bubbleLeft = randomBetween(8, 92);
    const riseDuration = randomBetween(5.4, 10.4);
    const riseDelay = randomBetween(0, 5.8);
    const driftX = randomBetween(-22, 22);

    bubble.style.width = bubbleSize + "px";
    bubble.style.height = bubbleSize + "px";
    bubble.style.left = "calc(" + bubbleLeft + "% - " + bubbleSize / 2 + "px)";
    bubble.style.setProperty("--rise-duration", riseDuration + "s");
    bubble.style.setProperty("--rise-delay", riseDelay + "s");
    bubble.style.setProperty("--drift-x", driftX + "px");
}

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";

    applyRandomBubbleValues(bubble);
    bubble.onanimationiteration = function () {
        applyRandomBubbleValues(bubble);
    };

    water.appendChild(bubble);
}
