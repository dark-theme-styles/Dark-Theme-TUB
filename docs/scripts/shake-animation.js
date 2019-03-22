var icon = document.getElementById("icon_clicked");
icon.addEventListener("click", () => {
    var animation_elements = document.getElementsByClassName("shake-animation");
    for (let anim_elem of animation_elements) {
        anim_elem.classList.toggle("shake-animation-active");
        setTimeout(() => {
            anim_elem.classList.remove("shake-animation-active");
        }, 300)
    }
});