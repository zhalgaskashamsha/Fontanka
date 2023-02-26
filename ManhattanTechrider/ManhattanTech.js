const deviceRollButton = document.getElementById("chevrondown");
const deviceRoll = document.querySelectorAll(".deviceroll");
const innerSide = document.getElementById("inner-side");

// Faq accordion
deviceRoll.forEach((deviceroll) => {
    deviceroll.addEventListener('click', () => {
        deviceroll.classList.toggle("active");
    });
});
