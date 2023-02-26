// let button = document.querySelector(".like-btn");
// let icon = document.querySelector("like-icon");

// button.addEventListener("click", () => {
//     button.classList.toggle("active");
//     if (button.classList.contains("active")) {
//         createClones(button);
//     }
// })



let icon = document.querySelector(".like-icon")
for ( let button of document.querySelectorAll("like-btn")){

    button.addEventListener("click", function () {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        createClones(button);
    }
    })
};

