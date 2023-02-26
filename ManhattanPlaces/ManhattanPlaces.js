//!Tab List
const tabNavList = document.querySelectorAll('.tab-nav li');
const tabBody = document.querySelectorAll('.tab-body');

tabNavList.forEach((item,index,listArray)=>{
    item.addEventListener('click', () =>{
        if(item.classList.contains('active')){
            return;
        }else{
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        }

        if(listArray[0].classList.contains('active')){
            tabBody[0].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

        if(listArray[1].classList.contains('active')){
            tabBody[1].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

        if(listArray[2].classList.contains('active')){
            tabBody[2].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[0].classList.remove('active');
        }
    })
})

//!Pop up
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



