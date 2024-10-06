
function click_cmd() {
    let count = 1;
    let click_counter = document.getElementById("click_counter");
    let click_button = document.getElementById("click_button");
    let reset_button = document.getElementById("reset_button");

    click_button.onclick = function () {
        click_counter.textContent = count;
        count++;
    }

    reset_button.onclick = function () {
        count = 0;
        click_counter.textContent = count;
    }
}
click_cmd()

function scroll_photos() {
    let photos_arr = ["images/photo.jpg", "images/photo2.jpg.webp", "images/photo3.jpg"];
    let photo = document.getElementById("airpods_photo");

    photo.onclick = function () {
        let photo_src = photo.getAttribute("src");

        if (photo_src === photos_arr[0]) {
            photo.setAttribute("src", photos_arr[1]);
        } else if (photo_src === photos_arr[1]) {
            photo.setAttribute("src", photos_arr[2]);
        } else {
            photo.setAttribute("src", photos_arr[0]);
        }
    }
}
scroll_photos()

function user_title() {
    let title = document.querySelector("h1");
    let button = document.getElementById("change_user_btn");

    function setUserName() {
        let userName = prompt("Пожалуйста, введите ваше имя");
        localStorage.setItem("user_name", userName);
        title.textContent = localStorage.getItem("user_name")
    }
    ``
    button.onclick = function () {
        setUserName();
    }

    if (!localStorage.getItem("user_name")) {
        console.log("работает")
        setUserName();
    } else {
        title.textContent = localStorage.getItem("user_name");
    }

}
user_title()
