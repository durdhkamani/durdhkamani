document.addEventListener("mousemove", function (event) {
    const x = event.pageX - 10;
    const y = event.pageY - 10;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

$('.custom-cursor').on("mouseover", function () {
    $('#cursor').css({ 'transform': 'scale(4)' });
});

$('.custom-cursor-name').on("mouseover", function () {
    $('#cursor').css({ 'transform': 'scale(3)' });
});

$('div').on("mouseleave", function () {
    $('#cursor').css({ 'transform': 'scale(1.5)' });
});

// **************************************

function navMenu() {
    var x = document.getElementById("navbarMenuCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}





























