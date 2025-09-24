const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".continue_exit_btn .exit");
const continue_btn = info_box.querySelector(".continue_exit_btn .continue");

start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");
}
