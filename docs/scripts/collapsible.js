var collapsible_elements = document.getElementsByClassName("collapsible");
console.log(collapsible_elements.length);
for (let a of collapsible_elements) {
    console.log("jsijdjs");
}
for (let collapsible_element of collapsible_elements) {
    console.log("sdsds");
    collapsible_element.addEventListener("click", () => {
        alert("ksdjsjdi");
        this.classList.toggle("active");
        var collapsible_content = this.nextElementSibling;
        if (collapsible_content.style.display === "block") {
            collapsible_content.style.display = "none";
        } else {
            collapsible_content.style.display = "block";
        }
    })
};