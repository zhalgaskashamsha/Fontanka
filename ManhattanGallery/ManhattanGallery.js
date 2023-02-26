// !Booking pop up
const clickToAction = document.getElementById("click-to-action");
const popUp = document.getElementById("pop-up");
const popUpCloseButton = document.getElementById("pop-up__close-button");
const popUpSendButton = document.getElementById("pop-up__send-button");

clickToAction.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add("active");
})

popUpCloseButton.addEventListener('click', () => {
    popUp.classList.remove("active");
})

popUpSendButton.addEventListener('click', () => {
    popUp.classList.remove("active");
})

// !Image pop up
const closeBtn = document.querySelector(".image-popup__close");
const images = document.getElementById('image-popup');
const magniGlass = document.getElementById('magni-glass');

magniGlass.addEventListener('click', () => {
    images.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    images.classList.toggle('active');
})


